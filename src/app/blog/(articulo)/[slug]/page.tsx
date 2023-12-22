import fs from 'fs';
import matter from 'gray-matter';
import Image from 'next/image';
import markdownit from 'markdown-it'

interface Props {
    params: { slug: string };
}

interface ArticleProps {
    frontmatter: smallArticle,
    content: string
}


export async function generateStaticParams() {
    const files = fs.readdirSync('./data/articles');

    const slugs = files.map(fileName =>
        fileName.replace('.md', '')
    );

    return slugs;
}

import type { Metadata } from 'next'

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const slug = params?.slug;
    const file = fs.readFileSync(`./data/articles/${slug}.md`, 'utf-8');
    const { data } = matter(file);

    return {
        title: data.title,
        description: data.description,
        keywords: data.keywords,
        openGraph: {
            title: data.title,
            description: data.description,
            images: [
                {
                    url: data.socialImage,
                    alt: data.title,
                },
            ],
        },
    };
}

const getArticle = async (slug: string): Promise<ArticleProps> => {
    const file = fs.readFileSync(`./data/articles/${slug}.md`, 'utf-8');

    const { data: frontmatter, content } = matter(file);

    return {
        frontmatter,
        content
    };
};

export default async function ArticlePage({ params }: Props) {
    const { frontmatter, content } = await getArticle(params.slug);

    return (
        <div style={{ maxWidth: 800 }}>
            <h1 className='f-size-40'>{frontmatter.title}</h1>
            <p className='mb-10'>{frontmatter.date}</p>
            <Image
                src={frontmatter.socialImage}
                alt={frontmatter.title}
                className="max-width"
                width={1000}
                height={400}
            />
            <div dangerouslySetInnerHTML={{ __html: markdownit().render(content) }} className='f-size-18 mt-10' />
        </div>
    );
}
