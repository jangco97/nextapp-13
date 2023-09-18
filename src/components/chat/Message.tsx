import React from "react";
import Avatar from "../Avatar";
import { fromNow } from "@/helpers/dayjs";
import Image from "next/image";
interface MessageProps {
  isSender: boolean;
  messageText?: string | null;
  messageImage?: string | null;
  receiverName: string;
  receiverImage: string;
  senderImage: string | null;
  messageTime: Date;
}
const Message = ({
  isSender,
  messageText,
  messageImage,
  messageTime,
  receiverName,
  receiverImage,
  senderImage,
}: MessageProps) => {
  return (
    <div className="grid w-full grid-cols-[40px_1fr] gap-3 mx-auto" style={{direction: `${isSender ? 'rtl': 'ltr'}`}}>
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
        {messageImage && (
          <div className="overflow-hidden rounded-md mx-p[0.6rem] max-w-[80%]">
            <Image src={messageImage} width={300} height={300} alt=""/>
          </div>
        )}
        {messageText && (
          <div className={`p-2 break-all text-white rounded-lg ${isSender ? "bg-orange-300 rounded-tr-none": "bg-gray-500 rounded-tl-none"}`}>
            <p>{messageText}</p>
          </div>
        )
          
        }
      </div>
    </div>
  );
};

export default Message;
