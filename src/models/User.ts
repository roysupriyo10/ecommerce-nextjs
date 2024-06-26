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
    cart: {
      type: Schema.Types.ObjectId,
      ref: "Cart",
    },
  },
  { timestamps: true },
);

const User = createMongooseModel<IUser>("User", userSchema);

export default User;
