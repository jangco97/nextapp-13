"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
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
  meetTime: Date;
  reservationType: string;
  buyerId: string;
  sellerId: string;
  reservationId: string;
  productId: string;
  sellerName?: string;
  buyerName?: string;
}) => {
  const router = useRouter();
  const [isWithinTime, setIsWithinTime] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(
    meetTime.getTime() - new Date().getTime()
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
            productId: productId,
            buyerName: buyerName,
          }),
        });
        alert("구매확정이 완료되었습니다.");
        router.push("/user?.reservation");
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
            sellerId: sellerId,
            productId: productId,
            sellerName: sellerName,
          }),
        });
        alert("판매확정이 완료되었습니다.");
        router.push("/user?.reservation");
      } catch (error: any) {
        alert(`An error occurred: ${error.message}`);
      }
    }
  };
  useEffect(() => {
    const checkTimeDifference = () => {
      const timeDifference = meetTime.getTime() - Date.now();
      setIsWithinTime(timeDifference <= 60 * 20 * 1000);
    };

    checkTimeDifference(); // 초기 실행

    // 30초마다 시간 차이 확인
    const interval = setInterval(checkTimeDifference, 1 * 30 * 1000);

    return () => {
      clearInterval(interval); // 컴포넌트 언마운트 시 setInterval 정리
    };
  }, [meetTime]);

  useEffect(() => {
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
  }, [timeRemaining]);

  //몇일 남았는지 계산, 1일 2시간 30분 몇초 이런식으로

  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
  return (
    <>
      {isWithinTime && (
        <>
          <button
            className="mr-2 border-2 text-white bg-indigo-400 rounded-xl p-2 mb-2"
            onClick={() => {
              purchase(reservationType);
            }}
          >
            {reservationType === "구매예약" ? "구매확정" : "판매확정"}
          </button>
        </>
      )}
      <div className="w-full">
        {timeRemaining > 0 ? (
          <span className="border-indigo-500 border-2 rounded-lg p-1 text-white bg-slate-500 text-sm">
            <span>
              남은시간:{days !== 0 && days + "일"}{" "}
              {hours !== 0 && hours + "시간"} {minutes !== 0 && minutes + "분"}{" "}
              {seconds !== 0 && seconds + "초"}
            </span>
          </span>
        ) : (
          <span className="border-indigo-500 border-2 rounded-lg p-1 text-white bg-slate-500 text-sm">
            거래 시간이 만료되었습니다.
          </span>
        )}
      </div>
    </>
  );
};

export default UserPurchase;
