import getCurrentUser from "@/app/actions/getCurrentUser";
import { NextResponse, NextRequest } from "next/server";
import prisma from "@/app/libs/prismadb";
export const dynamic = "force-dynamic";
export async function GET(request: NextRequest) {
  console.log(request);

  const currentUser = await getCurrentUser();
  if (!currentUser) {
    return NextResponse.json({ message: "User not found" }, { status: 404 });
  }
  const currentCarts = await prisma.product.findMany({
    where: {
      id: {
        in: currentUser?.favoriteIds,
      },
    },
  });
  if (!currentCarts) {
    return NextResponse.json({ message: "Carts not found" }, { status: 404 });
  }
  return NextResponse.json(currentCarts);
}
