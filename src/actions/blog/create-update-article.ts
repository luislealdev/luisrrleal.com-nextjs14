import { Article, PrismaClient } from '@prisma/client';

'use server'

const prisma = new PrismaClient();

export const createArticle = async (formData: FormData) => {
    try {
        const prismaTx = await prisma.$transaction(async (tx) => {
            let article: Article;
            
            article = prisma.article.create({
                data: {
                    ...rest
                }
            })
        })
    } catch {

    }
}