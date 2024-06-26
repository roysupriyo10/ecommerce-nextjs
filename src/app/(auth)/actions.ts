'use server';

import { FormContextType, JwtExpiry } from "@/@types";
import { RegistrationFormData } from '@/validation';
import { registerUser } from '@/services';
import { fromErrorToFormState, generateJwtToken } from "@/utils";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export const registerUserFormAction = async (_state: FormContextType, formData: FormData): Promise<FormContextType>  => {
  try {
  const params = RegistrationFormData.parse({
    email: formData.get("email"),
    password: formData.get("password"),
    name: formData.get("name"),
    confirmPassword: formData.get("confirm-password")
  })

  const user = await registerUser({
    name: params.name,
    password: params.password,
    email: params.email
  })

  const user_access_token = generateJwtToken({
    id: user._id.toString(),
    email: user.email
  }, "1d")

  cookies().set("user_access_token", user_access_token, {
    httpOnly: true,
  })

  if (user) {
    revalidatePath("/")
  }
  
  return {
    message: "Please give me a valid name",
    name: "name"
  }
    
  }
  catch (error) {
    console.error(error);
    const errorState = fromErrorToFormState(error);

    console.log(errorState);

    return errorState;
  }
}
