import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const NEXTAUTH_URL = process.env.NEXTAUTH_URL || "https://qualityveda.co";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
      authorization: {
        params: {
          redirect_uri: "https://qualityveda.co/api/auth/callback/google",
          
        },
      },
    }),
  ],
  secret: process.env.SECRET,
  cookies: {
    sessionToken: {
      name: `__Secure-next-auth.session-token`,
      options: {
        httpOnly: true,
        sameSite: 'lax',
        path: '/',
        secure: true
      },
    },
    callbackUrl: {
      name: `__Secure-next-auth.callback-url`,
      options: {
        sameSite: 'lax',
        path: '/',
        secure: true
      },
    },
    csrfToken: {
      name: `__Host-next-auth.csrf-token`,
      options: {
        httpOnly: true,
        sameSite: 'lax',
        path: '/',
        secure: true
      },
    },
  },
};

export default NextAuth(authOptions);
