"use client";
import React from "react";
import Link from "next/link";
import { BiLineChart } from "react-icons/bi";
import { BiSolidUser } from "react-icons/bi";
import { BsFillChatDotsFill } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useQuery } from "@tanstack/react-query";
import { User } from "prisma/generated/client";

const MobileBottom = ({ currentUser }: { currentUser: any }) => {
  const { data } = useQuery<User>({
    queryKey: ["user", currentUser?.favoriteIds],
    queryFn: () => fetch("/api/user").then((res) => res.json()),
    staleTime: 5 * 1000 * 60,
  });
  const { data: chatData } = useQuery({
    queryKey: ["chat"],
    queryFn: () => fetch("/api/receivechat").then((res) => res.json()),
    staleTime: 5 * 1000 * 60,
    refetchInterval: 1000,
  });
  const unReadMessage = chatData?.receivedMessages?.filter(
    (message: any) => message.isRead === false
  );
  return (
    <div className="w-full fixed bottom-0 h-[50px] bg-slate-500/50 md:hidden">
      <div className="flex justify-evenly items-center h-full">
        <Link href="/pricechart">
          <BiLineChart className="h-6  text-center w-full  text-white" />
          <div className="text-sm w-full  text-center font-bold text-white">
            시세확인
          </div>
        </Link>
        <Link href="/chat">
          <div className="flex relative w-full">
            <BsFillChatDotsFill className="h-6 w-full text-center  text-white" />
            <div className="absolute right-0 top-0 rounded-full bg-violet-700 outline-sky-300 border-2 p-2 w-4 h-4  flex justify-center items-center text-white">
              {unReadMessage?.length}
            </div>
          </div>

          <div className="text-sm w-full  text-center font-bold text-white">
            채팅하기
          </div>
        </Link>
        <Link href="/cart">
          <div className="flex relative">
            <AiOutlineShoppingCart className="h-6 w-full text-center text-white"></AiOutlineShoppingCart>
            <div className="absolute top-0 right-0 rounded-full bg-violet-700 outline-sky-300 border-2 p-2 w-4 h-4  flex justify-center items-center text-white">
              {data?.favoriteIds?.length}
            </div>
          </div>

          <div className="text-xs w-full text-center font-bold text-white">
            <span>장바구니</span>
          </div>
        </Link>
        <Link href="/user?products">
          <BiSolidUser className="h-6 w-full text-center  text-white" />
          <div className="text-xs w-full font-bold text-white">마이페이지</div>
        </Link>
      </div>
    </div>
  );
};

export default MobileBottom;
