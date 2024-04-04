

import { getAllArticles, getArticleBySlug } from "@/actions";
import { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";
import Link from "next/link";

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


    return {
        title: article?.title ?? "Artículo no encontrado",
        description: article?.description ?? "",
        keywords: article?.metatags ?? "",
        
    };
}

export default async function ArticlePage({ params }: Props) {
    const { slug } = params;
    const article = await getArticleBySlug(slug);

    return (
        <div className="flex column">
            <header className="flex space-between p-20">
                <div className="flex justify-content align-center gap-15">
                    <Image src='https://media.licdn.com/dms/image/D5603AQGhCMVUYKFiqg/profile-displayphoto-shrink_400_400/0/1686592085975?e=1717632000&v=beta&t=U9SrlCCjq1LstR3zdttOk9viuzA4yjlwzA1GZZlIBow' width={50} height={50} className="radius-100" alt="Luis Leal" />
                    <div>
                        <h5 className="f-size-24">Luis Leal</h5>
                        <h6 className="gray-color f-size-18">FullStack Developer</h6>
                    </div>
                </div>
                <div className="flex justify-content align-center gap-5 f-size-30">
                    <Link href="https://github.com/luislealdev" target="_blank" className="black-text">
                        <i className="fa-brands fa-square-github"></i>
                    </Link>
                    <Link href="https://www.linkedin.com/in/luisrrleal/" className="black-text" target="_blank">
                        <i className="fa-brands fa-linkedin color-black"></i>
                    </Link>
                </div>
            </header>
            <div id="blog-content">
                <h1 className='f-size-40 center-text'>{article?.title}</h1>
                <Image src={article!.coverImage} alt={article!.title} className="max-width mt-20" width={1000} height={100} />
                <div dangerouslySetInnerHTML={{ __html: article?.content ?? '' }} className='f-size-18 mt-10' />
            </div>
        </div>
    )
}

