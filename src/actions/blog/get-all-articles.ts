import prisma from "@/lib/prisma"

export const getAllArticles = async () => {
    return prisma.article.findMany({});
}