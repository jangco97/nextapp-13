import getCurrentUser from "@/app/actions/getCurrentUser";
import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";
interface ParamsProps {
  productId?: string;
}

export async function POST({ params }: { params: ParamsProps }) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const { productId } = params;
  if (!productId || typeof productId !== "string") {
    throw new Error("Invalid Id");
  }

  let favoriteIds = [...currentUser.favoriteIds]; // 원래 있던 favoriteIds를 복사해서 새로운 배열을 만들어준다.
  favoriteIds.push(productId); // 새로운 배열에 productId를 추가해준다.

  const user = await prisma?.user.update({
    where: {
      id: currentUser.id,
    },
    data: {
      favoriteIds: favoriteIds,
    },
  });
  return NextResponse.json(user);
}

export async function DELETE({ params }: { params: ParamsProps }) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const { productId } = params;
  if (!productId || typeof productId !== "string") {
    throw new Error("Invalid Id");
  }

  let favoriteIds = [...currentUser.favoriteIds]; // 원래 있던 favoriteIds를 복사해서 새로운 배열을 만들어준다.
  favoriteIds = favoriteIds.filter((id) => id !== productId); // 새로운 배열에 productId를 추가해준다.

  const user = await prisma?.user.update({
    where: {
      id: currentUser.id,
    },
    data: {
      favoriteIds: favoriteIds,
    },
  });
  return NextResponse.json(user);
}
