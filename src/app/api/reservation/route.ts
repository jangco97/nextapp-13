import { NextRequest, NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";
import getCurrentUser from "@/app/actions/getCurrentUser";

export async function POST(request: NextRequest) {
  const currentUser = await getCurrentUser();
  const body = await request.json();
  const { buyerId, sellerId, productId, meetTime } = body;
  if (!currentUser) {
    return NextResponse.json({ message: "권한이 없습니다." }, { status: 404 });
  }
  await prisma.reservation.create({
    data: {
      buyerId,
      sellerId,
      productId,
      meetTime,
    },
  });
}
export async function GET(request: NextRequest) {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    return NextResponse.json({ message: "권한이 없습니다." }, { status: 404 });
  }
  const myReservation = await prisma.reservation.findMany({
    where: {
      buyerId: currentUser.id as string,
    },
  });
  const acceptedReservation = await prisma.reservation.findMany({
    where: {
      sellerId: currentUser.id as string,
    },
  });
  return NextResponse.json({ myReservation, acceptedReservation });
}
export async function PUT(request: NextRequest) {
  const currentUser = await getCurrentUser();
  const body = await request.json();
  const { id } = body;
  if (!currentUser) {
    return NextResponse.json({ message: "권한이 없습니다." }, { status: 404 });
  }
  await prisma.reservation.update({
    where: {
      id: id,
    },
    data: {
      isAccepted: true,
    },
  });
}

export async function DELETE(request: NextRequest) {
  const currentUser = await getCurrentUser();
  const body = await request.json();
  const { id } = body;
  if (!currentUser) {
    return NextResponse.json({ message: "권한이 없습니다." }, { status: 404 });
  }
  await prisma.reservation.delete({
    where: {
      id: id,
    },
  });
}
