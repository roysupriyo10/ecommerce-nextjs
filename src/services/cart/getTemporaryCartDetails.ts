import { ITemporaryCart } from "@/@types/model";
import { connectDatabase } from "@/lib";
import { TemporaryCartModel } from "@/models";
import { Types } from "mongoose";

type GetTemporaryCartDetailsParams = {
  cartId: string | Types.ObjectId;
};

export async function getTemporaryCartDetails(
  params: GetTemporaryCartDetailsParams,
) {
  await connectDatabase();

  const cart = (await TemporaryCartModel.findOne({
    identifier: params.cartId,
  })
    .populate("items.productId")
    .lean()) as ITemporaryCart;

  if (!cart) {
    return null;
  }

  return cart;
}
