"use server";

import { ImgCartIcon } from "@/icons";
import { getCart } from "@/services";
import { TransitionLink } from "@/shared";
import { FC } from "react";

const CartButton: FC = async () => {
  const cart = await getCart();

  return (
    <TransitionLink
      className="
        relative
        rounded-full
        hover:bg-gray-300
        transition-all
        duration-200
        ease-in-out
        p-2
      "
      href={"/cart"}
    >
      {cart && (
        <span
          className="
            absolute
            top-0
            right-0
            text-[10px]
            text-white
            flex
            w-[16px]
            h-[16px]
            items-center
            justify-center
            p-[1px]
            rounded-full
            bg-red-800
          "
        >
          {cart.items.length}
        </span>
      )}
      <ImgCartIcon fill="black" width={24} height={24} />
    </TransitionLink>
  );
};

export default CartButton;
