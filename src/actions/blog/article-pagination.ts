'use server'
import prisma from '@/lib/prisma';
import { PaginationOptions } from '../../interfaces';

export const getPaginatedArticles = async ({ page = 1, take = 7 }: PaginationOptions) => {
    if (isNaN(Number(page))) page = 1;
    if (page < 1) page = 1;

    try {
        const articles = await prisma.article.findMany({
            take: take,
            skip: (page - 1) * take,
        });

        const totalCount = await prisma.article.count({});
        const totalPages = Math.ceil(totalCount / take);

        return {
            currentPage: page,
            totalPages,
            articles
        }
    } catch (error) {
        throw new Error("No se pudieron cargar los clientes")
    }
}