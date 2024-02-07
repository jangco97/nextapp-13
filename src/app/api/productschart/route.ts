import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/app/libs/prismadb';
import getCurrentUser from '@/app/actions/getCurrentUser';

export async function POST(request: NextRequest) {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    return NextResponse.json({ message: 'User not found' }, { status: 404 });
  }
  const body = await request.json();
  const searchArray = body.chartsearch.split(' ');
  const products = await prisma.product.findMany({
    where: {
      OR: searchArray.map((search: string) => {
        return {
          title: {
            contains: search,
          },
        };
      }),
    },
  });
  return NextResponse.json(products);
}
