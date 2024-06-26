import Image from "next/image";
import { FC } from "react";
import { IProduct } from "../../@types/model";

type ProductCardProps = {
  imageSrc: string;
  product: IProduct;
};

const ProductCard: FC<ProductCardProps> = ({ imageSrc }) => {
  return (
    <div
      className="
        flex
        flex-col
        items-start
      "
    >
      <div
        className="
          flex-[10]
        "
      >
        <Image
          className="
            max-w-full
            max-h-full
          "
          width={0}
          height={0}
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
          alt={``}
          src={imageSrc}
        />
      </div>
      <div
        className="
          flex-[1]
        "
      ></div>
    </div>
  );
};

export default ProductCard;
