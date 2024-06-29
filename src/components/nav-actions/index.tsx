"use server";

import { getUser } from "@/auth";
import Link from "next/link";
import { FC } from "react";
import Profile from "./Profile";
import CartButton from "../cart-button";

const NavActions: FC = async () => {
  const user = await getUser();

  return (
    <div
      className="
        flex
        items-center
        gap-x-4
      "
    >
      {user ? (
        <Profile name={user.name} />
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
      )}
      <CartButton />
    </div>
  );
};

export default NavActions;
