import { NextRequest, NextResponse } from "next/server";
import prisma from "@/utils/connect";
import { getAuthSession } from "@/utils/auth";


export const GET = async (req: NextRequest) => {
    const session = await getAuthSession();
    if (!session) {
        return new NextResponse(JSON.stringify({ message: "Not Authorized" }), {
            status: 401
        });
    }
    try {
        if (session.user.role !== "admin") {
            return new NextResponse(JSON.stringify({ message: "Not Authorized" }), {
                status: 401
            });
        }
        const [users, posts] = await prisma.$transaction(
            [
                prisma.user.findMany(),
                prisma.post.findMany(),
            ]
        );
        return new NextResponse(JSON.stringify({ users, posts }));
    } catch (error) {
        console.error(error);
        return new NextResponse(JSON.stringify({ message: "Something went wrong" }));
    }
};

export const DELETE = async (req: NextRequest) => {
    const { searchParams } = new URL(req.url);

    const user = searchParams.get("user");
    const post = searchParams.get("post");

    const session = await getAuthSession();

    if (!session) {
        return new NextResponse(JSON.stringify({ message: "Not Authorized" }), {
            status: 401
        });
    }

    try {
        if (session.user.role !== "admin") {
            return new NextResponse(JSON.stringify({ message: "Not Authorized" }), {
                status: 401
            });
        }
        if (user && user !== "") {
            await prisma.user.delete({
                where: {
                    email: user,
                }
            });
            return new NextResponse(JSON.stringify({ message: "User berhasil dihapus" }));
        }
        if (post && post !== "") {
            await prisma.post.delete({
                where: {
                    id: post,
                }
            });
            return new NextResponse(JSON.stringify({ message: "Blog berhasil dihapus" }));
        }
    } catch (error) {
        console.error(error);
        return new NextResponse(JSON.stringify({ message: "Something went wrong" }));
    }
};