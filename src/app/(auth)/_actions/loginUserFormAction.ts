"use server";

import { FormContextType } from "@/@types";
import {
  cookieConfig,
  TEMP_CART_COOKIE,
  USER_ACCESS_TOKEN_COOKIE,
} from "@/constants";
import { createCart, getTemporaryCartDetails, loginUser } from "@/services";
import { fromErrorToFormState, generateJwtToken } from "@/utils";
import { LoginFormData } from "@/validation";
import { cookies } from "next/headers";

export const loginUserFormAction = async (
  _state: FormContextType,
  formData: FormData,
): Promise<FormContextType> => {
  try {
    const params = LoginFormData.parse({
      email: formData.get("email"),
      password: formData.get("password"),
    });

    const user = await loginUser({
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

    const tempCartCookie = cookies().get(TEMP_CART_COOKIE)?.value;

    const tempCart = tempCartCookie
      ? await getTemporaryCartDetails({
          cartId: tempCartCookie,
        })
      : null;

    if (tempCart) {
      await createCart({
        associatedUserId: user._id,
        items: tempCart.items,
      });
    }

    return {
      message: "",
      name: "",
    };
  } catch (error) {
    const errorState = fromErrorToFormState(error);

    return errorState;
  }
};
