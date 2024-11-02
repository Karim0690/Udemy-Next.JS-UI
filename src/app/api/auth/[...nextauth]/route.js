import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "password", type: "password" }
      },
      async authorize(credentials) {
        try {
          const response = await axios.post("https://udemy-eosin-eight.vercel.app/auth/login", {
            email: credentials.email,
            password: credentials.password
          });

          if (response.data && response.data.token) {
            return { ...response.data, accessToken: response.data.token };
          }
          return null;
        } catch (error) {
          console.error("Error during authentication:", error);
          return null;
        }
      }
    })
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.accessToken = user.accessToken;
      }
      return token;
    },
    async session({ session, token }) {
        session.user = { ...session.user, accessToken: token.accessToken };
        return session;
      }
    },
  pages: {
    signIn: "/auth/login",
  }
};

export default NextAuth(authOptions);
