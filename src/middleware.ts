import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";
export { default } from "next-auth/middleware";

export async function middleware(req: NextRequest) {
  const session = await getToken({ req, secret: process.env.JWT_SECRET! }); //req를 통해 토큰을 받아온다.
  console.log(session, "session");
  const pathname = req.nextUrl.pathname;

  //로그인한 유저만 접근 가능
  if (pathname.startsWith("/user") && !session) {
    return NextResponse.redirect(new URL("/auth/login", req.url)); //세션이 없으면 로그인 페이지로 이동
  }
  if (pathname.startsWith("/products/upload") && !session) {
    return NextResponse.redirect(new URL("/auth/login", req.url)); //세션이 없으면 로그인 페이지로 이동
  }
  if (pathname.startsWith("/chat") && !session) {
    return NextResponse.redirect(new URL("/auth/login", req.url));
  }
  if (pathname.startsWith("/cart") && !session) {
    return NextResponse.redirect(new URL("/auth/login", req.url));
  }
  //로그인된 유저는 로그인, 회원가입 페이지에 접근x
  if (pathname.startsWith("/auth") && session) {
    return NextResponse.redirect(new URL("/", req.url));
  }
  if (
    pathname.startsWith("/products") &&
    pathname.endsWith("/edit") &&
    session
  ) {
    const parts = pathname.split("/");
    const productId = parts[2]; // 동적 URL에서 productId 가져오기
    const product = await fetch(
      `https://nextapp-13.vercel.app/api/products/${productId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => res.json());
    if (product?.userId !== session.id) {
      return NextResponse.redirect(new URL("/", req.url));
    }
  }
  if (
    pathname.startsWith("/products") &&
    pathname.endsWith("/edit") &&
    !session
  ) {
    return NextResponse.redirect(new URL("/", req.url));
  }
}
export const config = {
  matcher: [
    "/admin/:path*",
    "/user",
    "/products/upload",
    "/chat",
    "/cart",
    "/products/:path*",
  ],
};
