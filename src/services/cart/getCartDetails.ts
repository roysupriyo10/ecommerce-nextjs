import { Types } from "mongoose";
import { CartModel } from "@/models";
import { ICart } from "@/@types/model";
import { connectDatabase } from "@/lib";

type GetCartDetailsParams = {
  userId: string | Types.ObjectId;
};

export async function getCartDetails(params: GetCartDetailsParams) {
  await connectDatabase();

  const cart = (await CartModel.findOne({
    associatedUserId: params.userId,
  })
    .populate("items.productId")
    .lean()) as ICart;

  if (!cart) {
    return null;
  }

  return cart;
}
