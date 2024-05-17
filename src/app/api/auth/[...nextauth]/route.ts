import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { compare } from 'bcrypt';
import { sql } from '@vercel/postgres';

const handler = NextAuth({
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/login',
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const response = await sql`
          SELECT * FROM users WHERE email = ${credentials?.email}
        `;
        const user = response.rows[0];

        if (!user) {
          throw new Error('No user found with the email');
        }

        const passwordCorrect = await compare(credentials?.password || '', user.password);

        if (!passwordCorrect) {
          throw new Error('Invalid password');
        }

        console.log(user);

        return {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role,
          profile_picture: user.profile_picture,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
        token.role = user.role;
        token.profile_picture = user.profile_picture;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.email = token.email;
        session.user.name = token.name;
        session.user.role = token.role;
        session.user.profile_picture = token.profile_picture;
      }
      return session;
    },
  },
});

export { handler as GET, handler as POST };
