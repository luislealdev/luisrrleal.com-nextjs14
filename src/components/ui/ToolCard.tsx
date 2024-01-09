import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'

interface Props {
    url: string,
    img: string,
    title: string,
    description: string
}

export const ToolCard: FC<Props> = ({ url, img, title, description }) => {
    return (
        <Link href={url} className='p-20 shadow justify-text radius-30'>
            <Image src={img} alt={title} width={300} height={300} className='max-width' />
            <h2 className='center-text'>{title}</h2>
            <p>{description}</p>
        </Link>
    )
}
