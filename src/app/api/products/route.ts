import { NextRequest, NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";
import getCurrentUser from "@/app/actions/getCurrentUser";

export async function POST(request: NextRequest) {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    return NextResponse.error();
  }

  const body = await request.json();

  const {
    title,
    description,
    imageSrc,
    categories,
    latitude,
    longitude,
    address,
    addressDetail,
    price,
  } = body;

  Object.keys(body).forEach((value) => {
    if (!body[value]) {
      return NextResponse.error();
    }
  });
  const product = await prisma.product.create({
    data: {
      title,
      description,
      imageSrc,
      categories,
      latitude,
      longitude,
      address,
      addressDetail,
      price: Number(price),
      userId: currentUser.id as string,
    },
  });
  return NextResponse.json(product);
}
