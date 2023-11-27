import { NextRequest, NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";
import getCurrentUser from "@/app/actions/getCurrentUser";

export const dynamic = "force-dynamic";
export async function PATCH(
  request: NextRequest,
  { params }: { params: { userId: string } }
) {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    return NextResponse.json({ message: "User not found" }, { status: 404 });
  }

  const success = await prisma.message.updateMany({
    where: {
      receiverId: {
        equals: currentUser.id.toString(),
      },
      senderId: {
        equals: params.userId as string,
      },
    },
    data: {
      isRead: true,
    },
  });

  return NextResponse.json(success);
}
export async function GET(
  request: NextRequest,
  { params }: { params: { userId: string } }
) {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    return NextResponse.json({ message: "User not found" }, { status: 404 });
  }

  const userdata = await prisma.user.findUnique({
    where: {
      id: params.userId as string,
    },
  });

  return NextResponse.json(userdata);
}
