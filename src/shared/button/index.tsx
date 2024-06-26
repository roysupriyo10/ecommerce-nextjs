import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from "react";

type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const Button: FC<ButtonProps> = ({ className, ...rest }) => {
  return (
    <button
      className={`
        px-4
        py-2.5
        rounded-full
        border-[1px]
        ${className}
      `}
      {...rest}
    />
  );
};

export default Button;
