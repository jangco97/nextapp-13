// api/boards.ts (예시 파일 이름)
import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../app/libs/prismadb";
import getCurrentUser from "@/app/actions/getCurrentUser";

export async function POST(request: NextRequest) {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    return;
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
      userId: currentUser.id as string,
    },
  });

  return NextResponse.json(board);
}
