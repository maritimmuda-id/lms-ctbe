// next-auth.d.ts
import { DefaultSession, DefaultUser } from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      role: string;
      profile_picture: string;
    } & DefaultSession['user'];
  }

  interface User {
    id: string;
    role: string;
    profile_picture: string;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    id: string;
    role: string;
    profile_picture: string;
  }
}
