
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
                <p className='f-size-18'>Consejos sobre tecnología, mi vida y pensamientos... ¿Por qué los programadores tenemos que ser tímidos?</p>
            </div>

            <section style={{ maxWidth: 1200, marginTop: -30, width: '-webkit-fill-available' }} className='flex column gap-25' >

                {
                    <Link href={'/blog/' + articles[0].slug}>
                        <div className='flex column mt-50 end white-text' style={{
                            backgroundImage: `url('${articles[0].coverImage}')`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            minHeight: 400,
                        }}>
                            {/* <p style={{ position: 'relative', top: 0, right: 0 }}>Más reciente</p> */}
                            <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }} className=' p-20 '>
                                <p>{articles[0].date}</p>
                                <h2 className='mt-10 f-size-24'>{articles[0].title}</h2>
                                <p className='f-size-14'>{articles[0].description}</p>
                                <div className='flex gap-15 mt-10' style={{ overflow: 'scroll' }}>
                                    {
                                        articles[0].metatags.map((tag, index) => (
                                            <p key={index} className='white-border ph-20 radius'>{tag}</p>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </Link>
                }
                <div className='grid-c-3 gap-25'>
                    {/* TODO: CREATE A COMPONENT */}
                    {
                        articles.map((article, index) => index > 0 &&
                            <Link href={'/blog/' + article.slug} key={article.id}>
                                <div className='flex column bg-gray black-text gray-border'>
                                    <Image src={article.coverImage} width={500} height={500} className='max-width' alt={article.title} />
                                    <div className='p-20'>
                                        <p>{article.date}</p>
                                        <hr />
                                        <h3 className='mt-10 f-size-18'>{article.title}</h3>
                                        <p className='mt-10 f-size-14'>{article.description}</p>
                                    </div>
                                </div>
                            </Link>
                        )
                    }
                </div>
            </section>
            <Pagination totalPages={totalPages} />
        </>

    )
}

export default BlogPage