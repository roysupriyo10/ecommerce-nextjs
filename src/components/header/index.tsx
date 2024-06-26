import { FC } from "react";
import MobileNav from "./Mobile";
import { navbarLinks } from "@/constants";
import { ImgCartIcon } from "@/icons";
import CartButton from "../cart-button";
import Link from "next/link";

const Header: FC = () => {
  return (
    <header
      className="
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
          relative
        "
      >
        <div
          className="
            grow
          "
        >
          <a href="/">Logo</a>
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
              <a key={pathname} href={pathname}>
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
              </a>
            ))}
          </div>
          <div
            className="
              flex
              items-center
              gap-x-4
            "
          >
            <a href={"/register"}>
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
            </a>
            <CartButton />
          </div>
        </nav>
        <MobileNav />
      </div>
    </header>
  );
};

export default Header;
