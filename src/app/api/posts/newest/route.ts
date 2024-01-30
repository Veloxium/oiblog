import { NextRequest, NextResponse } from "next/server";
import prisma from "@/utils/connect";

export const GET = async (req: NextRequest) => {
    try {
        const posts = await prisma.post.findMany({
            take: 5,
            orderBy: {
                createdAt: "desc",
            },
            include: {
                cat: {
                    select: {
                        title: true,
                    },
                },
                user: {
                    select: {
                        name: true,
                    },
                },
            },
        });
        return new NextResponse(JSON.stringify({ posts }));
    } catch (error) {
        console.error(error);
        return new NextResponse(JSON.stringify({ message: "Something went wrong" }));
    }
};