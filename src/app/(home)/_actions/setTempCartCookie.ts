"use server";

import { cookieConfig, TEMP_CART_COOKIE } from "@/constants";
import { randomUUID } from "crypto";
import { cookies } from "next/headers";

export async function setTempCartCookie() {
  const tempCartCookie = cookies().get(TEMP_CART_COOKIE)?.value;

  if (tempCartCookie) return;

  cookies().set(TEMP_CART_COOKIE, randomUUID(), { ...cookieConfig });
}
