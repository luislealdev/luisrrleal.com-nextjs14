'use client';

import { generatePaginationNumbers } from '@/utils';
import Link from 'next/link';
import { redirect, usePathname, useSearchParams } from 'next/navigation';


interface Props {
    totalPages: number;
}


export const Pagination = ({ totalPages }: Props) => {

    const pathname = usePathname();
    const searchParams = useSearchParams();

    const pageString = searchParams.get('page') ?? 1;
    const currentPage = isNaN(+pageString) ? 1 : +pageString;

    if (currentPage < 1 || isNaN(+pageString)) {
        redirect(pathname);
    }


    const allPages = generatePaginationNumbers(currentPage, totalPages);


    const createPageUrl = (pageNumber: number | string) => {

        const params = new URLSearchParams(searchParams);

        if (pageNumber === '...') {
            return `${pathname}?${params.toString()}`
        }

        if (+pageNumber <= 0) {
            return `${pathname}`; //   href="/kid";
        }

        if (+pageNumber > totalPages) { // Next > 
            return `${pathname}?${params.toString()}`;
        }

        params.set('page', pageNumber.toString());
        return `${pathname}?${params.toString()}`;

    }



    return (
        <div className="flex center-text justify-content mt-10 mb-10">

            <nav aria-label="Page navigation example">

                <ul className="flex gap-15 align-center">
                    <Link
                        className='red-2-color'
                        href={createPageUrl(currentPage - 1)}
                    >
                        <i className="fa-solid fa-arrow-left"></i>
                    </Link>

                    {
                        allPages.map((page, index) => (
                            <Link
                                key={page}
                                href={createPageUrl(page)}
                                className='bold f-size-24 black-color'
                            >
                                {page}
                            </Link>
                        ))
                    }

                    <Link
                        className='red-2-color'
                        href={createPageUrl(currentPage + 1)}
                    >
                        <i className="fa-solid fa-arrow-right red-color-2"></i>
                    </Link>

                </ul>
            </nav>
        </div>
    );
};