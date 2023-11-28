"use client";
import React, { useState } from "react";
import Avatar from "../Avatar";
import { fromNow } from "@/helpers/dayjs";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface MessageProps {
  isSender: boolean;
  messageText?: string | null;
  messageImage?: string | null;
  receiverName: string;
  receiverImage: string;
  senderImage: string | null;
  messageTime: Date;
  messageType?: string | null;
  isAccepted?: number | null;
  messageId?: string | null;
  productId?: string | null;
  senderId: string;
  receiverId?: string | null;
  address?: string | null;
  addressDetail?: string | null;
  latitude?: number | null;
  longitude?: number | null;
  productTitle?: string | null;
}
const Message = async ({
  isSender,
  messageText,
  messageImage,
  messageTime,
  receiverName,
  receiverImage,
  senderImage,
  messageType,
  isAccepted,
  messageId,
  productId,
  senderId,
  receiverId,
  address,
  addressDetail,
  latitude,
  longitude,
  productTitle,
}: MessageProps) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const patchAccepted = async (num: number) => {
    setIsLoading(true);
    await fetch(`/api/chat`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        isAccepted: num,
        messageId: messageId,
      }),
    });
    router.refresh();
    setIsLoading(false);
  };
  const createReservation = async () => {
    setIsLoading(true);
    await fetch(`/api/reservation`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        productId: productId,
        buyerId: senderId,
        sellerId: receiverId,
      }),
    });
    router.refresh();
    setIsLoading(false);
  };
  return (
    <div
      className={`flex gap-3 ${
        isSender ? "flex-row-reverse" : "flex-row"
      } w-full grid-cols-[40px_1fr] gap-2 mx-auto `}
    >
      <div>
        {isSender ? (
          <div
            className={`flex flex-col ${
              isSender ? "items-end" : "items-start"
            } justify-center`}
          >
            <div className="flex items-center gap-1 mb-2 text-sm">
              <span className="font-medium">You</span>
              <span className="text-xs text-gray-600 opacity-60">
                {fromNow(messageTime)}
              </span>
              <div className={`w-[30px] h-[30px]`}>
                <Avatar
                  src={senderImage && isSender ? senderImage : receiverImage}
                />
              </div>
            </div>
          </div>
        ) : (
          <div
            className={`flex flex-col ${
              isSender ? "items-end" : "items-start"
            } justify-center`}
          >
            <div className="flex items-center gap-1 mb-2 text-sm">
              <div className={`w-[30px] h-[30px]`}>
                <Avatar
                  src={senderImage && isSender ? senderImage : receiverImage}
                />
              </div>
              <span className="font-medium">
                <Link href={`/user/${receiverId}`}>{receiverName}</Link>
              </span>
              <span className="text-xs text-gray-600 opacity-60">
                {fromNow(messageTime)}
              </span>
            </div>
          </div>
        )}

        {messageType === "reservation" && (
          <div
            className={`flex items-center gap-1 mb-2 text-sm  p-1 break-all text-white rounded-lg  ${
              isSender
                ? "bg-indigo-500/70 rounded-tr-none"
                : "bg-gray-600 rounded-tl-none"
            }`}
          >
            <div className="flex flex-col items-center p-3 ">
              {messageImage && (
                <div className="rounded-full mx-p[0.6rem] max-w-[80%] mb-5">
                  <Image src={messageImage} width={200} height={200} alt="" />
                </div>
              )}
              <div
                className={`p-1 break-all text-white rounded-lg ${
                  isSender
                    ? "bg-indigo-500/50 rounded-tr-none"
                    : "bg-gray-500 rounded-tl-none"
                }`}
              >
                <p className="text-center text-xl">{messageText}</p>
                <p>해당 상품에 대한 예약 구매 요청이 들어왔습니다</p>
                {isAccepted === 1 && (
                  <p className="text-blue-300 text-center">수락되었습니다</p>
                )}
                {isAccepted === 2 && (
                  <p className=" text-red-300 text-center">거절되었습니다</p>
                )}
                {!isSender && isAccepted === 0 && (
                  <>
                    <hr />
                    <button
                      disabled={isLoading}
                      onClick={() => {
                        createReservation();
                        patchAccepted(1);
                      }}
                      className="w-[50%] hover:text-blue"
                    >
                      수락
                    </button>
                    <button
                      disabled={isLoading}
                      onClick={() => patchAccepted(2)}
                      className="w-[50%] hover:text-red"
                    >
                      거절
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
        {messageType === "cancelReservation" && (
          <div
            className={`p-1 break-all text-white rounded-lg  ${
              isSender
                ? "bg-indigo-500/60 rounded-tr-none"
                : "bg-gray-500 rounded-tl-none"
            }`}
          >
            <p className="text-center text-xl">{messageText}</p>
            <p>{productTitle} 상품에 대한 예약을 취소합니다</p>
          </div>
        )}
        {messageType === "meetTime" && (
          <div
            className={`flex items-center gap-1 mb-2 text-sm  p-1 break-all text-white rounded-lg  ${
              isSender
                ? "bg-indigo-500/70 rounded-tr-none"
                : "bg-gray-600 rounded-tl-none"
            }`}
          >
            <div className="flex flex-col items-center p-3">
              <div
                className={`p-1 break-all text-white rounded-lg ${
                  isSender
                    ? "bg-indigo-500/50  rounded-tr-none"
                    : "bg-gray-500 rounded-tl-none"
                }`}
              >
                <p className="text-center">약속을 만들었습니다</p>
                <p className="text-center text-xl">
                  날짜 및 시간:{messageText}
                </p>
                <p className="text-center text-xl">
                  장소:{address} {addressDetail}
                </p>
              </div>
              <div className="flex justify-evenly w-full">
                <button className="p-1 rounded-lg mt-10 bg-slate-500 hover:bg-indigo-600/50 text-gray-100 text-center">
                  <a
                    href={`https://map.kakao.com/link/map/${address},${latitude},${longitude}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    지도보기
                  </a>
                </button>
                <Link href={`/products/${productId}`}>
                  <button className="p-1 rounded-lg mt-10 bg-rose-300 hover:bg-indigo-600/50 text-gray-100 text-center">
                    제품보기
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
        {messageImage && messageType !== "reservation" && (
          <div className="overflow-hidden rounded-md mx-p[0.6rem] max-w-[80%]">
            <Image
              src={messageImage}
              width={300}
              height={300}
              alt="채팅 이미지"
            />
          </div>
        )}
        {messageType === "text" && (
          <div
            className={`p-1 break-all text-white rounded-lg ${
              isSender
                ? "bg-indigo-500/60 rounded-tr-none"
                : "bg-gray-500 rounded-tl-none"
            }`}
          >
            <span>{messageText}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Message;
