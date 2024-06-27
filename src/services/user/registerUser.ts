import { IUser } from "@/@types/model";
import { connectDatabase } from "@/lib";
import { User } from "@/models";
import { hashPassword } from "@/utils";
import { FormException } from "@/utils/classes";

type RegisterUserParams = {
  name: string;
  email: string;
  password: string;
};

export async function registerUser(params: RegisterUserParams) {
  await connectDatabase();

  const userExists = await User.exists({ email: params.email });

  if (userExists !== null) {
    throw new FormException({
      name: "form",
      message: "User already exists",
      statusCode: 409,
    });
  }

  const hashedPassword = await hashPassword(params.password);

  const newUser = await User.create({
    password: hashedPassword,
    email: params.email,
    name: params.name,
  });

  return newUser as IUser;
}
