import React, { FC } from "react";

import { cn } from "@/lib";

type Props = {
  type: "login" | "signup" | "logout";
  className?: string;
};

export const AuthButton: FC<Props> = ({ type, className }) => {
  const buttonConfig = getButtonConfig(type);

  if (!buttonConfig) {
    return null;
  }

  return (
    <a
      href={buttonConfig.href}
      className={cn(
        "rounded-lg border bg-transparent px-2 py-1 text-white",
        {
          "border-purple-900 bg-purple-700": type === "login",
        },
        className,
      )}
    >
      {buttonConfig.label}
    </a>
  );
};

const getButtonConfig = (type: Props["type"]) => {
  switch (type) {
    case "login":
      return { href: "/api/auth/login", label: "Log in" };
    case "signup":
      return { href: "/api/auth/signup", label: "Sign up" };
    case "logout":
      return { href: "/api/auth/logout", label: "Log out" };

    default:
      return null;
  }
};
