import { IUser } from "@/@types/model";
import { connectDatabase } from "@/lib";
import { User } from "@/models";
import { compareHashWithPassword } from "@/utils";
import { FormException } from "@/utils/classes";

type LoginUserParams = {
  email: string;
  password: string;
};

export async function loginUser(params: LoginUserParams) {
  await connectDatabase();

  const user = await User.findOne({ email: params.email });

  if (!user) {
    throw new FormException({
      message: "User does not exist",
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

  return user as IUser;
}
