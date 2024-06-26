import { FC } from "react";

type ImgHamburgerIconProps = {
  width?: number;
  height?: number;
  fill?: string;
  className?: string;
};

export const ImgHamburgerIcon: FC<ImgHamburgerIconProps> = ({
  fill = "#404040",
  width = 24,
  height = 24,
  className = "",
}) => {
  return (
    <svg
      width={className ? undefined : width}
      height={className ? undefined : height}
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 12H21M3 6H21M3 18H21"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
