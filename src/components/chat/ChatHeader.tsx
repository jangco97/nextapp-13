"use client";
import React from "react";
import { IoChevronBackCircleSharp } from "react-icons/io5";
import Avatar from "../shared/Avatar";
import { formatTime } from "@/helpers/dayjs";
import { useRouter } from "next/navigation";
import Link from "next/link";
interface ChatHeaderProps {
  setLayout: (layout: boolean) => void;
  receiverName: string;
  receiverImage: string;
  receiverId: string;
  lastMessageTime: Date | undefined;
  detailPage?: boolean;
}
const ChatHeader = ({
  setLayout,
  receiverName,
  receiverImage,
  receiverId,
  lastMessageTime,
  detailPage,
}: ChatHeaderProps) => {
  const router = useRouter();
  return (
    <div className="pl-4 border-b-[1px]">
      <div className="flex items-center h-16 gap-4">
        {!detailPage && (
          <div className="flex items-center justify-center text-3xl text-gray-500 hover:text-gray-800">
            <button onClick={() => setLayout(false)} className="md:hidden">
              <IoChevronBackCircleSharp />
            </button>
          </div>
        )}

        <div className="flex items-center gap-[0.6rem] font-semibold text-sm md:text-lg">
          <div>
            <Avatar src={receiverImage} />
          </div>
          <h2>
            <Link href={`/user/${receiverId}`}>{receiverName}</Link>
            {lastMessageTime && (
              <p className="text-gray-600">{formatTime(lastMessageTime)}</p>
            )}
          </h2>
          {detailPage && (
            <button
              className="p-2 flex justify-center items-center border-2  border-indigo-400 text-indigo-400 rounded-md hover:bg-indigo-700 hover:text-white"
              onClick={() => router.push("/chat")}
            >
              <h2>채팅 목록으로 이동하기</h2>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;
