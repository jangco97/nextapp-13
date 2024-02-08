import getCurrentUser from "@/app/actions/getCurrentUser";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";
export const dynamic = "force-dynamic";
export async function GET(request: NextRequest) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.json({ message: "User not found" }, { status: 404 });
  }
  const users = await prisma.user.findUnique({
    where: {
      id: currentUser.id as string,
    },
    include: {
      receivedMessages: {
        include: {
          sender: true,
          receiver: true,
        },
        orderBy: {
          createdAt: "asc",
        },
      },
    },
  });
  return NextResponse.json(users);
}
