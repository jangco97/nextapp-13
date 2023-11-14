"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import qs from "query-string";
import Reservation from "./Reservation";
import { useQuery } from "@tanstack/react-query";
import PurchaseHistory from "./PurchaseHistory";
import ReservationButton from "./button/ReservationButton";
import useSWRMutation from "swr/mutation";
import { formatTime } from "@/helpers/dayjs";
const UserReservation = ({
  currentUser,
  buyingHistory,
  sellingHistory,
}: {
  currentUser: any;
  buyingHistory: any;
  sellingHistory: any;
}) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["meettime"],
    queryFn: () => fetch("/api/reservation").then((res) => res.json()),
    staleTime: 1 * 60 * 1000,
  });
  const [isAlive, setIsAlive] = useState(false);
  const [status, setStatus] = useState("구매예약");
  const [selectedDates, setSelectedDates] = useState<any>({});
  const router = useRouter();
  const params = useSearchParams();
  const currentQuery = qs.parse(params?.toString());
  const { myReservation, acceptedReservation } = data || {};
  console.log(data, "data");
  useEffect(() => {
    if ("reservations" in currentQuery) {
      setIsAlive(true);
    }
    return () => {
      setIsAlive(false);
    };
  }, [currentQuery]);
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
    }
  ) {
    return fetch(url, {
      method: "POST",
      body: JSON.stringify(arg),
    }).then((res) => res.json());
  }
  const { trigger } = useSWRMutation("/api/chat", sendRequest);

  const setMeetTime = async (
    reservationId: string,
    buyerId: string,
    sellerId: string,
    productId: string,
    address: string,
    addressDetail: string,
    latitude: number,
    longitude: number
  ) => {
    if (!currentUser) return;
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
      if (response.ok) {
        // If the response status is within the 200-299 range, it's a successful response.
        const data = await response.json();
        router.push("/user?reservations");
        setStatus("판매예약");
        alert(data.message);
      }
    } catch (error: any) {
      alert(`An error occurred: ${error.message}`);
    }
  };

  const handleDateChange = (date: Date | null, reservationId: string) => {
    setSelectedDates((prevDates: any) => ({
      ...prevDates,
      [reservationId]: date,
    }));
  };
  return (
    isAlive && (
      <div>
        <div className="flex justify-end mb-5 mt-5">
          {" "}
          <ReservationButton
            setStatus={setStatus}
            status={status}
            name="구매예약"
          />
          <ReservationButton
            setStatus={setStatus}
            status={status}
            name="판매예약"
          />
          <ReservationButton
            setStatus={setStatus}
            status={status}
            name="구매내역"
          />
          <ReservationButton
            setStatus={setStatus}
            status={status}
            name="판매내역"
          />
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
          />
        )}

        {/* 구매 내역 */}
        {status === "구매내역" && (
          <PurchaseHistory histories={buyingHistory} historyType={"구매예약"} />
        )}

        {status === "판매내역" && (
          <PurchaseHistory
            histories={sellingHistory}
            historyType={"구매예약"}
          />
        )}
      </div>
    )
  );
};

export default UserReservation;
