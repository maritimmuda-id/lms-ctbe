'use client';

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { useSession } from 'next-auth/react';

export function middleware(request: NextRequest) {
  // const session = useSession();
  // if (!session) {
  //   return NextResponse.redirect(new URL('/login', request.url));
  // }
}

export const config = {
  matcher: ['/Dashboard', '/Add', '/Dashboard-Teacher', '/Course', '/Dashboard-User', '/Profile'],
};
