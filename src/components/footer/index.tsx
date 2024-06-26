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
        <a href="/">Logo</a>
      </div>
    </footer>
  );
};

export default Footer;
