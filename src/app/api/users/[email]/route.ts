import { NextRequest, NextResponse } from "next/server";
import prisma from "@/utils/connect";

export const GET = async (req: NextRequest, { params }: { params: { email: string } }) => {
    const { email } = params;
    try {
        const user = await prisma.user.findUnique({
            where: {
                email: email,
            },
        });
        return new NextResponse(JSON.stringify({ user }));
    } catch (error) {
        console.error(error);
        return new NextResponse(JSON.stringify({ message: "Something went wrong" }));
    }
};