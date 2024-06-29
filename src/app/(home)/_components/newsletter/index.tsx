import { FC } from "react";
import { SubscribeEmail } from "@/components";

const NewsLetter: FC = () => {
  return (
    <section
      className="
        flex
        flex-col
        max-sm:text-center
        h-[400px]
        px-4
        py-8
        items-center
        justify-center
        gap-y-8
        border-[1px]
        border-black
      "
    >
      <h2
        className="
          text-xl
          sm:text-2xl
          lg:text-3xl
          md:text-4xl
          xl:text-5xl
          font-medium
        "
      >
        Get Exclusive Offers On Your Email
      </h2>
      <div
        className="
          w-full
          flex
          flex-col
          items-center
          justify-center
          gap-y-4
        "
      >
        <h4>Subscribe to our newsletter and stay updated</h4>
        <SubscribeEmail
          className="
            w-[80%]
            sm:w-[50%]
          "
        />
      </div>
    </section>
  );
};

export default NewsLetter;
