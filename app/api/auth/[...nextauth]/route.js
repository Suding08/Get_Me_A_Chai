import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import mongoose from "mongoose";
import User from "@/models/User";
import Payment from "@/models/Payment";
import connectDB from "@/db/connectDb";


export const authOptions = NextAuth({
  // Configure one or more authentication providers
  providers: [
    //older github provider code
    //using web devolopment Suding08
    //GITHUB_ID=Ov23liCe3eIIhCZtZem7
//GITHUB_SECRET=c252bfbbc0aea3ceec4978e5eeee1cb50c95dd8c
//next using GetMeAChai sudin8
//GITHUB_ID=Ov23liWbtf4X9oqa0CX3
//GITHUB_SECRET=cc43354481b7cd593a905468ab72bdf0d7277326


    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,    
    }),
    // ...add more providers here
  ],

  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if (account.provider == "github") {
        await connectDB()
       
        //Check if user already exists
        const currentUser = await User.findOne({ email: email })
        if (!currentUser) {

          const newUser = await User.create({
            email: user.email,
            username: user.email.split("@")[0],

          })
          user.name = newUser.username
        }
        else {
          user.name = currentUser.username
        }
        return true
      }
    },
    async session({ session, user, token }) {
      const dbUser = await User.findOne({ email: session.user.email })
      session.user.name = dbUser.username
      return session
    },
  }
})
export { authOptions as GET, authOptions as POST }
