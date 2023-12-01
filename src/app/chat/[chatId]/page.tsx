import React from "react";

import getCurrentUser from "@/app/actions/getCurrentUser";
import ChatTest from "@/components/chat/ChatTest";
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
        <ChatTest chatId={chatId} currentUser={currentUser} />
      </div>
    </Container>
  );
};

export default ChatDetailPage;
