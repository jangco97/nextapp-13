import { NextRequest, NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";
import getCurrentUser from "@/app/actions/getCurrentUser";
interface Params {
  boardId?: string;
}

export async function GET(
  request: NextRequest,
  { params }: { params: Params }
) {
  const { boardId } = params;
  const board = await prisma.board.findUnique({
    where: {
      id: boardId,
    },
  });

  if (!board) {
    return NextResponse.json({ message: "Board not found" }, { status: 404 });
  }

  return NextResponse.json(board);
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Params }
) {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    return NextResponse.json({ message: "Board not found" }, { status: 404 });
  }
  const { boardId } = params;
  console.log(params, "params");

  if (!boardId) {
    return NextResponse.json({ message: "Board not found" }, { status: 404 });
  }
  const body = await request.json();

  try {
    const board = await prisma.board.findUnique({
      where: {
        id: boardId,
      },
    });
    if (!board) {
      return NextResponse.json({ message: "Board not found" }, { status: 404 });
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
    return NextResponse.json({ message: "Board not found" }, { status: 404 });
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Params }
) {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    return NextResponse.json({ message: "Board not found" }, { status: 404 });
  }
  const { boardId } = params;
  if (!boardId) {
    return NextResponse.json({ message: "Board not found" }, { status: 404 });
  }
  try {
    const board = await prisma.board.findUnique({
      where: {
        id: boardId,
      },
    });
    if (!board) {
      return NextResponse.json({ message: "Board not found" }, { status: 404 });
    }
    await prisma.board.delete({
      where: {
        id: board.id,
      },
    });
    return NextResponse.json({ message: "Board deleted successfully" });
  } catch (error) {
    return NextResponse.json({ message: "Board not found" }, { status: 404 });
  }
}
