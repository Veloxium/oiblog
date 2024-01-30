import { NextRequest, NextResponse } from "next/server";
import prisma from "@/utils/connect";

export const GET = async (req: NextRequest, { params }: { params: { slug: string } }) => {
    const { slug } = params;
    try {
        const post = await prisma.post.findUnique({
            where: {
                slug,
            },
            include: {
                cat: true,
                user: true,
            },
        });
        return new NextResponse(JSON.stringify({ post }));
    } catch (error) {
        console.error(error);
        return new NextResponse(JSON.stringify({ message: "Something went wrong" }));
    }
};