import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";
import getCurrentUser from "@/app/actions/getCurrentUser";

export async function GET(request: Request) {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    return NextResponse.error();
  }

  const body = await request.json();

  const { search } = body;
}
