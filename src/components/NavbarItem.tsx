"use client";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const NavbarItem = ({
  currentUser,
  data,
  chatData,
}: {
  currentUser: any;
  data: any;
  chatData?: any;
}) => {
  const router = useRouter();
  const unReadMessage = chatData?.receivedMessages?.filter(
    (message: any) => message.isRead === false
  );
  return (
    <ul
      className={`flex text-md flex-col ml-5 items-start md:mr-2 md:flex-row md:justify-center md:gap-4 md:w-full md:items-center  `}
    >
      {" "}
      <li className="py-2 text-center border-b-4 cursor-pointer">
        <Link href={"/"}>홈</Link>
      </li>
      <li className="py-2 flex justify-evenly text-center border-b-4 cursor-pointer">
        <Link href={"/products/upload"}>판매하기</Link>
      </li>
      <li className="py-2 flex justify-evenly text-center border-b-4 cursor-pointer">
        <Link href={"/cart"}>장바구니</Link>
        <div className="rounded-full bg-violet-700 outline-sky-300 border-2 p-2 w-4 h-4  flex justify-center items-center text-white">
          {data?.favoriteIds?.length | 0}
        </div>
      </li>
      <li className="py-2 text-center border-b-4 cursor-pointer">
        <Link href={"/user?products"}>마이페이지</Link>
      </li>
      <li className="py-2 flex justify-evenly text-center border-b-4 cursor-pointer">
        <Link href={"/chat"}>채팅</Link>
        <div className="rounded-full bg-violet-700 outline-sky-300 border-2 p-2 w-4 h-4  flex justify-center items-center text-white">
          {unReadMessage?.length}
        </div>
      </li>
      {currentUser?.id ? (
        <li className="py-2 text-center border-b-4 cursor-pointer">
          <button onClick={() => signOut()}>로그아웃</button>
        </li>
      ) : (
        <>
          <li className="py-2 text-center border-b-4 cursor-pointer">
            <button onClick={() => router.push("/auth/login")}>로그인</button>
          </li>
          <li className="py-2 text-center border-b-4 cursor-pointer">
            <button onClick={() => router.push("/auth/register")}>
              회원가입
            </button>
          </li>
        </>
      )}{" "}
    </ul>
  );
};

export default NavbarItem;
