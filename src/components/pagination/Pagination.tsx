"use client";
import usePagination from "@lucasmogari/react-pagination";
import React from "react";
import PaginationLink from "./PaginationLink";

interface PaginationProps {
  page: number;
  totalItems: number;
  perPage: number;
}

const Pagination = ({ page, totalItems, perPage }: PaginationProps) => {
  const { fromItem, toItem, getPageItem, totalPages } = usePagination({
    totalItems: totalItems,
    page: page,
    itemsPerPage: perPage,
    maxPageItems: 10,
  });
  const firstPage = 1;

  const nextPage = Math.min(page + 1, totalPages);

  const prevPage = Math.max(page - 1, firstPage);

  const arr = new Array(totalPages + 2);

  return (
    <div className="flex items-center justify-center gap-2 mt-4">
      {/* Item {fromItem}-{toItem} */}
      {[...arr].map((_, index) => {
        //_는 무시하고 index만 사용함
        const { page, disabled, current } = getPageItem(index);
        if (page === "previous") {
          return (
            <PaginationLink page={prevPage} disabled={disabled} key={page}>
              {`<`}
            </PaginationLink>
          );
        }

        if (page === "gap") {
          return <span key={index}>...</span>;
        }
        if (page === "next") {
          return (
            <PaginationLink page={nextPage} disabled={disabled} key={page}>
              {`>`}
            </PaginationLink>
          );
        }
        return (
          <PaginationLink active={current} page={page} key={index} perPage={perPage}>
            {page}
          </PaginationLink>
        );
      })}
    </div>
  );
};

export default Pagination;
