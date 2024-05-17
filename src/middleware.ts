import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getServerSession } from 'next-auth';

export async function middleware(request: NextRequest) {
  //   const session = await getServerSession();
  //   if (session) {
  //     return NextResponse.redirect(new URL('/login', request.url));
  //   }
}

export const config = {
  matcher: ['/Dashboard', '/Add', '/Dashboard-Teacher', '/Course', '/Dashboard-User', '/Profile'],
};
