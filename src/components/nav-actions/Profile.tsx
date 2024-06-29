"use client";

import { logoutUserFormAction } from "@/app/(auth)/_actions";
import { ImgDownChevronIcon, ImgUserIcon } from "@/icons";
import { FC, useState } from "react";

type ProfileProps = {
  name: string;
};

const Profile: FC<ProfileProps> = ({ name }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      onMouseOver={() => setIsOpen(true)}
      onMouseOut={() => setIsOpen(false)}
      className={`
        py-2
        transition-all
        duration-300
        ease-in-out
        relative
        flex
        items-center
        gap-x-2
        cursor-pointer
      `}
    >
      <span
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <ImgUserIcon fill="black" width={24} height={24} />
      </span>
      <span
        className="
          max-sm:hidden
        "
      >
        {name}
      </span>
      <span
        className={`
          transition-all
          duration-500
          max-sm:hidden
          ease-in-out
          ${
            isOpen
              ? `
                rotate-180
              `
              : `
              `
          }
        `}
      >
        <ImgDownChevronIcon fill="black" width={24} height={24} />
      </span>
      <div
        className={`
          z-[9999]
          ${
            isOpen
              ? `
                top-full
                opacity-100
                pointer-events-auto
              `
              : `
                -top-full
                pointer-events-none
                opacity-0
              `
          }
          absolute
          transition-all
          duration-500
          right-0
          w-[200px]
          ease-in-out
          flex
          flex-col
          h-[200px]
        `}
      >
        <div
          className={`
            mt-4
            bg-gray-100
            cursor-default
            border-[1px]
            border-black/30
            flex
            flex-col
            grow
            rounded-3xl
            py-5
            px-10
          `}
        >
          <form action={logoutUserFormAction}>
            <button>Logout</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
