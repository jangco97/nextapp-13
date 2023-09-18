import { getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from 'next/server';

export {default} from 'next-auth/middleware'

export async function middleware(req: NextRequest){
    const session = await getToken({req, secret: process.env.JWT_SECRET!})//req를 통해 토큰을 받아온다.
    const pathname = req.nextUrl.pathname;

    //로그인한 유저만 접근 가능
    if(pathname.startsWith('/user') && !session){
        return NextResponse.redirect(new URL('/auth/login', req.url));//세션이 없으면 로그인 페이지로 이동
    }
    if(pathname.startsWith('/challenge') && !session){
        return NextResponse.redirect(new URL('/auth/login', req.url));//세션이 없으면 로그인 페이지로 이동
    }
    //어드민 유저만 접근 가능한 페이지
    if(pathname.startsWith('/admin') && (!session || session.role !== 'Admin')){
        return NextResponse.redirect(new URL('/', req.url));
    }

    //로그인된 유저는 로그인, 회원가입 페이지에 접근x
    if(pathname.startsWith('/auth') && session){
        return NextResponse.redirect(new URL('/', req.url));
    }

    return NextResponse.next(); //원하는 페이지로 이동 
}
// export const config = { matcher: ["/admin/:path*", "/user"] }