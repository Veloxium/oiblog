import { NextRequest, NextResponse } from "next/server";
import prisma from "@/utils/connect";
import { getAuthSession } from "@/utils/auth";

export const GET = async (req: NextRequest) => {
    const { searchParams } = new URL(req.url);

    const email = searchParams.get("email");
    if (!email) return new NextResponse(JSON.stringify({ message: "Something went wrong" }));

    try {
        const posts = await prisma.post.findMany(
            {
                where: {
                    userEmail: email,
                },
                include: {
                    cat: {
                        select: {
                            title: true,
                        },
                    },
                },
            }
        );
        return new NextResponse(JSON.stringify({ posts }));
    } catch (error) {
        console.error(error);
        return new NextResponse(JSON.stringify({ message: "Something went wrong" }));
    }
};

export const DELETE = async (req: NextRequest) => {
    const { searchParams } = new URL(req.url);

    const id = searchParams.get("id");
    if (!id) return new NextResponse(JSON.stringify({ message: "Something went wrong" }));
    const session = await getAuthSession();
    if (!session?.user?.email) {
        return new NextResponse(JSON.stringify({ message: 'Not authorized', status: 401 }));
    }
    const userEmail = session.user.email;
    try {
        await prisma.post.delete(
            {
                where: {
                    id: id,
                    userEmail: userEmail,
                },
            }
        );
        return new NextResponse(JSON.stringify({ message : "Blog berhasil dihapus" }));
    } catch (error) {
        console.error(error);
        return new NextResponse(JSON.stringify({ message: "Something went wrong" }));
    }
};