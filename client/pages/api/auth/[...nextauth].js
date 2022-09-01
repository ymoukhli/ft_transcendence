import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import PostgresAdapter from "../../../lib/adapter.js";
import {Pool } from 'postgresql-client';
const pool = new Pool({
	user: "user",
	host: "postgres",
	database: "db",
	password: "password",
});
export default NextAuth({
  // Configure one or more authentication providers
  site: process.env.NEXTAUTH_URL,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  adapter: PostgresAdapter(pool),
  pages: {
    signIn: "/auth/signin",
  },
  
  // callbacks: {
  //   async session({ session, token, user}) {
  //     session.user.username = session.user.name
  //       .split(" ")
  //       .join("")
  //       .toLocaleLowerCase();

  //     session.user.uid = token.sub;
  //     return session;
  //   }
  // }
})