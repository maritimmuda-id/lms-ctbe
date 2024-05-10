import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
 
export default NextAuth(authConfig).auth;
 
export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};


// import { NextResponse } from "next/server";     
// import type { NextRequest } from "next/server";

// export function middleware(request: NextRequest) {
//     const isLogin = true;
//     if(!isLogin){
//         return NextResponse.redirect(new URL("/login", request.url));
//     }

// }

// export const config = {
//     matcher: ["/", "/dashboard", "/register", "/api/:path*"],
// };
