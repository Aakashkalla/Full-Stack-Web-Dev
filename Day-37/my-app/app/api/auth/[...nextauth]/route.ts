import NextAuth from "next-auth";
import  CredentialsProvider  from "next-auth/providers/credentials";

const handler = NextAuth({
    providers : [
        CredentialsProvider({
    name: "Email",
    credentials: {
      username: { label: "Username", type: "text", placeholder: "Username" },
      password: { label: "Password", type: "password" }
    },
    async authorize(credentials, req) {
        // DB Call to check for credentials, 
        const username = credentials?.username;
        const password = credentials?.password;

        const user = {
            
        }
    }
  })
    ] 
})

export {handler  as GET, handler as POST}