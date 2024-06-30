import { IUser } from "@/@types/model";
import { connectDatabase } from "@/lib";
import { UserModel } from "@/models";
import { compareHashWithPassword } from "@/utils";
import { FormException } from "@/utils/classes";
import { convertTemporaryCartToCart } from "../cart";
import { cookies } from "next/headers";
import { TEMP_CART_COOKIE } from "@/constants";

type LoginUserParams = {
  email: string;
  password: string;
};

export async function loginUser(params: LoginUserParams) {
  await connectDatabase();

  const user = (await UserModel.findOne({ email: params.email })) as IUser;

  if (!user) {
    throw new FormException({
      message: "UserModel does not exist",
      name: "form",
      statusCode: 404,
    });
  }

  const [salt, key] = user.password.split(":");

  const isPasswordValid = await compareHashWithPassword(
    params.password,
    salt,
    key,
  );

  if (!isPasswordValid) {
    throw new FormException({
      name: "password",
      message: "Invalid password",
      statusCode: 400,
    });
  }

  const tempCartId = cookies().get(TEMP_CART_COOKIE)?.value;

  await convertTemporaryCartToCart({
    associatedUserId: user._id,
    cartId: tempCartId,
  });

  return user;
}
