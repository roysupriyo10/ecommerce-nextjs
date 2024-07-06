"use client";

import { navbarLinks } from "@/constants/navbarLinks";
import { ImgCloseIcon, ImgHamburgerIcon } from "@/icons";
import { TransitionLink } from "@/shared";
import { FC, useState } from "react";

const MobileNav: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div
      className="
        relative
      "
    >
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
          right-0
          z-[9999]
          w-[200px]
          sm:hidden
          ${
            isOpen
              ? `
                opacity-100
                pointer-events-auto
                top-[calc(100%_+_36px)]
              `
              : `
                top-[calc(-100%_-_30px)]
                opacity-0
                pointer-events-none
              `
          }
          transition-all
          bg-gray-100
          duration-700
          ease-in-out
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
          <TransitionLink
            onClick={() => {
              setIsOpen(false);
            }}
            key={pathname}
            href={pathname}
          >
            <span
              className="
                link-underline
                link-underline-black
                py-2
              "
            >
              {displayText}
            </span>
          </TransitionLink>
        ))}
      </div>
    </div>
  );
};

export default MobileNav;
