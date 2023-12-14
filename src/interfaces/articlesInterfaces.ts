export interface smallArticle {
    title: string,
    metaTitle: string,
    metaDesc: string,
    socialImage: string,
    date: string,
    author: string,
    authorImg: string,
    category: string,
    tags: string[]
}

export interface article {
    title: string,
    content: smallArticle
}

export interface recentArticle {
    title: string,
    articleUrl: string,
    socialImage: string,
    author: string,
    authorImg: string,
    date: string,
    category: string,
}