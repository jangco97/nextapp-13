"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import qs from "query-string";
import Link from "next/link";
import NothingComponents from "../NothingComponents";
import { FaStar } from "react-icons/fa";
const UserReviews = ({ userReviews }: { userReviews: any }) => {
  const [isAlive, setIsAlive] = useState(false);
  const router = useRouter();
  const params = useSearchParams();
  const currentQuery = qs.parse(params?.toString());
  useEffect(() => {
    if ("reviews" in currentQuery) {
      setIsAlive(true);
    }
    return () => {
      setIsAlive(false);
    };
  }, [currentQuery]);
  return (
    isAlive &&
    (userReviews?.length > 0 ? (
      <div className="flex flex-col">
        {userReviews?.map((review: any) => (
          <div key={review.id} className="border-2 border-red-400 ">
            <div>
              <span>제목:</span>
              {review.title}
            </div>
            <Link href={`/products/${review.productId}`}>
              <div>
                <span>상품이름:</span>
                {review.product?.title}
              </div>
            </Link>
            <Link href={`/user/${review.product?.userId}`}></Link>
            <div>
              <span>판매자:</span>
              {review.sellerName}
            </div>
            <div>
              <span>내용:</span>
              {review.text}
            </div>
            <div>
              <span>평점:</span>
              {[...Array(5)].map((star, index) => {
                const scoreValue = index + 1;
                return (
                  <label key={index}>
                    <FaStar
                      className="cursor-pointer"
                      color={
                        scoreValue <= review.userRating ? "#ffc107" : "#e4e5e9"
                      }
                      size={20}
                    />
                  </label>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    ) : (
      <NothingComponents title="리뷰" pageType="review" />
    ))
  );
};

export default UserReviews;
