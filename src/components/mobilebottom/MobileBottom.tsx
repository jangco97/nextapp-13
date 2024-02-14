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
          <div className="flex items-center justify-center relative ">
            <BsFillChatDotsFill className="h-6 text-center  text-white" />
            {chatData?.unreadMessageCount && chatData?.unreadMessageCount > 0 ? (
              <span className="text-white border-2 rounded-full w-4 h-4 p-2 flex items-center justify-center">
                {chatData?.unreadMessageCount}
              </span>
            ) : null}
          </div>

          <div className="text-xs w-full  text-center font-bold text-white">채팅하기</div>
        </Link>
        <Link prefetch={false} href="/cart">
          <div className="flex items-center justify-center relative">
            <AiOutlineShoppingCart className="h-6 text-center text-white"></AiOutlineShoppingCart>
            {data?.favoriteIdsCount && data?.favoriteIdsCount > 0 ? (
              <span className="text-white border-2 rounded-full w-4 h-4 p-2 flex items-center justify-center">
                {data?.favoriteIdsCount}
              </span>
            ) : null}
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
