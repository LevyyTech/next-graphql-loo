"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { FC } from "react";

import { LooBase } from "../types";

type Props = {
  loos: LooBase[];
};

export const LooList: FC<Props> = ({ loos }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSelectLoo = (id: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("loo", id);

    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <ul className="flex flex-col gap-3">
      {loos.map(({ area, id, name }) => (
        <li key={id} onClick={() => handleSelectLoo(id)}>
          <article className="flex cursor-pointer items-center justify-between gap-3 rounded-lg border border-stone-500 px-2 py-1 hover:shadow-md hover:shadow-stone-500">
            <header className="flex flex-col">
              <h4>{name}</h4>
              {!!area.length && (
                <span className="text-sm text-stone-500">{area[0].name}</span>
              )}
            </header>
          </article>
        </li>
      ))}
    </ul>
  );
};
