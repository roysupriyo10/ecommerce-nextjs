import { ICart, ProductSize } from "@/@types/model";
import { getUser } from "@/auth";
import { cookieConfig, TEMP_CART_COOKIE } from "@/constants";
import { connectDatabase } from "@/lib";
import { CartModel, TemporaryCartModel } from "@/models";
import { randomUUID } from "crypto";
import { FilterQuery, QueryOptions, Types, UpdateQuery } from "mongoose";
import { cookies } from "next/headers";

type AddProductToCartParams = {
  size: ProductSize;
  productId: Types.ObjectId | string;
};

export async function addProductToCart(params: AddProductToCartParams) {
  await connectDatabase();

  const user = await getUser();

  let cartModel: typeof CartModel | typeof TemporaryCartModel;
  let existingCart: { _id: Types.ObjectId } | null;

  const filter: FilterQuery<ICart> = {};
  const update: UpdateQuery<ICart> = {};
  const options: QueryOptions<ICart> = {
    new: true,
  };

  const cartId = cookies().get(TEMP_CART_COOKIE)?.value;

  if (!cartId) {
    cookies().set(TEMP_CART_COOKIE, randomUUID(), { ...cookieConfig });
  }

  if (!user) {
    cartModel = TemporaryCartModel;
    existingCart = cartId
      ? await cartModel.exists({
          identifier: cartId,
        })
      : null;
  } else {
    cartModel = CartModel;
    existingCart = await cartModel.exists({
      associatedUserId: user._id,
    });
  }

  if (!existingCart) {
    filter[user ? `associatedUserId` : `identifier`] = user ? user._id : cartId;
    update[`$setOnInsert`] = {
      items: [
        {
          productId: params.productId,
          size: params.size,
        },
      ],
    };
    options[`upsert`] = true;
  } else {
    filter[`_id`] = existingCart._id;
    update[`$addToSet`] = {
      items: {
        productId: params.productId,
        size: params.size,
      },
    };
  }

  console.log(cartModel, filter, update, options);

  const cart = await cartModel.findOneAndUpdate(filter, update, options);

  return cart;
}
