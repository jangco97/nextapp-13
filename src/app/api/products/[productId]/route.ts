import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";
import getCurrentUser from "@/app/actions/getCurrentUser";
interface Params {
  productId?: string;
}

export async function GET(request: Request, { params }: { params: Params }) {
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

export async function PUT(request: Request, { params }: { params: Params }) {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    return NextResponse.error();
  }
  const { productId } = params;
  if (!productId) {
    return NextResponse.error();
  }
  const body = await request.json();
  try {
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
  } catch (error) {
    return NextResponse.error();
  }
}
export async function DELETE(request: Request, { params }: { params: Params }) {
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
