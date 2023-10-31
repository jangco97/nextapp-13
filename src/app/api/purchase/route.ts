import { NextResponse, NextRequest } from "next/server";
import prisma from "@/app/libs/prismadb";
import getCurrentUser from "@/app/actions/getCurrentUser";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const currentUser = await getCurrentUser();
  const { productId, buyerId, sellerId } = body;
  if (currentUser?.id !== buyerId) {
    return NextResponse.json(
      { message: "구매자가 아닙니다." },
      { status: 404 }
    );
  }
  if (currentUser?.id === buyerId) {
    await prisma.purchase.create({
      data: {
        productId,
        buyerId,
        sellerId,
      },
    });
    return NextResponse.json({ message: "구매가 확정 완료." }, { status: 200 });
  }
}
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
