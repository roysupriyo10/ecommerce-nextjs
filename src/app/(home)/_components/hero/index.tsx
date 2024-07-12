import { HeroImage } from "@/assets";
import { LinkButton } from "@/components";
import Image from "next/image";
import { FC } from "react";

const Hero: FC = () => {
  return (
    <section
      className="
        flex
        flex-col
        grow
        max-sm:items-center
        max-sm:justify-center
        sm:grid
        sm:grid-cols-8
        min-h-[400px]
        sm:min-h-[90vh]
        gap-4
      "
    >
      <div
        className="
          col-span-5
          flex
          max-sm:text-center
          flex-col
          gap-y-8
          items-start
          max-sm:items-center
          justify-center
        "
      >
        <h3
          className="
            uppercase
            font-light
            text-sm
            lg:text-lg
            xl:text-2xl
          "
        >
          NEW ARRIVALS ONLY
        </h3>
        <h1
          className="
            font-medium
            text-2xl
            sm:text-3xl
            md:text-4xl
            lg:text-5xl
            xl:text-7xl
          "
        >
          New collections for everyone
        </h1>
        <LinkButton title="Latest Collection" scrollToId="new-collections" />
      </div>
      <div
        className="
          max-h-full
          col-span-3
          max-w-full
          relative
          hidden
          sm:block
        "
      >
        <Image
          alt="hero image"
          className="
            h-full
            w-full
          "
          src={HeroImage}
        />
      </div>
    </section>
  );
};

export default Hero;
