"use client";

import { ImgLeftArrowIcon } from "@/icons";
import { Button } from "@/shared";
import { useRouter } from "next/navigation";
import { FC } from "react";

type BackButtonProps = {
  className?: string;
};

const BackButton: FC<BackButtonProps> = ({ className = "" }) => {
  const router = useRouter();

  return (
    <button
      className={`
        flex
        items-center
        self-start
        justify-self-start
        gap-x-2
        ${className}
      `}
      onClick={() => router.back()}
    >
      <ImgLeftArrowIcon fill="black" />
      <span>Go back</span>
    </button>
  );
};

export default BackButton;
