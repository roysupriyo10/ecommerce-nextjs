import { NavbarLink } from "@/@types";
import { ImgHomeIcon, ImgRightChevronIcon } from "@/icons";
import Link from "next/link";
import { FC } from "react";

type BreadCrumbsProps = {
  className?: string;
  steps: NavbarLink[];
};

const BreadCrumbs: FC<BreadCrumbsProps> = ({ className = "", steps }) => {
  return (
    <nav
      className={`
        flex
        ${className}
      `}
      aria-label="Breadcrumb"
    >
      <ol
        className="
          inline-flex
          items-center
          space-x-1
          md:space-x-2
          rtl:space-x-reverse
        "
      >
        <li className="flex items-center">
          <ImgHomeIcon width={20} height={20} />
          <Link
            href="/"
            className="
              ms-1
              text-sm
              font-medium
              md:ms-2
            "
          >
            Home
          </Link>
        </li>
        {steps.map(({ displayText, pathname }) => (
          <li key={pathname}>
            <div
              className="
                flex
                items-center
              "
            >
              <ImgRightChevronIcon width={20} height={20} />
              <Link
                href={pathname}
                className="
                  ms-1
                  text-sm
                  font-medium
                  md:ms-2
                "
              >
                {displayText}
              </Link>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default BreadCrumbs;
