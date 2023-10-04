import { NextResponse } from "next/server";
import prisma from "@/helpers/prismadb";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export async function POST(request: Request) {
  try {
    // // 여러 개의 카테고리 데이터를 정의
    // const categoriesData = await request.json();
    // // 각각의 카테고리를 순회하면서 생성
    // for (const categoryData of categoriesData) {
    //   await prisma.category.create({
    //     data: categoryData,
    //   });
    // }

    console.log("여러 개의 카테고리가 생성되었습니다.");
    return NextResponse.next();
  } catch (error) {
    console.error("카테고리 생성 중 오류 발생:", error);
    return NextResponse.error();
  } finally {
    await prisma.$disconnect(); // Prisma 연결 종료
  }
}
