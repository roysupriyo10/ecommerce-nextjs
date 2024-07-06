"use client";

import { ImgRightArrowIcon } from "@/icons";
import { TransitionLink } from "@/shared";
import { FC, useState } from "react";

const ShopNowButton: FC = () => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  return (
    <TransitionLink
      href={"/"}
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
      className="
        flex
        items-center
        gap-x-1
        link-underline
        link-underline-black
        py-1
      "
    >
      <span>Shop now</span>
      <span
        className={`
          transition-all
          duration-200
          ease-in-out
          ${isHovered ? `` : `rotate-[-45deg]`}
        `}
      >
        <ImgRightArrowIcon fill="black" width={16} height={16} />
      </span>
    </TransitionLink>
  );
};

export default ShopNowButton;
