import { NextResponse, NextRequest } from "next/server";
import prisma from "@/app/libs/prismadb";
import getCurrentUser from "@/app/actions/getCurrentUser";
export const dynamic = "force-dynamic";
export async function GET(request: NextRequest) {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    return NextResponse.json({ message: "User not found" }, { status: 404 });
  }
  const userFavoriteIds = await prisma.user.findUnique({
    where: {
      id: currentUser.id as string,
    },
    select: {
      favoriteIds: true,
    },
  });
  return NextResponse.json(userFavoriteIds);
}
