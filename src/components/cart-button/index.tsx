import { ImgCartIcon } from "@/icons";
import Link from "next/link";
import { FC } from "react";

const CartButton: FC = () => {
  return (
    <Link
      href={"/cart"}
    >
      <button>
        <ImgCartIcon fill="black" width={30} height={30} />
      </button>
    </Link>
  );
};

export default CartButton;
