import { NextRequest, NextResponse } from "next/server";
import prisma from "@/utils/connect";
import { getServerSession } from "next-auth";
import { authOptions, getAuthSession } from "@/utils/auth";

export const GET = async (req: NextRequest) => {
    const { searchParams } = new URL(req.nextUrl);
    const postSlug = searchParams.get('postSlug');

    try {
        const comments = await prisma.comment.findMany({
            where: {
                ...(postSlug && { postSlug })
            },
            include: {
                user: {
                    select: {
                        name: true,
                        image: true,
                        email: true,
                    }
                }
            },
            orderBy:{
                createdAt: 'desc'
            }
        });
        return new NextResponse(JSON.stringify({ comments }));
    } catch (error) {
        console.error(error);
        return new NextResponse(JSON.stringify({ message: "Something went wrong" }));
    }
};

export const POST = async (req: NextRequest) => {
    const session = await getAuthSession();
    const userEmail = session?.user?.email || "";
    if (!session) {
        console.log("Unauthorized")
        return new NextResponse(JSON.stringify({ message: "Unauthorized" }), {
            status: 401
        });
    }

    try {
        const body  =  await req.json();
        await prisma.comment.create({
            data: {
                ...body,
                userEmail: userEmail,
            }
        });
        return new NextResponse(JSON.stringify({ message: "Comment berhasil ditambahkan" }));
    } catch (error) {
        console.error(error);
        return new NextResponse(JSON.stringify({ message: "Something went wrong" }));
    }
};

export const DELETE = async (req: NextRequest) => {
    const session = await getAuthSession();
    if (!session) {
        console.log("Unauthorized")
        return new NextResponse(JSON.stringify({ message: "Unauthorized" }), {
            status: 401
        });
    }
    try {
        const body  =  await req.json();
        await prisma.comment.delete({
            where: {
                id: body.id,
            }
        });
        return new NextResponse(JSON.stringify({ message: "Komentar berhasil dihapus" }));
    } catch (error) {
        console.error(error);
        return new NextResponse(JSON.stringify({ message: "Something went wrong" }));
    }
};