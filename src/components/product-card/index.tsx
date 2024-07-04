import Image from "next/image";
import { FC } from "react";
import { IProduct } from "@/@types/model";
import { FallbackProductImage } from "@/assets";
import Link from "next/link";

type ProductCardProps = {
  product: IProduct;
};

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  return (
    <Link
      href={`/product/${product._id}`}
      className="
        flex
        flex-col
        items-start
        hover:scale-[102%]
        transition-all
        ease-in-out
        duration-200
        cursor-pointer
        gap-y-3
      "
    >
      <div
        className="
          flex-[10]
          max-h-full
          max-w-full
        "
      >
        <Image
          priority
          width={0}
          sizes="100vw"
          height={0}
          className="
            w-full
            h-full
            aspect-[3.2/4]
            object-cover
          "
          alt={`${product.name} image`}
          src={product.image || FallbackProductImage}
        />
      </div>
      <div
        className="
          flex-[1]
          flex
          flex-col
          gap-y-1
        "
      >
        <span
          className="
            font-light
          "
        >
          {product.name}
        </span>
        <div
          className="
            flex
            items-center
            gap-x-6
            text-lg
          "
        >
          <span
            className="
              font-bold
            "
          >
            ${product.new_price}
          </span>
          <span
            className="
              line-through
              text-gray-400
            "
          >
            ${product.old_price}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
