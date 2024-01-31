import { NextRequest, NextResponse } from "next/server";
import prisma from "@/utils/connect";

export const GET = async (req: NextRequest, { params }: { params: { slug: string } }) => {
    const { slug } = params;
    try {
        // const post = await prisma.post.findUnique({
        //     where: {
        //         slug,
        //     },
        //     include: {
        //         cat: {
        //             select: {
        //                 title: true,
        //             },
        //         },
        //         user: {
        //             select: {
        //                 name: true,
        //                 tagline: true,
        //                 image: true,
        //             },
        //         }
        //     },
        // });
        const post = await prisma.post.update({
            where: {
                slug,
            },
            data: {
                views: { increment: 1 },
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
                        tagline: true,
                        image: true,
                    },
                }
            }
        });

        if (!post) {
            return new NextResponse(JSON.stringify({ message: "Post not found" }), { status: 404 });
        }

        return new NextResponse(JSON.stringify({ post }));
    } catch (error) {
        console.error(error);
        return new NextResponse(JSON.stringify({ message: "Something went wrong" }));
    }
};