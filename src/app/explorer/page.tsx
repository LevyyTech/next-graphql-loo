import { NextPage } from "next";
import React from "react";

import { LooList, Pagination } from "./components";
import { getLoos } from "./services";

type Props = {
  searchParams?: {
    page?: string;
    loo?: string;
  };
};

const Explorer: NextPage<Props> = async ({ searchParams }) => {
  const currentPage = Number(searchParams?.page) || 1;
  const looId = searchParams?.loo || ""; // TODO: pass into the second column

  const loosData = await getLoos(currentPage);

  return (
    <>
      <section className="flex flex-col gap-4">
        <h1 className="text-3xl font-semibold">Loo explorer</h1>
        {!!loosData && !!loosData.loos.length ? (
          <>
            <LooList loos={loosData.loos} />
            <Pagination totalPages={loosData.pagination.pages} />
          </>
        ) : (
          <p>No loos were found</p>
        )}
      </section>
      <section className="flex flex-col"></section>
    </>
  );
};

export default Explorer;
