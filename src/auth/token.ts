import { CustomJwtPayload } from "@/@types";
import { USER_ACCESS_TOKEN_COOKIE } from "@/constants";
import { verify } from "jsonwebtoken";
import { cookies } from "next/headers";

export function token() {
  const token = cookies().get(USER_ACCESS_TOKEN_COOKIE);

  if (!token || !token.value) return null;

  const decoded = verify(
    token.value,
    process.env.JWT_SECRET_TOKEN as string,
  ) as CustomJwtPayload;

  return decoded;
}
