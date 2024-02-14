import getCurrentUser from "@/app/actions/getCurrentUser";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";
export const dynamic = "force-dynamic";
export async function GET(request: NextRequest) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.json({ message: "User not found" }, { status: 404 });
  }
  const unreadMessageCount = await prisma.message.count({
    where: {
      receiverId: currentUser.id,
      isRead: false,
    },
  });
  return NextResponse.json({ unreadMessageCount: unreadMessageCount });
}
