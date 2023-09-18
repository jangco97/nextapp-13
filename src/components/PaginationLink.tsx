'use client'

import { useSearchParams } from 'next/navigation'
import React, { PropsWithChildren } from 'react'
import qs from 'query-string'
import Link from 'next/link';
type PaginationLinkProps = {
    page?: number | string;
    active?: boolean;
    disabled?: boolean;
    perPage?: number 
} & PropsWithChildren

const PaginationLink = ({page, active, disabled, children, perPage=10}: PaginationLinkProps) => {
    const params = useSearchParams();
    const limit = perPage;
    const skip = page? (Number(page) - 1)*limit : 0;

    let currentQuery = {};
    if(params){
        currentQuery = qs.parse(params?.toString()) //{'category' : 'interior', 'page' : '2'}
    }

    const updatedQurry = {
        ...currentQuery,
        page: page,
        skip: skip
    }

  return (
    <Link href={{query: updatedQurry}} className={`p-2 text-2xl 
    ${active ? "fond-bild text-orange-500" : "text-gray-500"} 
    ${disabled ? "pointer-events-none text-gray-200" : ""}
    `}>{children}</Link>
  )
}

export default PaginationLink