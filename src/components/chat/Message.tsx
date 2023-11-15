import React from "react";
import Avatar from "../Avatar";
import { fromNow, formatTime } from "@/helpers/dayjs";
import Image from "next/image";
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
  const patchAccepted = async (num: number) => {
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
  };
  const createReservation = async () => {
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
  };
  return (
    <div
      className="grid w-full grid-cols-[40px_1fr] gap-3 mx-auto"
      style={{ direction: `${isSender ? "rtl" : "ltr"}` }}
    >
      <div>
        <Avatar src={senderImage && isSender ? senderImage : receiverImage} />
      </div>
      <div className="flex flex-col items-start justify-center">
        <div className="flex items-center gap-2 mb-2 text-sm">
          <span className="font-medium">{isSender ? "You" : receiverName}</span>
          <span className="text-xs text-gray-600 opacity-60">
            {fromNow(messageTime)}
          </span>
        </div>
        {messageType === "reservation" && (
          <div className="flex items-center gap-2 mb-2 text-sm">
            <div className="flex flex-col items-center p-10 ">
              {messageImage && (
                <div className="rounded-full mx-p[0.6rem] max-w-[80%] mb-5">
                  <Image src={messageImage} width={200} height={200} alt="" />
                </div>
              )}
              <div
                className={`p-2 break-all text-white rounded-lg ${
                  isSender
                    ? "bg-indigo-600 rounded-tr-none"
                    : "bg-gray-500 rounded-tl-none"
                }`}
              >
                <p className="text-center text-xl">{messageText}</p>
                <p>해당 상품에 대한 예약 구매 요청이 들어왔습니다</p>
                {isAccepted === 1 && (
                  <p className="text-blue-500 text-center">수락되었습니다.</p>
                )}
                {isAccepted === 2 && (
                  <p className=" text-red-500 text-center">거절되었습니다.</p>
                )}
                {!isSender && isAccepted === 0 && (
                  <>
                    <hr />
                    <button
                      onClick={() => {
                        createReservation();
                        patchAccepted(1);
                      }}
                      className="w-[50%] hover:text-blue"
                    >
                      수락
                    </button>
                    <button
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
          <div className="flex items-center gap-2 mb-2 text-sm">
            <div className="flex flex-col items-center p-10 ">
              <div
                className={`p-2 break-all text-white rounded-lg ${
                  isSender
                    ? "bg-indigo-600 rounded-tr-none"
                    : "bg-gray-500 rounded-tl-none"
                }`}
              >
                <p className="text-center text-xl">{messageText}</p>
                <p>{productTitle} 상품에 대한 예약을 취소합니다.</p>
              </div>
            </div>
          </div>
        )}
        {messageType === "meetTime" && (
          <div className="flex items-center gap-2 mb-2 text-sm">
            <div className="flex flex-col items-center p-10 border-solid border-2 border-slate-600 rounded-xl">
              <div
                className={`p-2 break-all text-white rounded-lg ${
                  isSender
                    ? "bg-indigo-600 rounded-tr-none"
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
              <button className=" w-4/12 p-2 rounded-lg mt-10 bg-gray-500 hover:bg-indigo-600/50 text-gray-100 text-center">
                <a
                  href={`https://map.kakao.com/link/map/${address},${latitude},${longitude}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  큰지도보기
                </a>
              </button>
            </div>
          </div>
        )}
        {messageImage && messageType !== "reservation" && (
          <div className="overflow-hidden rounded-md mx-p[0.6rem] max-w-[80%]">
            <Image src={messageImage} width={300} height={300} alt="" />
          </div>
        )}
        {messageType === "text" && (
          <div
            className={`p-2 break-all text-white rounded-lg ${
              isSender
                ? "bg-orange-300 rounded-tr-none"
                : "bg-gray-500 rounded-tl-none"
            }`}
          >
            <p>{messageText}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Message;
