import { DetailedHTMLProps, FC, InputHTMLAttributes, useMemo } from "react";

type FormInputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  inputClassName?: string;
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
  inputClassName,
  labelClassName,
  labelName,
  ...rest
}) => {
  console.log();
  const input = (
    <input
      type={type}
      className={`
        bg-transparent
        border-bg-black/20
        border-b-[1px]
        py-2
        placeholder:text-sm
        w-full
        ${inputClassName}
      `}
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
        <span
          className="
            text-lg
            font-medium
          "
        >
          {labelName}
        </span>
        {input}
      </label>
    );
  } else {
    return input;
  }
};

export default FormInput;
