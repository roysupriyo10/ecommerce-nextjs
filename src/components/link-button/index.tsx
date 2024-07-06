"use client";

import { ImgRightArrowIcon } from "@/icons";
import { Button, TransitionLink } from "@/shared";
import { FC, useState } from "react";

type LinkButtonProps = {
  title: string;
  scrollToId?: string;
  showArrow?: boolean;
} & (
  | {
      withLink?: false | undefined;
      linkPathname?: never;
    }
  | {
      withLink: true;
      linkPathname: string;
    }
);

const LinkButton: FC<LinkButtonProps> = ({
  withLink,
  linkPathname,
  title,
  scrollToId,
  showArrow = true,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const button = (
    <Button
      onClick={() => {
        if (scrollToId) {
          const element = document.getElementById(scrollToId);

          element?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }}
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
      className="
        flex
        items-center
        gap-x-2
        bg-red-800
      "
    >
      <span
        className="
          text-white
        "
      >
        {title}
      </span>
      {showArrow && (
        <span
          className={`
            transition-all
            duration-200
            ease-in-out
            ${
              isHovered
                ? ``
                : `
                  rotate-[-45deg]
                `
            }
          `}
        >
          <ImgRightArrowIcon fill="white" />
        </span>
      )}
    </Button>
  );

  if (withLink) {
    return <TransitionLink href={linkPathname}>{button}</TransitionLink>;
  } else {
    return button;
  }
};

export default LinkButton;
