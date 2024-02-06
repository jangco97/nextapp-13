import { NextResponse, NextRequest } from 'next/server';
import prisma from '@/app/libs/prismadb';
import getCurrentUser from '@/app/actions/getCurrentUser';
export async function GET(request: NextRequest) {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    return NextResponse.json({ message: 'User not found' }, { status: 404 });
  }
  const carts = await prisma.product.findMany({
    where: {
      id: {
        in: currentUser?.favoriteIds,
      },
    },
  });
  return NextResponse.json(carts);
}
