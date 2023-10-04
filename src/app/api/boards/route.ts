// api/boards.ts (예시 파일 이름)
import { NextResponse } from "next/server";
import prisma from "@/helpers/prismadb";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.error();
  }

  const body = await request.json();

  const { title, description, category } = body;

  // 필수 필드가 비어있는지 확인
  if (!title) {
    return NextResponse.json({ message: "빈 입력을 채워주세요." });
  }

  const board = await prisma.board.create({
    data: {
      title,
      description,
      category,
      userId: session.user?.id as string,
    },
  });

  return NextResponse.json(board);
}
