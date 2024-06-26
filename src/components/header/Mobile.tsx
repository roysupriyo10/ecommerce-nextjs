"use client";

import { navbarLinks } from "@/constants/navbarLinks";
import { ImgCartIcon, ImgCloseIcon, ImgHamburgerIcon } from "@/icons";
import { FC, useState } from "react";

const MobileNav: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className="
          flex
          sm:hidden
        "
      >
        {isOpen ? (
          <ImgCloseIcon fill="black" width={24} height={24} />
        ) : (
          <ImgHamburgerIcon fill="black" width={24} height={24} />
        )}
      </button>
      <div
        className={`
          absolute
          sm:hidden
          ${
            isOpen
              ? `
                opacity-100
                pointer-events-auto
                top-[calc(100%_+_30px)]
              `
              : `
                top-[calc(-100%_-_24px)]
                opacity-0
                pointer-events-none
              `
          }
          transition-all
          bg-gray-100
          duration-700
          ease-in-out
          right-0
          w-[80%]
          p-4
          gap-y-4
          rounded-lg
          flex
          shadow-xl
          items-start
          flex-col
        `}
      >
        {navbarLinks.map(({ displayText, pathname }) => (
          <a key={pathname} href={pathname}>
            <span
              className="
                link-underline
                link-underline-black
                py-2
              "
            >
              {displayText}
            </span>
          </a>
        ))}
        <div
          className="
            flex
            items-center
            w-full
            gap-x-4
            justify-between
          "
        >
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
          <button>
            <ImgCartIcon fill="black" width={30} height={30} />
          </button>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
