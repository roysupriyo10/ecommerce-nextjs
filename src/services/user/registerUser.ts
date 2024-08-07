import { IUser } from "@/@types/model";
import { connectDatabase } from "@/lib";
import { UserModel } from "@/models";
import { hashPassword } from "@/utils";
import { FormException } from "@/utils/classes";
import { convertTemporaryCartToCart } from "../cart";
import { cookies } from "next/headers";
import { TEMP_CART_COOKIE } from "@/constants";

type RegisterUserParams = {
  name: string;
  email: string;
  password: string;
};

export async function registerUser(params: RegisterUserParams) {
  await connectDatabase();

  const userExists = await UserModel.exists({ email: params.email });

  if (userExists !== null) {
    throw new FormException({
      name: "form",
      message: "UserModel already exists",
      statusCode: 409,
    });
  }

  const hashedPassword = await hashPassword(params.password);

  const newUser = await UserModel.create({
    password: hashedPassword,
    email: params.email,
    name: params.name,
  });

  const tempCartId = cookies().get(TEMP_CART_COOKIE)?.value;

  await convertTemporaryCartToCart({
    associatedUserId: newUser._id,
    cartId: tempCartId,
  });

  return newUser as IUser;
}
