import { FC } from "react";

type ImgDownChevronIconProps = {
  width?: number;
  height?: number;
  fill?: string;
  className?: string;
};

export const ImgDownChevronIcon: FC<ImgDownChevronIconProps> = ({
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
        d="M6 9L12 15L18 9"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
