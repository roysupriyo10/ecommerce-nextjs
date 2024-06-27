"use client";

import { IUser } from "@/@types/model";
import { ImgDownChevronIcon } from "@/icons";
import { FC, useState } from "react";

type ProfileProps = {
  user: IUser;
};

const Profile: FC<ProfileProps> = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      onMouseOver={() => setIsOpen(true)}
      onMouseOut={() => setIsOpen(false)}
      className={`
        px-10
        py-2
        rounded-full
        border-[1px]
        border-black/30
        transition-all
        duration-300
        ease-in-out
        hover:bg-gray-200
        relative
        flex
        items-center
        gap-x-2
        cursor-pointer
      `}
    >
      <span>{user.name}</span>
      <span
        className={`
          transition-all
          duration-500
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
          w-[400px]
          ease-in-out
          flex
          flex-col
          h-[600px]
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
          <form action={""}>
            <button>Logout</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
