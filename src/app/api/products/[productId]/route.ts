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
    return NextResponse.error();
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
    return NextResponse.error();
  }
  const { productId } = params;
  if (!productId) {
    return NextResponse.error();
  }
  const body = await request.json();

  const product = await prisma.product.findUnique({
    where: {
      id: productId,
    },
  });
  if (!product) {
    return NextResponse.error();
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
  return NextResponse.json(updatedProduct);
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Params }
) {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    return NextResponse.error();
  }
  const { productId } = params;
  const product = await prisma.product.delete({
    where: {
      id: productId,
    },
  });
  return NextResponse.json(product);
}
