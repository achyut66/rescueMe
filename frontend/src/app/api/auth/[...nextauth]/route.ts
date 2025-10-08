import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      // Must provide credentials object for TS
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      name: "Credentials",
      async authorize(credentials) {
        try {
          const res = await axios.post("http://localhost:5000/api/login", {
            email: credentials?.email,
            password: credentials?.password,
          });

          if (res.data.user) return res.data.user;
          return null;
        } catch (err) {
          console.error(err);
          return null;
        }
      },
    }),
  ],
  session: { strategy: "jwt" },
  secret: process.env.NEXTAUTH_SECRET || "SUPER_SECRET_KEY",
});

export { handler as GET, handler as POST };
