import { NextRequest, NextResponse } from "next/server";
import prisma from "@/utils/connect";
import path from "path";
import fs from 'fs/promises';
import { getAuthSession } from "@/utils/auth";

export const GET = async (req: NextRequest) => {
    const { searchParams } = new URL(req.url);

    const page = searchParams.get("page");
    const cat = searchParams.get("cat");
    const search = searchParams.get("search");
    const POST_PER_PAGE = 6;

    const query = {
        take: POST_PER_PAGE,
        skip: POST_PER_PAGE * (Number(page || 1) - 1),
        where: {
            ...(cat && { catSlug: cat } as any), 
            ...(search && { title: { contains: search, mode: 'insensitive' } }),
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
            },
        },

    }

    try {
        const [posts, count] = await prisma.$transaction(
            [
                prisma.post.findMany(
                    query
                ),
                prisma.post.count({ where: query.where }),
            ]
        );
        return new NextResponse(JSON.stringify({ posts, count }));
    } catch (error) {
        console.error(error);
        return new NextResponse(JSON.stringify({ message: "Something went wrong" }));
    }
};

export const POST = async (req: NextRequest) => {
    const body = await req.formData();
    const session = await getAuthSession();
    const userEmail = session?.user?.email || "";
    const uploadDir = path.join(process.cwd(), 'public', 'uploads');
    const ensureUploadDir = async () => {
        try {
            await fs.mkdir(uploadDir, { recursive: true });
        } catch (error) {
            console.error('Error creating upload directory:', error);
        }
    };
    try {
        await ensureUploadDir();
        const { title, slug, desc, catSlug } = Object.fromEntries(body.entries()) as { title: string, slug: string, desc: string, catSlug: string };
        const file = body.get('image') as File;
        if (!file) {
            return new NextResponse(JSON.stringify({ message: 'No image provided' }));
        }
        const timestamp = new Date().getTime();
        const fileName = `${timestamp}_${file.name as string}`;
        const filePath = path.join(uploadDir, fileName);
        const buffer = await file.arrayBuffer();
        await fs.writeFile(filePath, Buffer.from(buffer));
        await prisma.post.create({
            data: {
                slug,
                title,
                desc,
                img: '/uploads/' + fileName,
                catSlug,
                userEmail: userEmail,
            }
        });

        return new NextResponse(JSON.stringify({
            message: 'Artikel berhasil ditambahkan'
        }));
    } catch (error) {
        console.error(error);
        return new NextResponse(JSON.stringify({ message: "Something went wrong" }));
    }
};