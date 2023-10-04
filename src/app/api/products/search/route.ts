import { NextResponse } from "next/server";
import prisma from "@/helpers/prismadb";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export async function GET(request: Request) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.error();
  }

  const body = await request.json();

  const { search } = body;
}
