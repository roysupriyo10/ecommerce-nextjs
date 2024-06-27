"use server";

import { getUser } from "@/auth";
import Link from "next/link";
import { FC } from "react";
import Profile from "./Profile";

const ProfileButton: FC = async () => {
  const user = await getUser();

  return user ? (
    <Profile user={user} />
  ) : (
    <Link href={"/login"}>
      <button
        className="
          px-10
          py-2
          rounded-full
          border-[1px]
          border-black/30
          transition-all
          duration-300
          ease-in-out
          hover:bg-gray-200
        "
      >
        Login
      </button>
    </Link>
  );
};

export default ProfileButton;
