import { FC } from "react";
import MobileNav from "./Mobile";
import { navbarLinks } from "@/constants";
import CartButton from "../cart-button";
import Link from "next/link";
import ProfileButton from "../profile-button";

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
          <div
            className="
              flex
              items-center
              gap-x-4
            "
          >
            <ProfileButton />
            <CartButton />
          </div>
        </nav>
        <MobileNav />
      </div>
    </header>
  );
};

export default Header;
