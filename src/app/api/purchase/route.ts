import { NextResponse, NextRequest } from "next/server";
import prisma from "@/app/libs/prismadb";
import getCurrentUser from "@/app/actions/getCurrentUser";

//구매한 목록, 판매한 목록
export async function GET(request: NextRequest) {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    return NextResponse.json({ message: "권한이 없습니다." }, { status: 404 });
  }
  const myPurchase = await prisma.purchase.findMany({
    where: {
      buyerId: currentUser.id as string,
    },
  });
  const sellPurchase = await prisma.purchase.findMany({
    where: {
      sellerId: currentUser.id as string,
    },
  });
  return NextResponse.json({ myPurchase, sellPurchase });
}
export async function POST(request: NextRequest) {
  const currentUser = await getCurrentUser();
  const body = await request.json();
  const { buyerId, sellerId, reservationId, productId } = body;

  if (!currentUser) {
    return NextResponse.json({ message: "권한이 없습니다." }, { status: 404 });
  }

  let createPurchase = false;

  if (buyerId) {
    await prisma.reservation.update({
      where: {
        id: reservationId,
      },
      data: {
        buyAccept: true,
      },
    });
    await prisma.buyer.create({
      data: {
        userId: buyerId,
        productId,
      },
    });
    // Check if both buyAccept and sellAccept are true
    const reservation = await prisma.reservation.findUnique({
      where: {
        id: reservationId,
      },
    });

    if (reservation?.buyAccept && reservation?.sellAccept) {
      createPurchase = true;
    }
  } else if (sellerId) {
    await prisma.reservation.update({
      where: {
        id: reservationId,
      },
      data: {
        sellAccept: true,
      },
    });
    await prisma.seller.create({
      data: {
        userId: sellerId,
        productId,
      },
    });
    await prisma.product.update({
      where: {
        id: productId,
      },
      data: {
        status: "판매완료",
      },
    });
    // Check if both buyAccept and sellAccept are true
    const reservation = await prisma.reservation.findUnique({
      where: {
        id: reservationId,
      },
    });

    if (reservation?.buyAccept && reservation?.sellAccept) {
      createPurchase = true;
    }
  }

  if (createPurchase) {
    const reservation = await prisma.reservation.findUnique({
      where: {
        id: reservationId,
      },
    });

    if (!reservation) {
      return NextResponse.json(
        { message: "예약 정보를 찾을 수 없습니다." },
        { status: 404 }
      );
    }

    await prisma.purchase.create({
      data: {
        buyerId: reservation.buyerId,
        sellerId: reservation.sellerId,
        productId: reservation.productId,
      },
    });
  }

  return NextResponse.json({ message: "완료되었습니다.!" }, { status: 200 });
}
