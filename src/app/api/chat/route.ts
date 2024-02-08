import getCurrentUser from "@/app/actions/getCurrentUser";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";
export const dynamic = "force-dynamic";
export async function GET(request: NextRequest) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.json({ message: "User not found" }, { status: 404 });
  }
  const users = await prisma.user.findMany({
    include: {
      conversations: {
        include: {
          messages: {
            include: {
              sender: true,
              receiver: true,
            },
            orderBy: {
              createdAt: "asc",
            },
          },
          users: true,
        },
      },
    },
  });
  return NextResponse.json(users);
}

export async function POST(request: NextRequest) {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    return NextResponse.json({ message: "User not found" }, { status: 404 });
  }
  const body = await request.json();
  //이미 존재하는 대화인지 확인하기
  const conversation = await prisma.conversation.findFirst({
    where: {
      AND: [
        {
          users: {
            some: {
              id: body.senderId,
            },
          },
        },
        {
          users: {
            some: {
              id: body.receiverId,
            },
          },
        },
      ],
    },
  });
  if (conversation) {
    const message = await prisma.message.create({
      data: {
        text: body.text,
        image: body.image,
        senderId: body.senderId,
        receiverId: body.receiverId,
        conversationId: conversation.id,
        messageType: body.messageType,
        productId: body.productId,
        address: body.address,
        addressDetail: body.addressDetail,
        latitude: body.latitude,
        longitude: body.longitude,
        productTitle: body.productTitle,
      },
    });
    return NextResponse.json(message);
  } else {
    const newConversation = await prisma.conversation.create({
      data: {
        senderId: body.senderId,
        receiverId: body.receiverId,
        users: {
          connect: [
            {
              id: body.senderId,
            },
            {
              id: body.receiverId,
            },
          ],
        },
      },
    });

    const message = await prisma.message.create({
      data: {
        text: body.text,
        image: body.image,
        senderId: body.senderId,
        receiverId: body.receiverId,
        conversationId: newConversation.id,
        messageType: body.messageType,
        productId: body.productId,
        address: body.address,
        addressDetail: body.addressDetail,
        latitude: body.latitude,
        longitude: body.longitude,
        productTitle: body.productTitle,
      },
    });
    return NextResponse.json(message);
  }
}
export async function PATCH(request: NextRequest) {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    return NextResponse.json({ message: "User not found" }, { status: 404 });
  }
  const body = await request.json();
  const success = await prisma.message.update({
    where: {
      id: body.messageId,
    },
    data: {
      isAccepted: body.isAccepted,
    },
  });

  return NextResponse.json(success);
}
