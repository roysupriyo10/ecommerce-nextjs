"use server";

import { USER_ACCESS_TOKEN_COOKIE } from "@/constants";
import { cookies } from "next/headers";

export const logoutUserFormAction = async () => {
  cookies().delete(USER_ACCESS_TOKEN_COOKIE);
};
