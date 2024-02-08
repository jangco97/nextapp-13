"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import qs from "query-string";
import Link from "next/link";
const Navigation = ({ isGuest }: { isGuest: boolean }) => {
  const params = useSearchParams();
  const currentQuery = qs.parse(params?.toString());
  return (
    <div className="grid grid-cols-4 border-4 border-r-0 text-white bg-gray-400 rounded-sm">
      <Link
        prefetch={false}
        href={{
          query: {
            link: "products",
          },
        }}
      >
        <button
          className={`w-full border-r-4 h-10 ${currentQuery?.link === "products" && "bg-indigo-800/70"}`}
        >
          상품
        </button>
      </Link>
      <Link
        prefetch={false}
        href={{
          query: {
            link: "reviews",
          },
        }}
      >
        <button
          className={`w-full border-r-4 h-10 ${currentQuery?.link === "reviews" && "bg-indigo-800/70"}`}
        >
          리뷰
        </button>
      </Link>
      {isGuest ? null : (
        <>
          <Link
            prefetch={false}
            href={{
              query: {
                link: "favorites",
              },
            }}
          >
            <button
              className={`w-full border-r-4 h-10 ${
                currentQuery?.link === "favorites" && "bg-indigo-800/70"
              }`}
            >
              찜
            </button>
          </Link>
          <Link
            prefetch={false}
            href={{
              query: {
                link: "reservations",
              },
            }}
          >
            <button
              className={`w-full border-r-4 h-10 ${
                currentQuery?.link === "reservations" && "bg-indigo-800/70"
              }`}
            >
              예약
            </button>
          </Link>{" "}
        </>
      )}
    </div>
  );
};

export default Navigation;
