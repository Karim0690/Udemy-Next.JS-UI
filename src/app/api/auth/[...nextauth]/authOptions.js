import axios from "axios";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions = {
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
            `http://127.0.0.1:3001/auth/signin`,
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
      if (user) {
        token.token = user.token;
      }
      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.token;
      return session;
    },
  },

  pages: {
    signIn: "/login", // Custom sign-in page
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };