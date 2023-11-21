"use client";
import React, { useState, MouseEvent } from "react";
import { FaStar } from "react-icons/fa";
import axios from "axios";
interface PurchaseReviewProps {
  setIsModalOpen: (value: boolean) => void;
  id: string;
  userId: string;
  productId: string;
  sellerId: string;
}
const PurchaseReview = ({
  setIsModalOpen,
  id,
  userId,
  productId,
  sellerId,
}: PurchaseReviewProps) => {
  const [userRating, setUserRating] = useState(0);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const reviewBtnClick = async () => {
    await axios
      .post("/api/review", {
        id: id,
        userId: userId,
        productId: productId,
        userRating: userRating,
        sellerId: sellerId,
        title: title,
        text: text,
      })
      .then((res) => {
        alert(res.data.message);
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
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
      <div>
        {" "}
        <span>제목:</span>
        <input
          className="border-2 border-blue-400 p-2 m-3"
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </div>
      <div>
        <span>내용</span>
        <textarea
          className="border-2 border-blue-400 p-2 m-3"
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
      </div>

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
