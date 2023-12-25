"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { AuthButton, Profile } from ".";

export const Header = () => {
  const { isLoading, user } = useUser();

  return (
    <header className="flex min-h-[74px] items-center justify-between border-b border-b-white p-5">
      <Link href="/">
        <Image
          src="/vercel.svg"
          alt="Vercel Logo"
          className="dark:invert"
          width={100}
          height={24}
          priority
        />
      </Link>
      {!isLoading && (
        <nav className="flex items-center gap-3">
          {user ? (
            <>
              <Profile user={user} />
              <AuthButton type="logout" />
            </>
          ) : (
            <>
              <AuthButton type="login" />
              <AuthButton type="signup" />
            </>
          )}
        </nav>
      )}
    </header>
  );
};
