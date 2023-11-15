"use client";
import React, { useState } from "react";
import useSWRMutation from "swr/mutation";
interface ReservationDelete {
  reservationId: string;
  buyerId: string;
  sellerId: string;
  reservationType: string;
  productId: string;
  productTitle: string;
}

const UserReservationDelete = ({
  reservationId,
  buyerId,
  sellerId,
  reservationType,
  productId,
  productTitle,
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
        productTitle: string;
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
        receiverId: `${reservationType === "구매예약" ? sellerId : buyerId}`,
        senderId: `${reservationType === "구매예약" ? buyerId : sellerId}`,
        productId: productId,
        messageType: "cancelReservation",
        productTitle: productTitle,
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
        className="m-4 p-1 rounded-full bg-gradient-to-r from-rose-400 via-red-500 to-indigo-500"
        onClick={handleCancelClick}
      >
        <span className="block text-gray-200 px-4 py-2 font-semibold rounded-full bg-gray-300/40">
          예약취소
        </span>
      </button>
    </div>
  );
};

export default UserReservationDelete;
