"use client";
import React, { useState } from "react";
import useSWRMutation from "swr/mutation";
interface ReservationDelete {
  reservationId: string;
  buyerId: string;
  sellerId: string;
  reservationType: string;
  productId: string;
}

const UserReservationDelete = ({
  reservationId,
  buyerId,
  sellerId,
  reservationType,
  productId,
}: ReservationDelete) => {
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
      };
    }
  ) {
    return fetch(url, {
      method: "POST",
      body: JSON.stringify(arg),
    }).then((res) => res.json());
  }
  const { trigger } = useSWRMutation("/api/chat", sendRequest);
  const deleteReservation = async () => {
    try {
      const response = await fetch(`/api/reservation`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          reservationId: reservationId,
          productId: productId,
        }),
      });

      alert("예약이 취소되었습니다.");
      location.reload();
    } catch (error: any) {
      alert(`An error occurred: ${error.message}`);
    }
    try {
      trigger({
        text: "예약이 취소되었습니다.",
        receiverId: `${reservationType === "구매예약" ? buyerId : sellerId}`,
        senderId: `${reservationType === "구매예약" ? sellerId : buyerId}`,
        productId: productId,
        messageType: "cancelReservation",
      });
    } catch (error: any) {
      console.error(error);
    }
  };

  const handleCancelClick = async () => {
    const confirmCancel = window.confirm("정말 예약을 취소하시겠습니까?");

    if (confirmCancel) {
      await deleteReservation();
    }
  };

  return (
    <div>
      <button
        className="w-4/12 p-2 rounded-lg mt-10 bg-gray-500 hover:bg-indigo-600/50 text-gray-100 text-center"
        onClick={handleCancelClick}
      >
        예약취소
      </button>
    </div>
  );
};

export default UserReservationDelete;
