"use client"

import { registerUserFormAction } from "@/app/(auth)/actions";
import { FormSubmitButton } from "@/components";
import { FormInput, PasswordInput } from "@/shared";
import Link from "next/link";
import { FC } from "react";
import { useFormState } from "react-dom";
import { FormContextType } from "@/@types";
import { FormContext } from "@/app/(auth)/_context";

const RegisterForm: FC = () => {
  const [formState, action] = useFormState<FormContextType, FormData>(registerUserFormAction, {
    message: "",
    name: ""
  })
  return (
    <FormContext.Provider value={formState} >
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
            name="name"
            type="text"
            placeholder="Enter your name here"
            withLabel
            labelName="Name"
          />
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
          <PasswordInput
            name="confirm-password"
            type="password"
            placeholder="Enter your password again"
            withLabel
            labelName="Confirm password"
          />
        </div>
        {
          formState.name === "form" && (
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
          )
        }
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
              Register
          </FormSubmitButton>
          <Link
            className="
              text-center
              hover:underline
            "
            href={"/login"}
          >
            Already registered? Login
          </Link>
        </div>
      </form>
    </FormContext.Provider>
  );
}

export default RegisterForm;
