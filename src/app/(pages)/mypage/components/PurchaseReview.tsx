"use client";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import axios from "axios";
import { useRouter } from "next/navigation";

interface PurchaseReviewProps {
  setIsModalOpen: (value: boolean) => void;
  id: string;
  userId: string;
  productId: string;
  sellerId: string;
  sellerName: string;
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
}
const PurchaseReview = ({
  setIsModalOpen,
  id,
  userId,
  productId,
  sellerId,
  sellerName,
  isLoading,
  setIsLoading,
}: PurchaseReviewProps) => {
  const router = useRouter();
  const [userRating, setUserRating] = useState(0);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const reviewBtnClick = async () => {
    setIsLoading(true);
    await axios
      .post("/api/review", {
        id: id,
        userId: userId,
        productId: productId,
        userRating: userRating,
        sellerId: sellerId,
        title: title,
        text: text,
        sellerName: sellerName,
      })
      .then((res) => {
        router.refresh();
        alert(res.data.message);
      })
      .catch((err) => {
        alert(err.response.data.message);
      })
      .finally(() => {
        setIsLoading(false);
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
      <form>
        <div>
          {" "}
          <span>제목:</span>
          <input
            className="w-full border-2 p-4 pt-6 font-light bg-white rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed"
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </div>
        <div>
          <label>
            <div>내용:</div>
            <textarea
              id="postContent"
              className="w-full border-2 p-4 pt-6 font-light bg-white rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed"
              name="postContent"
              rows={4}
              cols={30}
              onChange={(e) => setText(e.target.value)}
            />
          </label>
        </div>

        <button
          className="gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 cursor-pointer"
          disabled={isLoading}
          onClick={() => {
            reviewBtnClick();
            setIsModalOpen(false);
          }}
        >
          리뷰작성완료
        </button>
      </form>
    </div>
  );
};

export default PurchaseReview;
