import Image from "next/image";
import { FC } from "react";
import { ExclusiveImage } from "@/assets";
import { Button } from "@/shared";
import { ImgRightArrowIcon } from "@/icons";
import { LinkButton } from "@/components";

const Exclusive: FC = () => {
  return (
    <section
      className="
        flex
        flex-col
        sm:grid
        sm:gap-4
        sm:grid-cols-2
        border-[1px]
        border-black
        px-10
        min-h-[300px]
        max-h-[600px]
        justify-center
        items-center
        max-sm:text-center
      "
    >
      <div
        className="
          flex
          flex-col
          gap-y-8
          items-center
          sm:items-start
          justify-center
        "
      >
        <h2
          className="
            text-2xl
            sm:text-3xl
            lg:text-4xl
            md:text-5xl
            xl:text-6xl
            font-medium
          "
        >
          Exclusive Offers For You
        </h2>
        <h4
          className="
            text-2xl
          "
        >
          ONLY ON BEST SELLER PRODUCTS
        </h4>
        <LinkButton title="Check now" />
      </div>
      <div
        className="
          hidden
          sm:flex
          items-center
          justify-center
        "
      >
        <Image
          className="
            object-cover
            h-full
          "
          alt="exclusive offers image"
          src={ExclusiveImage}
        />
      </div>
    </section>
  );
};

export default Exclusive;
