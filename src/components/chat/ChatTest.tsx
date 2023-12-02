"use client";
import React, { useEffect, useRef, useState } from "react";
import { FaArrowDown } from "react-icons/fa6";
import axios from "axios";
import Input from "@/components/chat/Input";
import ChatHeader from "@/components/chat/ChatHeader";
import Message from "@/components/chat/Message";
import { TConversation, TUserWithChat } from "@/types";
import { useQuery } from "@tanstack/react-query";

interface ChatTestProps {
  chatId: string;
  currentUser: any;
}

export const fetchChatData = async () => {
  const response = await axios.get(`/api/chat`);
  return response.data;
};

const ChatTest = ({ chatId, currentUser }: ChatTestProps) => {
  const [receiver, setReceiver] = useState({
    receiverId: "",
    receiverName: "",
    receiverImage: "",
  });
  const [layout, setLayout] = useState(false);

  const messagesEndRef = useRef<null | HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef?.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    axios.get(`/api/chat/${chatId}`).then((response: any) => {
      setReceiver({
        receiverId: response.data.id,
        receiverName: response.data.name,
        receiverImage: response.data.image,
      });
    });
  }, [chatId]);
  // const fetcher = (url: string) => axios.get(url).then((res) => res.data);
  // const {
  //   data: users,
  //   error,
  //   isLoading,
  // } = useSWR(`/api/chat`, fetcher, { refreshInterval: 1000 });
  // const currentUserWithMessage = users?.find(
  //   (user: TUserWithChat) => user.email === currentUser?.email
  // );

  const {
    data: users,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["chatuser", chatId],
    queryFn: fetchChatData,
    staleTime: 0,
    refetchInterval: 1000,
  });
  const currentUserWithMessage = users?.find(
    (user: TUserWithChat) => user.email === currentUser?.email
  );
  const conversation: TConversation | undefined =
    currentUserWithMessage?.conversations.find((conversation: TConversation) =>
      conversation.users.find((user) => user.id === receiver.receiverId)
    );
  if (error)
    return (
      <div className="flex justify-center items-center h-[100vh] ">
        <h1 className="text-2xl font-bold">채팅을 불러오는데 실패했습니다.</h1>
      </div>
    );
  if (isLoading)
    return (
      <div className="flex justify-center items-center h-[100vh] ">
        <h1 className="text-2xl font-bold">채팅을 불러오는 중입니다.</h1>
      </div>
    );
  return (
    <>
      {" "}
      <div>
        <ChatHeader
          setLayout={setLayout}
          receiverName={receiver.receiverName}
          receiverImage={receiver.receiverImage}
          receiverId={receiver.receiverId}
          lastMessageTime={
            conversation?.messages
              .filter((message) => message.receiverId === currentUser?.id)
              .slice(-1)[0]?.createdAt
          }
          detailPage={true}
        />
      </div>
      <button
        className=" absolute right-2  bottom-20  p-2 border-2 border-indigo-500 rounded-full cursor-pointer hover:bg-indigo-300"
        onClick={() => scrollToBottom()}
      >
        <FaArrowDown className=" text-indigo-500" />
      </button>
      <div className="flex flex-col gap-8 p-4 overflow-auto h-[calc(100vh_-_60px_-_70px_-_80px)]">
        {conversation &&
          conversation.messages.map((message) => {
            return (
              <Message
                key={message.id}
                isSender={message.senderId === currentUser?.id}
                messageText={message.text}
                messageImage={message.image}
                messageTime={message.createdAt}
                receiverName={receiver.receiverName}
                receiverImage={receiver.receiverImage}
                senderImage={currentUser?.image!}
                messageType={message?.messageType}
                isAccepted={message?.isAccepted}
                messageId={message.id}
                productId={message?.productId}
                senderId={message?.senderId}
                receiverId={message?.receiverId}
                address={message?.address}
                addressDetail={message?.addressDetail}
                latitude={message?.latitude}
                longitude={message?.longitude}
                productTitle={message?.productTitle}
              />
            );
          })}
        <div ref={messagesEndRef} />
      </div>
      <div>
        <Input
          receiverId={receiver?.receiverId}
          currentUserId={currentUser?.id!}
        />
      </div>
    </>
  );
};

export default ChatTest;
