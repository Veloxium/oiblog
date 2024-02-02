import GoogleProvider from "next-auth/providers/google"
import { PrismaAdapter } from "@auth/prisma-adapter"
import prisma from "./connect";
import { AuthOptions, getServerSession } from "next-auth";
import { Adapter } from "next-auth/adapters";
import { Session, User } from "@prisma/client";

export const authOptions: AuthOptions = {
    session: {
        strategy: "jwt",
    },
    adapter: PrismaAdapter(prisma) as Adapter,
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID!,
            clientSecret: process.env.GOOGLE_SECRET!,
            profile(profile) {
                return ({
                    id: profile.sub,
                    name: profile.name,
                    email: profile.email,
                    image: profile.picture,
                    role: profile.role ? profile.role : "user",
                })
            }
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            return { ...token, ...user }
        },
        async session({ session, token }) {
            session.user.role = token.role;
            return session;
        },
    },
    pages: {
        signIn: "/login",
    },
};

export const getAuthSession = async () => {
    try {
        const session = await getServerSession(authOptions);
        return session;
    } catch (error) {
        console.error("Error getting authentication session:", error);
        throw error;
    }
};
