import { NextResponse, NextRequest } from "next/server";
import prisma from "@/app/libs/prismadb";
import getCurrentUser from "@/app/actions/getCurrentUser";
export const dynamic = "force-dynamic";
export async function POST(request: NextRequest) {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    return NextResponse.json({ message: "User not found" }, { status: 404 });
  }
  const body = await request.json();
  const { productId } = body;
  const user = await prisma.product.findUnique({
    where: {
      id: productId,
    },
    select: {
      userId: true,
    },
  });
  return NextResponse.json(user);
}
