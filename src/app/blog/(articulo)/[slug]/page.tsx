// import fs from 'fs';
// import matter from 'gray-matter';
// import Image from 'next/image';
// import markdownit from 'markdown-it'

import { getAllArticles, getArticleBySlug } from "@/actions";
import { Metadata, ResolvingMetadata } from "next";

// interface Props {
//     params: { slug: string };
// }

// interface ArticleProps {
//     frontmatter: smallArticle,
//     content: string
// }


// export async function generateStaticParams() {
//     const files = fs.readdirSync('./data/articles');

//     const slugs = files.map(fileName =>
//         fileName.replace('.md', '')
//     );

//     return slugs;
// }

// import type { Metadata } from 'next'
// import { smallArticle } from '@/interfaces';

// export async function generateMetadata({ params }: Props): Promise<Metadata> {
//     const slug = params?.slug;
//     const file = fs.readFileSync(`./data/articles/${slug}.md`, 'utf-8');
//     const { data } = matter(file);

//     return {
//         title: data.title,
//         description: data.description,
//         keywords: data.keywords,
//         openGraph: {
//             title: data.title,
//             description: data.description,
//             images: [
//                 {
//                     url: data.socialImage,
//                     alt: data.title,
//                 },
//             ],
//         },
//     };
// }

// const getArticle = async (slug: string): Promise<ArticleProps> => {
//     const file = fs.readFileSync(`./data/articles/${slug}.md`, 'utf-8');

//     const { data: frontmatter, content } = matter(file);

//     return {
//         frontmatter,
//         content
//     };
// };

// export default async function ArticlePage({ params }: Props) {
//     const { frontmatter, content } = await getArticle(params.slug);

//     return (
//         <div style={{ maxWidth: 800 }}>
//             <h1 className='f-size-40'>{frontmatter.title}</h1>
//             <p className='mb-10'>{frontmatter.date}</p>
//             <Image
//                 src={frontmatter.socialImage}
//                 alt={frontmatter.title}
//                 className="max-width"
//                 width={1000}
//                 height={400}
//             />
//             <div dangerouslySetInnerHTML={{ __html: markdownit().render(content) }} className='f-size-18 mt-10' />
//         </div>
//     );
// }


interface Props {
    params: {
        slug: string
    }
}

export const dynamicParams = false;

export async function generateStaticParams() {
    const articles = await getAllArticles();

    return articles.map((article) => ({
        slug: article.slug,
    }));
}

export async function generateMetadata(
    { params }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    // read route params
    const slug = params.slug;

    // fetch data
    const article = await getArticleBySlug(slug);

    // optionally access and extend (rather than replace) parent metadata
    // const previousImages = (await parent).openGraph?.images || []

    return {
        title: article?.title ?? "Artículo no encontrado",
        description: "",
    };
}

export default async function ArticlePage({ params }: Props) {
    const { slug } = params;
    const article = await getArticleBySlug(slug);

    return (
        <div style={{ maxWidth: 800 }}>
            <h1 className='f-size-40'>{article?.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: article?.content ?? '' }} className='f-size-18 mt-10' />
        </div>
    )
}

