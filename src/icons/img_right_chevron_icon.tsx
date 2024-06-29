import { FC } from "react";

type ImgRightChevronIconProps = {
  width?: number;
  height?: number;
  fill?: string;
  className?: string;
};

export const ImgRightChevronIcon: FC<ImgRightChevronIconProps> = ({
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
        d="M9 18L15 12L9 6"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
