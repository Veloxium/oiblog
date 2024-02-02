import { NextRequest, NextResponse } from "next/server";
import prisma from "@/utils/connect";
import { getAuthSession } from "@/utils/auth";

export const GET = async (req: NextRequest, { params }: { params: { email: string } }) => {
    const { email } = params;
    const session = await getAuthSession();
    try {
        if (!session || session.user.email !== email) {
            return new NextResponse(JSON.stringify({ message: 'Not authorized', status: 401 }));
        }
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

export const PUT = async (req: NextRequest, { params }: { params: { email: string } }) => {
    const { email } = params;
    const body = await req.json();
    try {
        await prisma.user.update({
            where: {
                email: email,
            },
            data: {
                ...({ tagline: body.tagline }),
            },
        }
        );
        return new NextResponse(JSON.stringify({ message: "Berhasil mengupdate Tagline" }));
    } catch (error) {
        console.error(error);
        return new NextResponse(JSON.stringify({ message: "Something went wrong" }));
    }
};