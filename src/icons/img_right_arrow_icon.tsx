import { FC } from "react";

type ImgRightArrowIconProps = {
  width?: number;
  height?: number;
  fill?: string;
  className?: string;
};

export const ImgRightArrowIcon: FC<ImgRightArrowIconProps> = ({
  width = 24,
  height = 24,
  fill = "#404040",
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
        d="M4 12H20M20 12L14 6M20 12L14 18"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
