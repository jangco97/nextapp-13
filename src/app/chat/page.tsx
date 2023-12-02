import React, { Suspense } from "react";
import ChatClient from "@/components/chat/ChatClient";
import getCurrentUser from "../actions/getCurrentUser";
import Loading from "../(home)/loading";
const ChatPage = async () => {
  const currentUser = await getCurrentUser();

  return (
    <Suspense fallback={<Loading />}>
      <ChatClient currentUser={currentUser}></ChatClient>
    </Suspense>
  );
};

export default ChatPage;
