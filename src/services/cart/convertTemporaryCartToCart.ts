import { ICart } from "@/@types/model";
import { CartModel, TemporaryCartModel } from "@/models";
import { FilterQuery, QueryOptions, Types, UpdateQuery } from "mongoose";

type ConvertTemporaryCartToCartParams = {
  associatedUserId: Types.ObjectId;
  cartId: string | undefined;
};

export async function convertTemporaryCartToCart(
  params: ConvertTemporaryCartToCartParams,
) {
  if (!params.cartId) return null;

  const tempCart = await TemporaryCartModel.findOne({
    identifier: params.cartId,
  });

  if (!tempCart) return null;

  const userCart = await CartModel.exists({
    associatedUserId: params.associatedUserId,
  });

  const filter: FilterQuery<ICart> = {};
  const update: UpdateQuery<ICart> = {};
  const options: QueryOptions<ICart> = {
    new: true,
  };

  if (userCart) {
    filter[`_id`] = userCart._id;
    update[`$push`] = {
      items: {
        $each: tempCart.items,
      },
    };
  } else {
    filter[`associatedUserId`] = params.associatedUserId;
    update[`$set`] = {
      items: tempCart.items,
    };
    options[`upsert`] = true;
  }

  const cart = await CartModel.findOneAndUpdate(filter, update, options);

  await tempCart.deleteOne();

  return cart;
}
