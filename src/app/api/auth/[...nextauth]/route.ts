import { authOptions } from "@/utils/auth"
import NextAuth from "next-auth"

const handler = NextAuth(
    authOptions
)


export { handler as GET, handler as POST, handler as PUT, handler as DELETE}