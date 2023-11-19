import { NextResponse, NextRequest } from "next/server";
import prisma from "@/app/libs/prismadb";
import getCurrentUser from "@/app/actions/getCurrentUser";
export const dynamic = "force-dynamic";
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
  const currentUser = await getCurrentUser();
  const body = await request.json();
  const { text, title, userRating, productId, userId, sellerId, id } = body;
  if (userId !== currentUser?.id) {
    return NextResponse.json(
      { message: "리뷰를 작성할 권한이 없습니다." },
      { status: 404 }
    );
  }
  const reviews = await prisma.review.findMany({
    where: {
      userId: userId,
      productId: productId,
    },
  });
  let allRatingScore = userRating;
  if (reviews.length > 0) {
    for (let i = 0; i < reviews.length; i++) {
      allRatingScore += reviews[i].userRating;
    }
  }
  const averageRatingScore = allRatingScore / reviews.length + 1;
  try {
    // Attempt to create a new review
    await prisma.review.create({
      data: {
        id,
        text,
        title,
        userRating,
        productId,
        userId,
        sellerId,
      },
    });
    await prisma.buyer.update({
      where: {
        id: id,
      },
      data: {
        isReviewed: true,
      },
    });
    await prisma.user.update({
      where: {
        id: sellerId,
      },
      data: {
        averageRating: averageRatingScore,
      },
    });
    // If the review creation is successful, send a success response
    return NextResponse.json(
      { message: "리뷰가 작성되었습니다." },
      { status: 200 }
    );
  } catch (error) {
    // If there's an error during review creation, send an error response
    return NextResponse.json(
      { message: "리뷰 작성 중에 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}
