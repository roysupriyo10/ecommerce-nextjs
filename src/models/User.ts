import { IUser } from "@/@types/model";
import { createMongooseModel } from "@/utils";
import { Schema } from "mongoose";

const userSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePicture: {
      type: String,
    },
    cart: {
      type: Schema.Types.ObjectId,
      ref: "Cart",
    },
  },
  { timestamps: true },
);

const UserModel = createMongooseModel<IUser>("User", userSchema);

export default UserModel;
