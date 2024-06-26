import { Cart } from "@/models";
import { Types } from "mongoose";

type GetCartDetailsParams = {
  userId: string | Types.ObjectId;
};

export async function getCartDetails(params: GetCartDetailsParams) {
  const cart = await Cart.findOne({
    associatedUserId: params.userId,
  });

  return cart;
}
