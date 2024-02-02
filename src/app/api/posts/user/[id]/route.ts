import { NextRequest, NextResponse } from "next/server";
import prisma from "@/utils/connect";
import { getAuthSession } from "@/utils/auth";
import path from "path";
import fs from 'fs/promises';

export const GET = async (req: NextRequest, { params }: { params: { id: string } }) => {
    const { id } = params;
    try {
        const post = await prisma.post.findUnique({
            where: {
                id,
            },
            include: {
                cat: {
                    select: {
                        title: true,
                    },
                },
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

export const PUT = async (req: NextRequest, { params }: { params: { id: string } }) => {
    const { id } = params;
    const session = await getAuthSession();
    if (!session?.user?.email) {
        return new NextResponse(JSON.stringify({ message: 'Not authorized', status: 401 }));
    }
    const email = session.user.email;
    const body = await req.json();
    
    // const uploadDir = path.join(process.cwd(), 'public', 'uploads');

    // const ensureUploadDir = async () => {
    //     try {
    //         await fs.mkdir(uploadDir, { recursive: true });
    //     } catch (error) {
    //         console.error('Error creating upload directory:', error);
    //     }
    // };

    try {
        // await ensureUploadDir();

        // const { title, slug, desc, catSlug } = Object.fromEntries(body.entries()) as {
        //     title: string;
        //     slug: string;
        //     desc: string;
        //     catSlug: string;
        // };

        // const file = body.get('image') as File;

        const existingPost = await prisma.post.findUnique({
            where: {
                id,
            },
        });

        if (!existingPost || !existingPost.img) {
            return new NextResponse(JSON.stringify({ message: 'Post not found', status: 404 }));
        }

        // Remove the existing file
        // const existingFilePath = path.join(process.cwd(), 'public', existingPost.img);
        // await fs.unlink(existingFilePath);

        // const timestamp = new Date().getTime();
        // const fileName = `${timestamp}_${file.name as string}`;
        // const filePath = path.join(uploadDir, fileName);

        // const buffer = await file.arrayBuffer();
        // await fs.writeFile(filePath, Buffer.from(buffer));

        // Update the post with the new data and file
        await prisma.post.update({
            where: {
                id,
            },
            data: {
                // slug,
                // title,
                // desc,
                // img: '/uploads/' + fileName,
                // catSlug,
                ...body,
                userEmail: email,
            },
        });
        return new NextResponse(JSON.stringify({ message: "Blog updated" }));
    } catch (error) {
        console.error(error);
        return new NextResponse(JSON.stringify({ message: "Something went wrong" }));
    }
};