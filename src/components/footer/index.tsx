import { socials } from "@/constants";
import Link from "next/link";
import { FC } from "react";

const Footer: FC = () => {
  return (
    <footer
      className="
        px-4
        sm:px-6
        md:px-8
        lg:px-20
        py-6
        border-t-[1px]
        border-gray-300
        xl:px-40
        mt-12
        grid
        grid-cols-12
      "
    >
      <div
        className="
          col-span-3
        "
      >
        <Link href="/">Logo</Link>
      </div>
      <div
        className="
          flex
          flex-col
          gap-y-4
          col-span-3
        "
      >
        <h4
          className="
            text-lg
            font-medium
            text-gray-500
          "
        >
          Socials
        </h4>
        <div
          className="
            flex
            flex-col
            gap-y-1
          "
        >
          {socials.map(({ url, displayText, icon }) => (
            <Link
              key={url}
              className="
                text-gray-700
                hover:underline
                flex
                items-center
                gap-x-1
              "
              href={url}
              target="_blank"
            >
              {icon}
              <span>{displayText}</span>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
