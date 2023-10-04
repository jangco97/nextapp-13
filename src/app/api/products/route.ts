import { NextResponse } from "next/server";
import prisma from "@/helpers/prismadb";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);
  if (!session) {
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
      userId: session.user?.id as string,
    },
  });
  return NextResponse.json(product);
}
