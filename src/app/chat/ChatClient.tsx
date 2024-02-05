"use client";
import { User } from "../../../prisma/generated/client";
import axios from "axios";
import useSWR from "swr";
import React, { useState } from "react";
import { TUserWithChat } from "@/types";
import Contacts from "@/components/chat/Contacts";
import Chat from "@/components/chat/Chat";
import Container from "@/components/shared/Container";
interface ChatClientProps {
  currentUser?: User | null;
}
const ChatClient = ({ currentUser }: ChatClientProps) => {
  const [receiver, setReceiver] = useState({
    receiverId: "",
    receiverName: "",
    receiverImage: "",
  });
  const [layout, setLayout] = useState(false);

  const fetcher = (url: string) => axios.get(url).then((res) => res.data);
  const {
    data: users,
    error,
    isLoading,
  } = useSWR(`/api/chat`, fetcher, { refreshInterval: 1000 });
  const currentUserWithMessage = users?.find(
    (user: TUserWithChat) => user.email === currentUser?.email
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
    <Container>
      <div className="grid grid-cols-[1fr] md:grid-cols-[300px_1fr]">
        <section className={`md:flex ${layout && "hidden"}`}>
          <Contacts
            users={users}
            currentUser={currentUserWithMessage}
            setLayout={setLayout}
            setReceiver={setReceiver}
          />
        </section>
        <section className={`md:flex ${!layout && "hidden"}`}>
          <Chat
            currentUser={currentUserWithMessage}
            receiver={receiver}
            setLayout={setLayout}
          />
        </section>
      </div>
    </Container>
  );
};

export default ChatClient;
