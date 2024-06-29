"use server";

import { connectDatabase } from "@/lib";
import { token } from "./token";
import { UserModel } from "@/models";
import { IUser } from "@/@types/model";

export async function getUser() {
  const authToken = token();

  if (!authToken) {
    return null;
  }

  await connectDatabase();

  const user = await UserModel.findOne({
    _id: authToken.id,
  })
    .select("-password")
    .lean();

  return user as IUser;
}
