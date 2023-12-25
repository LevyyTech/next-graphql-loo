import { UserProfile } from "@auth0/nextjs-auth0/client";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import React, { FC } from "react";

type Props = {
  user: UserProfile;
};

export const Profile: FC<Props> = ({ user }) => {
  return (
    <div className="flex items-center gap-1">
      <UserCircleIcon className="h-6 w-6" />{" "}
      <span>Hello, {user.nickname || user.name || user.email}</span>
    </div>
  );
};
