"use client";

import { FormContext } from "@/app/(auth)/_context";
import { DetailedHTMLProps, FC, InputHTMLAttributes, useContext } from "react";

type FormInputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  inputClassName?: string;
  errorMessage?: string;
} & (
    | {
        withLabel?: false | undefined;
        labelClassName?: never;
        labelName?: never;
      }
    | {
        withLabel: true;
        labelName: string;
        labelClassName?: string;
      }
  );

const FormInput: FC<FormInputProps> = ({
  className,
  type = "text",
  withLabel,
  inputClassName = "",
  errorMessage,
  labelClassName = "",
  labelName,
  name,
  ...rest
}) => {
  if (FormContext === undefined) {
    throw new Error("FormContext is undefined");
  }
  const { name: errorName, message } = useContext(FormContext);

  const input = (
    <input
      type={type}
      className={`
        bg-transparent
        border-bg-black/20
        outline-none
        border-b-[1px]
        py-2
        placeholder:text-sm
        w-full
        ${inputClassName}
      `}
      name={name}
      {...rest}
    />
  );

  if (withLabel) {
    return (
      <label
        className={`
          flex
          flex-col
          items-start
          gap-y-2
          ${labelClassName}
        `}
      >
        <div
          className="
            flex
            max-sm:flex-col
            items-center
            w-full
            justify-between
          "
        >
          <span
            style={
              name === errorName
                ? {
                    color: "#f23645",
                  }
                : {}
            }
            className={`
              text-lg
              font-medium
            `}
          >
            {labelName}
          </span>
          {name === errorName && (
            <span
              style={{
                color: "#f23645",
              }}
              className="
                font-light
                text-sm
              "
            >
              {message}
            </span>
          )}
        </div>
        {input}
      </label>
    );
  } else {
    return input;
  }
};

export default FormInput;
