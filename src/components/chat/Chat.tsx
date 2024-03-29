import { TConversation, TUserWithChat } from "@/types";
import React, { useRef } from "react";
import { FaArrowDown } from "react-icons/fa6";
import Input from "./Input";
import ChatHeader from "./ChatHeader";
import Message from "./Message";
interface ChatProps {
  currentUser: TUserWithChat;
  receiver: {
    receiverId: string;
    receiverName: string;
    receiverImage: string;
  };
  setLayout: (layout: boolean) => void;
}

const Chat = ({ currentUser, receiver, setLayout }: ChatProps) => {
  const messagesEndRef = useRef<null | HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef?.current?.scrollIntoView({ behavior: "smooth" });
  };

  const conversation: TConversation | undefined = currentUser?.conversations.find(
    (conversation: TConversation) =>
      conversation.users.find((user) => user.id === receiver.receiverId),
  );
  if (!receiver.receiverName || !currentUser) {
    return <div className="w-full h-full"></div>;
  }
  return (
    <div className="w-full">
      <div>
        <ChatHeader
          detailPage={false}
          setLayout={setLayout}
          receiverName={receiver.receiverName}
          receiverImage={receiver.receiverImage}
          receiverId={receiver.receiverId}
          lastMessageTime={
            conversation?.messages
              .filter((message) => message.receiverId === currentUser.id)
              .slice(-1)[0]?.createdAt
          }
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
                isSender={message.senderId === currentUser.id}
                messageText={message.text}
                messageImage={message.image}
                messageTime={message.createdAt}
                receiverName={receiver.receiverName}
                receiverImage={receiver.receiverImage}
                senderImage={currentUser?.image}
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
        <Input receiverId={receiver?.receiverId} currentUserId={currentUser?.id} />
      </div>
    </div>
  );
};

export default Chat;
