"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useQueryClient } from "@tanstack/react-query";

const UserPurchase = ({
  meetTime,
  reservationType,
  buyerId,
  sellerId,
  reservationId,
  productId,
  sellerName,
  buyerName,
}: {
  meetTime: Date | null;
  reservationType: string;
  buyerId: string;
  sellerId: string;
  reservationId: string;
  productId: string;
  sellerName?: string;
  buyerName?: string;
}) => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const [isWithinTime, setIsWithinTime] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(
    meetTime ? new Date(meetTime)?.getTime() - Date.now() : -1,
  );
  const purchase = async (reservationType: string) => {
    if (reservationType === "구매예약") {
      try {
        const response = await fetch(`/api/purchase`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            reservationId: reservationId,
            buyerId: buyerId,
            sellerId: sellerId,
            productId: productId,
            sellerName: sellerName,
            purchaseType: "구매",
          }),
        });
        queryClient.invalidateQueries({ queryKey: ["meettime"] });
        router.refresh();
        alert("구매확정이 완료되었습니다.");
      } catch (error: any) {
        alert(`An error occurred: ${error.message}`);
      }
    } else if (reservationType === "판매예약") {
      try {
        const response = await fetch(`/api/purchase`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            reservationId: reservationId,
            buyerId: buyerId,
            sellerId: sellerId,
            productId: productId,
            buyerName: buyerName,
            purchaseType: "판매",
          }),
        });
        queryClient.invalidateQueries({ queryKey: ["meettime"] });
        router.refresh();
        alert("판매확정이 완료되었습니다.");
      } catch (error: any) {
        alert(`An error occurred: ${error.message}`);
      }
    }
  };
  useEffect(() => {
    const checkTimeDifference = () => {
      if (meetTime === null) return;
      setTimeRemaining((meetTime ? new Date(meetTime)?.getTime() : -1) - Date.now());
      const timeDifference = timeRemaining;
      setIsWithinTime(timeDifference <= 0);
    };

    checkTimeDifference(); // 초기 실행

    // 30초마다 시간 차이 확인
    const interval = setInterval(checkTimeDifference, 1 * 30 * 1000);

    return () => {
      clearInterval(interval); // 컴포넌트 언마운트 시 setInterval 정리
    };
  }, [meetTime, timeRemaining]);

  useEffect(() => {
    if (!timeRemaining) return;

    const interval = setInterval(() => {
      // 1초마다 시간을 감소
      setTimeRemaining(timeRemaining - 1000);

      // 타이머가 만료되면 clearInterval을 호출하여 타이머 정리
      if (timeRemaining <= 0) {
        clearInterval(interval);
      }
    }, 1000);

    return () => {
      clearInterval(interval); // 컴포넌트 언마운트 시 setInterval 정리
    };
  }, [timeRemaining, meetTime]);

  //몇일 남았는지 계산, 1일 2시간 30분 몇초 이런식으로

  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
  return (
    <div className="flex justify-start items-center">
      <div>
        {timeRemaining > 0 && meetTime && (
          <span className="m-2 p-1 rounded-full bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 text-white">
            <span>
              남은시간:{days !== 0 && days + "일"} {hours !== 0 && hours + "시간"}{" "}
              {minutes !== 0 && minutes + "분"} {seconds !== 0 && seconds + "초"}
            </span>
          </span>
        )}
      </div>
      {isWithinTime && meetTime && (
        <div className="ml-1">
          <button
            className="p-1 rounded-full bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 text-white"
            onClick={() => {
              purchase(reservationType);
            }}
          >
            <div className="block text-gray-200 px-1 py-1 font-semibold rounded-full  bg-gray-300/40">
              {" "}
              {reservationType === "구매예약" ? "구매확정" : "판매확정"}
            </div>
          </button>
        </div>
      )}
    </div>
  );
};

export default UserPurchase;
