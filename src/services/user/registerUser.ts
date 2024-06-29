import { IUser } from "@/@types/model";
import { connectDatabase } from "@/lib";
import { UserModel } from "@/models";
import { hashPassword } from "@/utils";
import { FormException } from "@/utils/classes";

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

  return newUser as IUser;
}
