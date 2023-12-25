import { NextPage } from "next";
import React, { Suspense } from "react";

import { Loader } from "@/components";

import { LooDetails, LooList, Pagination } from "./components";
import { getLoos } from "./services";

type Props = {
  searchParams?: {
    page?: string;
    loo?: string;
  };
};

const Explorer: NextPage<Props> = async ({ searchParams }) => {
  const currentPage = Number(searchParams?.page) || 1;
  const looId = searchParams?.loo || "";

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
      <section className="order-first flex flex-col md:order-2">
        <Suspense
          key={looId}
          fallback={
            <Loader className="mt-5 h-10 w-10 self-center text-purple-700" />
          }
        >
          <LooDetails id={looId} />
        </Suspense>
      </section>
    </>
  );
};

export default Explorer;
