"use client";
import React from "react";
import Link from "next/link";
import { FaPlus } from "react-icons/fa6";
import { BiSolidUser } from "react-icons/bi";
import { BsFillChatDotsFill } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { receivechat } from "@/queries";
import { useGetCart } from "@/queries";

const MobileBottom = ({ currentUser }: { currentUser: any }) => {
  const { data } = useGetCart(currentUser?.id as string);
  const { data: chatData } = receivechat(currentUser?.id as string);

  return (
    <div className="w-full fixed bottom-0 h-[50px] bg-slate-500/50 md:hidden z-10">
      <div className="grid grid-cols-4 items-center h-full">
        <Link href="/products/upload">
          <FaPlus className="h-6  text-center w-full  text-white" />
          <div className="text-xs w-full  text-center font-bold text-white">판매하기</div>
        </Link>
        <Link href="/chat">
          <div className="flex relative w-full">
            <BsFillChatDotsFill className="h-6 w-full text-center  text-white" />
            {chatData?.unreadMessageCount && (
              <div className="absolute top-1 right-4 rounded-full bg-violet-700 outline-sky-300 border-2 p-2 w-4 h-4  flex justify-center items-center text-white">
                {chatData?.unreadMessageCount}
              </div>
            )}
          </div>

          <div className="text-xs w-full  text-center font-bold text-white">채팅하기</div>
        </Link>
        <Link prefetch={false} href="/cart">
          <div className="flex relative">
            <AiOutlineShoppingCart className="h-6 w-full text-center text-white"></AiOutlineShoppingCart>
            {data?.favoriteIdsCount && (
              <div className="absolute top-1 right-4 rounded-full bg-violet-700 outline-sky-300 border-2 p-2 w-4 h-4  flex justify-center items-center text-white">
                {data?.favoriteIdsCount}
              </div>
            )}
          </div>

          <div className="text-xs w-full  text-center font-bold text-white">장바구니</div>
        </Link>
        <Link prefetch={false} href="/user?products">
          <div>
            <BiSolidUser className="h-6 w-full text-center  text-white" />
            <div className="text-xs w-full  text-center font-bold text-white">마이페이지</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default MobileBottom;
