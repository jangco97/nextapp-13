import React, { Suspense } from "react";

import getCurrentUser from "@/app/actions/getCurrentUser";
import ChatTest from "@/components/chat/ChatTest";
import Container from "@/components/Container";
import Loading from "@/app/(home)/loading";

interface ChatDetailPageProps {
  chatId: string;
}
const ChatDetailPage = async ({ params }: { params: ChatDetailPageProps }) => {
  const { chatId } = params;
  const currentUser = await getCurrentUser();

  return (
    <Container>
      <div className="w-full">
        <Suspense fallback={<Loading />}>
          <ChatTest chatId={chatId} currentUser={currentUser} />
        </Suspense>
      </div>
    </Container>
  );
};

export default ChatDetailPage;
