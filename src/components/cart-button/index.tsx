import { ImgCartIcon } from "@/icons";
import { FC } from "react";

const CartButton: FC = () => {
  return (
    <button>
      <ImgCartIcon fill="black" width={30} height={30} />
    </button>
  );
};

export default CartButton;
