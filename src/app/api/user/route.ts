import { NextResponse, NextRequest } from 'next/server';
import prisma from '@/app/libs/prismadb';
import getCurrentUser from '@/app/actions/getCurrentUser';

export async function POST(request: NextRequest) {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    return NextResponse.json({ message: 'User not found' }, { status: 404 });
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

export async function PATCH(request: NextRequest) {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    return NextResponse.json({ message: 'User not found' }, { status: 404 });
  }
  const body = await request.json();
  const { productId, status } = body;
  const user = await prisma.product.update({
    where: {
      id: productId,
    },
    data: {
      status: status,
    },
  });
  return NextResponse.json({ message: '상태가 변경되었습니다.' });
}
