'use server'
import prisma from '@/lib/prisma';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';
import { v2 as cloudinary } from 'cloudinary';
import { Article } from '@prisma/client';
cloudinary.config(process.env.CLOUDINARY_URL ?? '', { folder: 'luisrrleal.com-blog' });


const articleSchema = z.object({
    id: z.string().uuid().optional().nullable(),
    title: z.string().min(3).max(255),
    metatags: z.string(),
    content: z.string(),
    slug: z.string().min(3).max(255),
    date: z.string(),
    description: z.string().min(3).max(255),
    // Accept image as a file
    coverImage: z.instanceof(File),
    categoryId: z.string().uuid(),
    userId: z.string().uuid(),
});


export const createUpdateArticle = async (formData: FormData) => {
    const data = Object.fromEntries(formData);
    const parsedArticle = articleSchema.safeParse(data);

    if (!parsedArticle.success) {
        console.log(parsedArticle.error);
        return {
            ok: false
        }
    }

    const coverImage = await uploadImage(parsedArticle.data.coverImage);
    if (!coverImage) {
        return {
            ok: false,
            message: 'No se pudo subir la imagen de portada'
        }
    }

    const article = parsedArticle.data;
    article.slug = article.slug.toLowerCase().replace(/ /g, '-').trim();

    const { id, ...rest } = article;

    try {
        const prismaTx = await prisma.$transaction(async (tx) => {
            let article: Article;
            const metatags = rest.metatags.split(',').map(metatag => metatag.trim().toLowerCase());

            if (id) {
                //Actualizar artículo
                article = await prisma.article.update({
                    where: { id },
                    data: {
                        ...rest,
                        coverImage: coverImage,
                        metatags: {
                            set: metatags
                        }
                    }
                });

            } else {
                //Crear artículo
                article = await prisma.article.create({
                    data: {
                        ...rest,
                        metatags: {
                            set: metatags
                        },
                        coverImage: coverImage, // Convert File to string
                    }
                })
            }

            return { article };
        });

        // TODO: CHECK RevalidatePaths
        revalidatePath('/blog');
        revalidatePath(`/blog/${article.slug}`);

        console.log(article);


        return { ok: true, article: prismaTx.article };


    } catch (error) {
        console.log(error);

        return {
            ok: false,
            message: 'Revisar logs, no se pudo actualizar o crear artículo'
        }
    }
}

const uploadImage = async (image: File) => {

    try {
        const buffer = await image.arrayBuffer();
        const base64Image = Buffer.from(buffer).toString('base64');

        return cloudinary.uploader.upload(`data:image/png;base64,${base64Image}`)
            .then(r => r.secure_url);

    } catch (error) {
        console.log(error);
        return null;
    }

}