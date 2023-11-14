import { NextRequest, NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";
import getCurrentUser from "@/app/actions/getCurrentUser";

export async function POST(request: NextRequest) {
  const currentUser = await getCurrentUser();
  const body = await request.json();
  const { buyerId, sellerId, productId, meetTime, sellerName } = body;
  if (!currentUser) {
    return NextResponse.json({ message: "권한이 없습니다." }, { status: 404 });
  }
  const data = await prisma.product.findUnique({
    where: {
      id: productId,
    },
    select: {
      address: true,
      addressDetail: true,
      latitude: true,
      longitude: true,
    },
  });
  const buyer = await prisma.user.findUnique({
    where: {
      id: buyerId,
    },
    select: {
      name: true,
    },
  });
  const seller = await prisma.user.findUnique({
    where: {
      id: sellerId,
    },
    select: {
      name: true,
    },
  });
  const address = data?.address;
  const addressDetail = data?.addressDetail;
  const latitude = data?.latitude;
  const longitude = data?.longitude;
  await prisma.reservation.create({
    data: {
      buyerId,
      sellerId,
      productId,
      buyerName: buyer?.name as string,
      sellerName: seller?.name as string,
      meetTime,
      address,
      addressDetail,
      latitude,
      longitude,
      isAccepted: true,
    },
  });

  await prisma.product.update({
    where: {
      id: productId,
    },
    data: {
      status: "예약중",
    },
  });
  return NextResponse.json(
    { message: "예약이 완료되었습니다." },
    { status: 200 }
  );
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
    include: {
      product: true,
    },
  });
  const acceptedReservation = await prisma.reservation.findMany({
    where: {
      sellerId: currentUser.id as string,
    },
    include: {
      product: true,
    },
  });
  return NextResponse.json({ myReservation, acceptedReservation });
}
export async function PATCH(request: NextRequest) {
  const currentUser = await getCurrentUser();
  const body = await request.json();
  const { meetTime, reservationId } = body;
  if (!currentUser) {
    return NextResponse.json({ message: "권한이 없습니다." }, { status: 404 });
  }
  await prisma.reservation.update({
    where: {
      id: reservationId,
    },
    data: {
      meetTime,
    },
  });
  return NextResponse.json(
    { message: "거래 시간이 정해졌습니다!" },
    { status: 200 }
  );
}

export async function DELETE(request: NextRequest) {
  const currentUser = await getCurrentUser();
  const body = await request.json();
  const { reservationId, productId } = body;
  if (!currentUser) {
    return NextResponse.json({ message: "권한이 없습니다." }, { status: 404 });
  }
  await prisma.reservation.delete({
    where: {
      id: reservationId,
    },
  });
  await prisma.product.update({
    where: {
      id: productId,
    },
    data: {
      status: "판매중",
    },
  });
  return NextResponse.json(
    { message: "예약이 취소되었습니다." },
    { status: 200 }
  );
}
