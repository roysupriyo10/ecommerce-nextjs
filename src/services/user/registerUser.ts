import { IUser } from "@/@types/model";
import { User } from "@/models";
import { hashPassword } from "@/utils";

type RegisterUserParams = {
  name: string;
  email: string;
  password: string;
};

export async function registerUser(params: RegisterUserParams) {
  const userExists = await User.exists({ email: params.email });

  if (userExists !== null) {
    throw new Error("User already exists");
  }

  const hashedPassword = await hashPassword(params.password);

  const newUser = await User.create({
    password: hashedPassword,
    email: params.email,
    name: params.name,
  });

  return newUser as IUser;
}
