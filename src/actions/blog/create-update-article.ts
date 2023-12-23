'use server'
import prisma from '@/lib/prisma';
import { Article } from '@prisma/client';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';


const articleSchema = z.object({
    id: z.string().uuid().optional().nullable(),

    title: z.string().min(3).max(255),
    metatags: z.string(),
    content: z.string(),
    slug: z.string().min(3).max(255),
    date: z.string(),
    description: z.string().min(3).max(255),

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
                        }
                    }
                })
            }
        });

        // TODO: CHECK RevalidatePaths
        revalidatePath('/blog');
        revalidatePath(`/blog/${article.slug}`);

        return {
            ok: true,
            article
        }
    } catch (error) {
        return {
            ok: false,
            message: 'Revisar logs, no se pudo actualizar o crear artículo'
        }
    }
}