"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import qs from "query-string";
import Link from "next/link";
const Navigation = () => {
  const params = useSearchParams();
  const currentQuery = qs.parse(params?.toString());
  return (
    <div className="grid grid-cols-4 border-4 border-r-0 text-white bg-gray-400 rounded-sm">
      <Link href={{ query: "products" }}>
        <button
          className={`w-full border-r-4 h-10 ${
            "products" in currentQuery && "bg-indigo-800/70"
          }`}
        >
          상품
        </button>
      </Link>
      <Link href={{ query: "reviews" }}>
        <button
          className={`w-full border-r-4 h-10 ${
            "reviews" in currentQuery && "bg-indigo-800/70"
          }`}
        >
          리뷰
        </button>
      </Link>
      <Link href={{ query: "favorites" }}>
        <button
          className={`w-full border-r-4 h-10 ${
            "favorites" in currentQuery && "bg-indigo-800/70"
          }`}
        >
          찜
        </button>
      </Link>
      <Link href={{ query: "reservations" }}>
        <button
          className={`w-full border-r-4 h-10 ${
            "reservations" in currentQuery && "bg-indigo-800/70"
          }`}
        >
          예약
        </button>
      </Link>
    </div>
  );
};

export default Navigation;
