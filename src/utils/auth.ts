import GoogleProvider from "next-auth/providers/google"
import { PrismaAdapter } from "@auth/prisma-adapter"
import prisma from "./connect";
import { getServerSession } from "next-auth";
import { Adapter } from "next-auth/adapters";

export const authOptions = {
    adapter: PrismaAdapter(prisma) as Adapter,
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID || "",
            clientSecret: process.env.GOOGLE_SECRET || "",
        }),
    ],
};

export const getAuthSession = () => getServerSession(authOptions);
