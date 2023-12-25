"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

import { AuthButton, Loader } from "@/components";

const Home: NextPage = () => {
  const { isLoading, user } = useUser();

  return (
    <main className="mx-auto grid min-h-screen max-w-7xl grid-cols-2 gap-5 p-20">
      <section className="flex flex-col items-center justify-center gap-9">
        <h1 className="text-center text-4xl">Welcome to the Loo explorer</h1>
        {isLoading && <Loader className="h-10 w-10 text-purple-700" />}
        {!isLoading && user && (
          <Link
            href="/" // TODO: add page link when created
            className="rounded-lg border border-purple-900 bg-purple-700 px-4 py-2 font-semibold text-white"
          >
            Start Exploring
          </Link>
        )}
        {!isLoading && !user && (
          <AuthButton type="login" className="px-4 py-2 text-xl" />
        )}
      </section>
      <section className="flex items-center justify-center">
        <Image
          src="/img/loo.png"
          alt="loo"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 35vw"
          width={800}
          height={490}
          priority
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      </section>
    </main>
  );
};

export default Home;
