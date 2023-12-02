import React, { Suspense } from "react";

import getCurrentUser from "@/app/actions/getCurrentUser";
import ChatTestClient from "./ChatTestClient";
import Container from "@/components/Container";

interface ChatDetailPageProps {
  chatId: string;
}
const ChatDetailPage = async ({ params }: { params: ChatDetailPageProps }) => {
  const { chatId } = params;
  const currentUser = await getCurrentUser();

  return (
    <Container>
      <div className="w-full">
        <ChatTestClient chatId={chatId} currentUser={currentUser} />
      </div>
    </Container>
  );
};

export default ChatDetailPage;
