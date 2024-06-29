"use server";

import { FC } from "react";
import { navbarLinks } from "@/constants";
import Link from "next/link";
import NavActions from "../nav-actions";
import MobileNav from "./Mobile";

const Header: FC = () => {
  return (
    <header
      className="
        z-[1]
        px-4
        sm:px-6
        md:px-8
        lg:px-20
        xl:px-40
        border-b-[1px]
        border-gray-300
        bg-gray-100
        py-6
      "
    >
      <div
        className="
          flex
          items-center
          justify-between
          gap-x-4
        "
      >
        <div
          className="
            grow
          "
        >
          <Link href="/">Logo</Link>
        </div>
        <nav
          className="
            hidden
            sm:flex
            grow
            items-center
            justify-between
          "
        >
          <div
            className="
              flex
              items-center
              gap-x-8
            "
          >
            {navbarLinks.map(({ displayText, pathname }) => (
              <Link key={pathname} href={pathname}>
                <span
                  className="
                    link-underline
                    link-underline-black
                    py-2
                    font-semibold
                  "
                >
                  {displayText}
                </span>
              </Link>
            ))}
          </div>
        </nav>
        <NavActions />
        <MobileNav />
      </div>
    </header>
  );
};

export default Header;
