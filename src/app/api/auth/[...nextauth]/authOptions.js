import axios from "axios";
import jwt from "jsonwebtoken";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      async authorize(credentials, req) {
        const { email, password } = credentials;

        try {
          const { data } = await axios.post(
            `${process.env.NEXT_PUBLIC_LOCAL_API}/auth/signin`,
            {
              email,
              password,
            }
          );

          if (data.message === "success") {
            return {
              token: data.token,
            };
          } else {
            throw new Error("No such user found");
          }
        } catch (error) {
          throw new Error(
            error.response?.data?.message || "Authorization failed"
          );
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user && user.token) {
        try {
          const verifiedPayload = jwt.verify(
            user.token,
            process.env.JWT_SECRET
          );
          token.accessToken = user.token;
          token.user = verifiedPayload;
        } catch (error) {
          console.error("Token verification failed:", error);
          throw new Error("Invalid token");
        }
      }
      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken;
      session.user = token.user;
      return session;
    },
  },

  secret: process.env.AUTH_SECRET,
  pages: {
    signIn: "/login",
  },
};
