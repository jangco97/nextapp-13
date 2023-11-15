import React from "react";
import ChatClient from "@/components/chat/ChatClient";
import getCurrentUser from "../actions/getCurrentUser";
const ChatPage = async () => {
  const currentUser = await getCurrentUser();
  return <ChatClient currentUser={currentUser}></ChatClient>;
};

export default ChatPage;
