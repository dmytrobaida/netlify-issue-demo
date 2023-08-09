import NextAuth from "next-auth";
import FacebookProvider from "next-auth/providers/facebook";

const handler = NextAuth({
  providers: [
    FacebookProvider({
      clientId: "test",
      clientSecret: "test",
    }),
  ],
});

export { handler as GET, handler as POST };
