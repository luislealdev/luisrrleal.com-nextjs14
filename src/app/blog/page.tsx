
import { getPaginatedArticles } from '@/actions';
import { Pagination } from '@/components/ui';
import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react'

interface Props {
    searchParams: {
        page?: string
    }
}

const BlogPage: FC<Props> = async ({ searchParams }) => {

    const page = searchParams.page ? parseInt(searchParams.page) : 1;
    const { articles, currentPage, totalPages } = await getPaginatedArticles({ page });

    return (
        <>

            <div className='center-text'>
                <h1 className='f-size-50'>Blog</h1>
                <p className='f-size-18'>Consejos sobre tecnología, reflexiones y política... ¿Por qué los programadores tenemos que ser tímidos?</p>
            </div>
            <section style={{ maxWidth: 1200, marginTop: -30, width: '-webkit-fill-available' }} className='flex column gap-25' >
                {
                    articles.map((article, index) => index == 0 ? <Link href={'/blog/' + article.slug}>
                        <div className='flex column p-20 mt-50 end white-text' style={{
                            backgroundImage: `url('${article.coverImage}')`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            minHeight: 300,
                        }}>
                            {/* <p style={{ position: 'relative', top: 0, right: 0 }}>Más reciente</p> */}
                            <p>{article.date}</p>
                            <h2 className='mt-10 f-size-24'>{article.title}</h2>
                            <p className='f-size-14'>{article.description}</p>
                            <div className='flex gap-15 mt-10' style={{overflow: 'scroll'}}>
                                {
                                    article.metatags.map((tag, index) => (
                                        <p key={index} className='white-border ph-20 radius'>{tag}</p>
                                    ))
                                }
                            </div>
                        </div>
                    </Link> : <div className='grid-c-3 gap-25'>
                        <Link href={'/blog/' + article.slug}>
                            <Image src={article.coverImage} width={500} height={500} className='max-width' alt={article.title} />
                            <p>{article.title}</p>
                            <p>{article.description}</p>
                        </Link>
                    </div>)
                }

            </section>
            <Pagination totalPages={totalPages} />
        </>

    )
}

export default BlogPage