import { getServerSession } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { jwtDecode } from "jwt-decode";

const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const res = await fetch(
          "https://udemy-eosin-eight.vercel.app/auth/signin",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(credentials),
          }
        );
        const data = await res.json();

        if (res.ok && data?.token) {
          return {
            token: data.token,
            email: credentials.email,
          };
        }
        return null;
      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days (in seconds)
  },
  jwt: {
    maxAge: 30 * 24 * 60 * 60, // 30 days (in seconds)
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user?.token) {
        token.accessToken = user.token;
      }
      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken;
      const userData = jwtDecode(token.accessToken);
      session.user = {
        email: userData.email,
        name: userData.name,
        role: userData.role,
      };
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
};
const getSession = () => getServerSession(authOptions);
export { authOptions, getSession };
