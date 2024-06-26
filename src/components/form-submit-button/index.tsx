"use client";

import { ButtonHTMLAttributes, DetailedHTMLProps, FC, ReactNode } from "react";
import { useFormStatus } from "react-dom";

type FormSubmitButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  fallback: ReactNode;
};

const FormSubmitButton: FC<FormSubmitButtonProps> = ({
  fallback,
  children,
  ...rest
}) => {
  const { pending } = useFormStatus();
  return <button {...rest}>{pending ? fallback : children}</button>;
};

export default FormSubmitButton;
