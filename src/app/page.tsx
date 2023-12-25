"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

import { AuthButton, Loader } from "@/components";

const Home: NextPage = () => {
  const { isLoading, user } = useUser();

  return (
    <main className="mx-auto grid min-h-screen max-w-7xl grid-cols-1 grid-rows-2 gap-5 p-4 md:grid-cols-2 md:grid-rows-1 md:p-10 lg:p-20">
      <section className="flex flex-col items-center justify-start gap-9 md:justify-center">
        <h1 className="text-center text-4xl md:text-2xl lg:text-4xl">
          Welcome to the Loo explorer
        </h1>
        {isLoading && <Loader className="h-10 w-10 text-purple-700" />}
        {!isLoading && user && (
          <Link
            href="/explorer"
            className="rounded-lg border border-purple-900 bg-purple-700 px-4 py-2 font-semibold text-white"
          >
            Start Exploring
          </Link>
        )}
        {!isLoading && !user && (
          <AuthButton type="login" className="px-4 py-2 text-xl" />
        )}
      </section>
      <section className="order-first flex items-center justify-center md:order-2">
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
