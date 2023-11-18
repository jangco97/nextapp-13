"use client";
import React, { useState, MouseEvent } from "react";
import { FaStar } from "react-icons/fa";
import axios from "axios";
interface PurchaseReviewProps {
  setIsModalOpen: (value: boolean) => void;
  sellerId: string;
  userId: string;
  productId: string;
}
const PurchaseReview = ({
  setIsModalOpen,
  sellerId,
  userId,
  productId,
}: PurchaseReviewProps) => {
  const [userRating, setUserRating] = useState(0);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const reviewBtnClick = async () => {
    const response = await fetch("/api/review", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sellerId: sellerId,
        userId: userId,
        productId: productId,
        title: title,
        text: text,
        userRating: userRating,
      }),
    });
    if (response.ok) {
      alert("리뷰가 등록되었습니다.");
    } else {
      alert("리뷰 등록에 실패하였습니다.");
    }
  };
  return (
    <div className="flex flex-col">
      <div className="flex flex-row items-center gap-1">
        <span className="text-sm font-semibold text-gray-900">평점</span>
        <div className="flex flex-row items-center gap-1">
          {[...Array(5)].map((star, index) => {
            const scoreValue = index + 1;
            return (
              <label key={index}>
                <input
                  type="radio"
                  name="rating"
                  className="hidden"
                  value={scoreValue}
                  onClick={() => setUserRating(scoreValue)}
                />

                <FaStar
                  className="cursor-pointer"
                  color={scoreValue <= userRating ? "#ffc107" : "#e4e5e9"}
                  size={20}
                />
              </label>
            );
          })}
        </div>
      </div>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <input
        type="text"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />

      <button
        className="gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 cursor-pointer"
        onClick={() => {
          reviewBtnClick();
          setIsModalOpen(false);
        }}
      >
        리뷰작성완료
      </button>
    </div>
  );
};

export default PurchaseReview;
