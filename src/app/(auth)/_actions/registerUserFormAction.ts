"use server";

import { FormContextType } from "@/@types";
import { cookieConfig, USER_ACCESS_TOKEN_COOKIE } from "@/constants";
import { registerUser } from "@/services";
import { fromErrorToFormState, generateJwtToken } from "@/utils";
import { RegistrationFormData } from "@/validation";
import { cookies } from "next/headers";

export const registerUserFormAction = async (
  _state: FormContextType,
  formData: FormData,
): Promise<FormContextType> => {
  try {
    const params = RegistrationFormData.parse({
      email: formData.get("email"),
      password: formData.get("password"),
      name: formData.get("name"),
      confirmPassword: formData.get("confirm-password"),
    });

    const user = await registerUser({
      name: params.name,
      password: params.password,
      email: params.email,
    });

    const user_access_token = generateJwtToken(
      {
        id: user._id.toString(),
        email: user.email,
      },
      "1d",
    );

    cookies().set(USER_ACCESS_TOKEN_COOKIE, user_access_token, {
      ...cookieConfig,
    });

    return {
      message: "",
      name: "",
    };
  } catch (error) {
    const errorState = fromErrorToFormState(error);

    return errorState;
  }
};
