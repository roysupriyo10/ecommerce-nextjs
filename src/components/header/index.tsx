"use server";

import { FC } from "react";
import { navbarLinks } from "@/constants";
import NavActions from "../nav-actions";
import MobileNav from "./Mobile";
import { TransitionLink } from "@/shared";

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
          <TransitionLink href="/">Logo</TransitionLink>
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
              <TransitionLink key={pathname} href={pathname}>
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
              </TransitionLink>
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
