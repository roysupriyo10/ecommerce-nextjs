"use client";

import { FormContextType } from "@/@types";
import { FormContext } from "@/app/(auth)/_context";
import { loginUserFormAction } from "@/app/(auth)/_actions";
import { FormSubmitButton } from "@/components";
import { FormInput, PasswordInput, TransitionLink } from "@/shared";
import { FC } from "react";
import { useFormState } from "react-dom";

const LoginForm: FC = () => {
  const [formState, action] = useFormState<FormContextType, FormData>(
    loginUserFormAction,
    {
      message: "",
      name: "",
    },
  );
  return (
    <FormContext.Provider value={formState}>
      <form
        action={action}
        className="
          flex
          flex-col
          gap-y-6
        "
      >
        <div
          className="
            flex
            flex-col
            gap-y-8
          "
        >
          <FormInput
            name="email"
            type="email"
            placeholder="Enter your email here"
            withLabel
            labelName="Email"
          />
          <PasswordInput
            name="password"
            type="password"
            placeholder="Enter your password here"
            withLabel
            labelName="Password"
          />
        </div>
        {formState.name === "form" && (
          <span
            className="
                text-[#f23645]
                text-center
                w-full
                font-light
                text-sm
              "
          >
            {formState.message}
          </span>
        )}
        <div
          className="
            flex
            items-center
            justify-center
            w-full
            gap-x-4
          "
        >
          <FormSubmitButton
            className="
              bg-black
              text-white
              hover:bg-black/90
              py-2.5
              px-6
              transition
            "
            fallback={"Please wait..."}
          >
            Login
          </FormSubmitButton>
          <TransitionLink
            className="
              text-center
              hover:underline
            "
            href={"/register"}
          >
            Register
          </TransitionLink>
        </div>
      </form>
    </FormContext.Provider>
  );
};

export default LoginForm;
