import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";
import getCurrentUser from "@/app/actions/getCurrentUser";
interface Params {
  boardId?: string;
}

export async function GET(request: Request, { params }: { params: Params }) {
  const { boardId } = params;
  const board = await prisma.board.findUnique({
    where: {
      id: boardId,
    },
  });

  if (!board) {
    return NextResponse.error();
  }

  return NextResponse.json(board);
}

export async function PUT(request: Request, { params }: { params: Params }) {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    return NextResponse.error();
  }
  const { boardId } = params;
  console.log(params, "params");

  if (!boardId) {
    return NextResponse.error();
  }
  const body = await request.json();

  try {
    const board = await prisma.board.findUnique({
      where: {
        id: boardId,
      },
    });
    if (!board) {
      return NextResponse.error();
    }
    const { title, description, category } = body;
    const updatedBoard = await prisma.board.update({
      where: {
        id: board.id,
      },
      data: {
        title,
        description,
        category,
      },
    });

    return NextResponse.json(updatedBoard);
  } catch (error) {
    console.log(error);
    return NextResponse.error();
  }
}

export async function DELETE(request: Request, { params }: { params: Params }) {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    return NextResponse.error();
  }
  const { boardId } = params;
  if (!boardId) {
    return NextResponse.error();
  }
  try {
    const board = await prisma.board.findUnique({
      where: {
        id: boardId,
      },
    });
    if (!board) {
      return NextResponse.error();
    }
    await prisma.board.delete({
      where: {
        id: board.id,
      },
    });
    return NextResponse.json({ message: "Board deleted successfully" });
  } catch (error) {
    return NextResponse.error();
  }
}
