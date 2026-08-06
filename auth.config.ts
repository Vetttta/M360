import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;

      const isAuthPage = 
        nextUrl.pathname.startsWith('/login') || 
        nextUrl.pathname.startsWith('/register');

      if (isLoggedIn) {
        if (isAuthPage) {
          return Response.redirect(new URL('/', nextUrl));
        }
        return true;
      }

      if (isAuthPage) {
        return true;
      }

      return false;
    },
  },
  providers: [],
} satisfies NextAuthConfig;