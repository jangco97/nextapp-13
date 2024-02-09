"use client";
import { QueryRes, ReceiveChatRes } from "@/queries";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const NavbarItem = ({
  currentUser,
  favoriteIdsCount,
  chatCount,
}: {
  currentUser: any;
  favoriteIdsCount?: number;
  chatCount?: number;
}) => {
  const router = useRouter();

  return (
    <ul
      className={`flex text-md flex-col ml-5 items-start md:mr-2 md:flex-row md:justify-center md:gap-4 md:w-full md:items-center  `}
    >
      {" "}
      <li className="py-2 text-center cursor-pointer">
        <Link href={"/"}>홈</Link>
      </li>
      {currentUser?.id ? (
        <>
          <li className="py-2 flex justify-evenly text-center cursor-pointer">
            <Link href={"/products/upload"}>판매하기</Link>
          </li>
          <li className="py-2 flex justify-evenly text-center  cursor-pointer">
            <Link prefetch={false} href={"/cart"}>
              장바구니
            </Link>
            {favoriteIdsCount && (
              <div className="rounded-full bg-violet-700 outline-sky-300 border-2 p-2 w-4 h-4  flex justify-center items-center text-white">
                {favoriteIdsCount}
              </div>
            )}
          </li>
          <li className="py-2 text-center cursor-pointer">
            <Link prefetch={false} href={"/user?link=products"}>
              마이페이지
            </Link>
          </li>
          <li className="py-2 flex justify-evenly text-center  cursor-pointer">
            <Link href={"/chat"}>채팅</Link>
            {chatCount && (
              <div className="rounded-full bg-violet-700 outline-sky-300 border-2 p-2 w-4 h-4  flex justify-center items-center text-white">
                {chatCount}
              </div>
            )}
          </li>
          <li className="py-2 text-center cursor-pointer">
            <button onClick={() => signOut()}>로그아웃</button>
          </li>
        </>
      ) : (
        <>
          <li className="py-2 text-center cursor-pointer">
            <button onClick={() => router.push("/auth/login")}>로그인</button>
          </li>
          <li className="py-2 text-center cursor-pointer">
            <button onClick={() => router.push("/auth/register")}>회원가입</button>
          </li>
        </>
      )}{" "}
    </ul>
  );
};

export default NavbarItem;
