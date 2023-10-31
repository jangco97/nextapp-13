import { NextResponse, NextRequest } from "next/server";
import prisma from "@/app/libs/prismadb";
import getCurrentUser from "@/app/actions/getCurrentUser";

export async function GET(request: NextRequest) {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    return NextResponse.json({ message: "권한이 없습니다." }, { status: 404 });
  }
  const reviews = await prisma.review.findMany({
    where: {
      sellerId: currentUser.id as string,
    },
  });
  return NextResponse.json(reviews);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const currentUser = await getCurrentUser();
  const {
    text,
    title,
    userRating,
    productRating,
    productId,
    userId,
    sellerId,
  } = body;
  if (userId != currentUser?.id) {
    return NextResponse.json(
      { message: "리뷰를 작성할 권한이 없습니다." },
      { status: 404 }
    );
  }
  await prisma.review.create({
    data: {
      text,
      title,
      userRating,
      productRating,
      productId,
      userId,
      sellerId,
    },
  });
  return NextResponse.json(
    { message: "리뷰가 작성되었습니다." },
    { status: 200 }
  );
}
