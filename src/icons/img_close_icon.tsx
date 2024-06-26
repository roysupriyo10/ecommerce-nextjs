import { FC } from "react";

type ImgCloseIconProps = {
  fill?: string;
  width?: number;
  height?: number;
  className?: string;
};

export const ImgCloseIcon: FC<ImgCloseIconProps> = ({
  width = "18",
  height = "18",
  fill = "#404040",
  className = "",
}) => {
  return (
    <svg
      width={className ? undefined : width}
      height={className ? undefined : height}
      className={className}
      viewBox="0 0 13 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.60095 11.5196L0.981445 10.9001L5.88145 6.00009L0.981445 1.10009L1.60095 0.480591L6.50095 5.38059L11.4009 0.480591L12.0204 1.10009L7.12045 6.00009L12.0204 10.9001L11.4009 11.5196L6.50095 6.61959L1.60095 11.5196Z"
        fill={fill}
      />
    </svg>
  );
};
