import { USER_ACCESS_TOKEN_COOKIE } from "@/constants";
import { cookies } from "next/headers";

export async function getAuthenticatedUser() {
  const token = cookies().get(USER_ACCESS_TOKEN_COOKIE);

  return token;
}
