'use server'

import prisma from "@/lib/prisma";

export const getArticleBySlug = async (slug: string) => {

    try {
        const article = await prisma.article.findFirst({
            where: {
                slug
            }
        })

        return article;
    } catch (error) {

    }
}