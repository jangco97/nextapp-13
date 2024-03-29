"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Reservation from "./Reservation";
import PurchaseHistory from "./PurchaseHistory";
import ReservationButton from "./button/ReservationButton";
import { useQuery } from "@tanstack/react-query";
import useSWRMutation from "swr/mutation";
import { formatTime } from "@/helpers/dayjs";
import { useQueryClient } from "@tanstack/react-query";
import { User } from "prisma/generated/client";

const UserReservationClient = ({
  currentUser,
  buyingHistory,
  sellingHistory,
}: {
  currentUser: User;
  buyingHistory: any;
  sellingHistory: any;
}) => {
  const router = useRouter();
  const { data, isLoading, isError } = useQuery({
    queryKey: ["meettime"],
    queryFn: () => fetch("/api/reservation").then((res) => res.json()),
    staleTime: 1 * 60 * 1000,
  });
  const [status, setStatus] = useState("구매예약");
  const [selectedDates, setSelectedDates] = useState<any>({});

  const [isLoading2, setIsLoading2] = useState(false);
  const { myReservation, acceptedReservation } = data || {};
  async function sendRequest(
    url: string,
    {
      arg,
    }: {
      arg: {
        text: string;
        receiverId: string;
        senderId: string;
        productId: string;
        messageType: string;
        address: string;
        addressDetail: string;
        latitude: number;
        longitude: number;
      };
    },
  ) {
    return fetch(url, {
      method: "POST",
      body: JSON.stringify(arg),
    }).then((res) => res.json());
  }
  const { trigger } = useSWRMutation("/api/chat", sendRequest);
  const queryClient = useQueryClient();
  const setMeetTime = async (
    reservationId: string,
    buyerId: string,
    sellerId: string,
    productId: string,
    address: string,
    addressDetail: string,
    latitude: number,
    longitude: number,
  ) => {
    if (!currentUser) return;
    setIsLoading2(true);
    try {
      trigger({
        text: `${formatTime(selectedDates[reservationId])}`,
        receiverId: buyerId,
        senderId: sellerId,
        productId: productId,
        messageType: "meetTime",
        address: address,
        addressDetail: addressDetail,
        latitude: latitude,
        longitude: longitude,
      });
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading2(false);
    }
    try {
      const response = await fetch(`/api/reservation`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          meetTime: selectedDates[reservationId],
          reservationId: reservationId,
        }),
      });
      queryClient.invalidateQueries({ queryKey: ["meettime"] });
      router.refresh();
      alert("예약시간이 변경되었습니다.");
    } catch (error: any) {
      alert(`An error occurred: ${error.message}`);
    }
  };

  const handleDateChange = (date: Date | null, reservationId: string) => {
    setSelectedDates((prevDates: any) => ({
      ...prevDates,
      [reservationId]: date,
    }));
    queryClient.invalidateQueries({ queryKey: ["meettime"] });
  };
  return (
    <div>
      <div className="flex justify-end mb-5 mt-5">
        {" "}
        <ReservationButton setStatus={setStatus} status={status} name="구매예약" />
        <ReservationButton setStatus={setStatus} status={status} name="판매예약" />
        <ReservationButton setStatus={setStatus} status={status} name="구매내역" />
        <ReservationButton setStatus={setStatus} status={status} name="판매내역" />
      </div>

      {/* 구매 예약 상품*/}
      {status === "구매예약" && (
        <Reservation
          currentUser={currentUser}
          products={myReservation}
          setMeetTime={setMeetTime}
          handleDateChange={handleDateChange}
          selectedDates={selectedDates}
          reservationType={"구매예약"}
        />
      )}

      {/* 판매 예약 상품 */}

      {status === "판매예약" && (
        <Reservation
          currentUser={currentUser}
          products={acceptedReservation}
          setMeetTime={setMeetTime}
          handleDateChange={handleDateChange}
          selectedDates={selectedDates}
          reservationType={"판매예약"}
          isLoading={isLoading2}
        />
      )}

      {/* 구매 내역 */}
      {status === "구매내역" && (
        <PurchaseHistory histories={buyingHistory} historyType={"구매내역"} />
      )}

      {status === "판매내역" && (
        <PurchaseHistory histories={sellingHistory} historyType={"판매내역"} />
      )}
    </div>
  );
};

export default UserReservationClient;
