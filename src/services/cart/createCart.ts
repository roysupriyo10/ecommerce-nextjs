import { ICart } from "@/@types/model";
import { CartModel } from "@/models";
import { Types } from "mongoose";

type CreateCartParams = Partial<ICart> & {
  associatedUserId: Types.ObjectId | string;
};

export async function createCart(params: CreateCartParams) {
  return await CartModel.create(params);
}
