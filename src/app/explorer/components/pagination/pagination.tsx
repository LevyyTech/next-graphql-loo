"use client";

import { usePathname, useSearchParams } from "next/navigation";
import React, { FC } from "react";

import { PaginationArrow } from "./pagination-arrow";

type Props = {
  totalPages: number;
};

export const Pagination: FC<Props> = ({ totalPages }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const currentPage = Number(searchParams.get("page")) || 1;

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());

    return `${pathname}?${params.toString()}`;
  };

  return (
    <section className="flex items-center self-center">
      <PaginationArrow
        direction="left"
        href={createPageURL(currentPage - 1)}
        isDisabled={currentPage <= 1}
      />

      <span>
        Page {currentPage} of {totalPages}
      </span>

      <PaginationArrow
        direction="right"
        href={createPageURL(currentPage + 1)}
        isDisabled={currentPage >= totalPages}
      />
    </section>
  );
};
