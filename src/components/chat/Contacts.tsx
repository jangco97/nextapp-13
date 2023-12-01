"use client";
import { TUserWithChat } from "@/types";
import React from "react";
import User from "./User";
import { useQuery } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";
interface ContactsProps {
  users: TUserWithChat[];
  currentUser: TUserWithChat;
  setLayout: (layout: boolean) => void;
  setReceiver: (receiver: {
    receiverId: string;
    receiverName: string;
    receiverImage: string;
  }) => void;
}
const Contacts = ({
  users,
  currentUser,
  setLayout,
  setReceiver,
}: ContactsProps) => {
  const queryClient = useQueryClient();
  const { data } = useQuery<any>({
    queryKey: ["chat"],
    queryFn: () => fetch("/api/receivechat").then((res) => res.json()),
    staleTime: 5 * 1000 * 60,
  });
  const readMessageStatus = async (userId: string) => {
    await fetch(`/api/chat/${userId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
    });
  };
  const filterMessages = (
    userId: string,
    userName: string | null,
    userImage: string | null
  ) => {
    setReceiver({
      receiverId: userId,
      receiverName: userName || "",
      receiverImage: userImage || "",
    });
  };

  return (
    <div className="w-full overflow-auto h-[calc(100vh_-_56px)] border-[1px]">
      <h1 className="m-4 text-2xl font-semibold">채팅</h1>
      <hr />
      <div className="flex flex-col">
        {users?.length > 0 &&
          users
            .filter((user) => user.id !== currentUser?.id)
            .map((user) => {
              let unReadMessage = data?.receivedMessages?.filter(
                (message: any) =>
                  message.isRead === false && message.senderId === user.id
              );
              return (
                <div
                  key={user.id}
                  onClick={() => {
                    filterMessages(user.id, user.name, user.image);
                    setLayout(true);
                    readMessageStatus(user.id);
                    queryClient.invalidateQueries({ queryKey: ["chat"] });
                  }}
                >
                  <User
                    user={user}
                    currentUserId={currentUser?.id}
                    unReadMessage={unReadMessage}
                  />
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default Contacts;
