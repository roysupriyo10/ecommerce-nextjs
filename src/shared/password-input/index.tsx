"use client";

import { FormContext } from "@/app/(auth)/_context";
import { ImgShowPasswordIcon } from "@/icons";
import { FormException } from "@/utils/classes";
import {
  DetailedHTMLProps,
  FC,
  InputHTMLAttributes,
  useContext,
  useState,
} from "react";

type PasswordInputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  inputClassName?: string;
} & {
  type: "password";
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

const PasswordInput: FC<PasswordInputProps> = ({
  className,
  type = "password",
  withLabel,
  inputClassName,
  labelClassName,
  labelName,
  name,
  ...rest
}) => {
  if (FormContext === undefined) {
    throw new FormException({
      name: "form",
      message: "FormContext is undefined",
      statusCode: 500,
    });
  }

  const { name: errorName, message } = useContext(FormContext);

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const input = (
    <div
      className="
        flex
        w-full
        items-center
        gap-x-4
      "
    >
      <input
        type={showPassword ? "text" : type}
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
      <button
        type="button"
        onClick={() => {
          setShowPassword(!showPassword);
        }}
      >
        <ImgShowPasswordIcon
          width={24}
          height={24}
          fill="black"
          slash={showPassword}
        />
      </button>
    </div>
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

export default PasswordInput;
