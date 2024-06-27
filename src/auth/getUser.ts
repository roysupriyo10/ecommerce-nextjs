"use server";

import { connectDatabase } from "@/lib";
import { token } from "./token";
import { User } from "@/models";
// import { cookies } from "next/headers";
// import { USER_ACCESS_TOKEN_COOKIE } from "@/constants";
import { IUser } from "@/@types/model";

export async function getUser() {
  const authToken = token();

  if (!authToken) {
    return null;
  }

  await connectDatabase();

  const user = await User.findOne({
    _id: authToken.id,
  }).select("-password");

  // if (!user) {
  //   cookies().delete(USER_ACCESS_TOKEN_COOKIE);
  // }

  return user as IUser;
}
