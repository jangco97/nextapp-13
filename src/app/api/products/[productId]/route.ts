import { NextRequest, NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";
import getCurrentUser from "@/app/actions/getCurrentUser";
interface Params {
  productId?: string;
}

export async function GET(
  request: NextRequest,
  { params }: { params: Params }
) {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    return NextResponse.json({ message: "User not found" }, { status: 404 });
  }
  const { productId } = params;
  const products = await prisma.product.findUnique({
    where: {
      id: productId,
    },
  });
  return NextResponse.json(products);
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Params }
) {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    return NextResponse.json({ message: "User not found" }, { status: 404 });
  }
  const { productId } = params;
  if (!productId) {
    return NextResponse.json({ message: "Product not found" }, { status: 404 });
  }
  const body = await request.json();

  const product = await prisma.product.findUnique({
    where: {
      id: productId,
    },
    include: {
      reservations: true,
    },
  });
  if (!product) {
    return NextResponse.json({ message: "Product not found" }, { status: 404 });
  }
  const {
    id,
    title,
    description,
    imageSrc,
    categories,
    latitude,
    longitude,
    price,
    address,
    addressDetail,
  } = body;

  const updatedProduct = await prisma.product.update({
    where: {
      id: product.id,
    },
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
    },
  });

  if (product?.reservations[0]) {
    await prisma.reservation.update({
      where: {
        id: product.reservations[0].id,
      },
      data: {
        address,
        addressDetail,
        latitude,
        longitude,
      },
    });
  }

  return NextResponse.json(updatedProduct);
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Params }
) {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    return NextResponse.json({ message: "User not found" }, { status: 404 });
  }
  const { productId } = params;
  const product = await prisma.product.delete({
    where: {
      id: productId,
    },
  });
  return NextResponse.json({ message: "상품이 삭제되었습니다." });
}
