import { ICart } from "@/@types/model";
import { getUser } from "@/auth";
import { cookieConfig, TEMP_CART_COOKIE } from "@/constants";
import { connectDatabase } from "@/lib";
import { CartModel, TemporaryCartModel } from "@/models";
import { randomUUID } from "crypto";
import { FilterQuery, Types } from "mongoose";
import { cookies } from "next/headers";

type CheckIfProductIsInCartParams = {
  productId: string | Types.ObjectId;
};

export async function checkIfProductIsInCart(
  params: CheckIfProductIsInCartParams,
) {
  await connectDatabase();

  const user = await getUser();

  const tempCartId = cookies().get(TEMP_CART_COOKIE)?.value;

  if (!tempCartId) {
    cookies().set(TEMP_CART_COOKIE, randomUUID(), { ...cookieConfig });
  }

  let cartModel: typeof CartModel | typeof TemporaryCartModel;

  let filterQuery: FilterQuery<ICart> = {
    "items.productId": params.productId,
  };

  if (user) {
    filterQuery[`associatedUserId`] = user._id;
    cartModel = CartModel;
  } else {
    filterQuery[`identifier`] = tempCartId;
    cartModel = TemporaryCartModel;
  }

  const cart = await cartModel.aggregate([
    {
      $match: { "items.productId": params.productId },
    },
    {
      $project: {
        items: {
          $filter: {
            input: "$items",
            as: "item",
            cond: { $eq: ["$$item.productId", params.productId] },
          },
        },
      },
    },
  ]);

  return cart[0];
}
