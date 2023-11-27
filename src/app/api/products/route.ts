import { NextRequest, NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";
import getCurrentUser from "@/app/actions/getCurrentUser";

export async function GET(request: NextRequest) {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    return NextResponse.json({ message: "User not found" }, { status: 404 });
  }
  const products = await prisma.product.findMany({
    where: {
      userId: currentUser.id as string,
    },
  });
  return NextResponse.json(products);
}
export async function POST(request: NextRequest) {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    return NextResponse.json({ message: "User not found" }, { status: 404 });
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
      return NextResponse.json(
        { message: "Please fill in all fields" },
        { status: 404 }
      );
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
