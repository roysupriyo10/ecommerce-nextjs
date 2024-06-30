import { ICart } from "@/@types/model";
import { getUser } from "@/auth";
import { TEMP_CART_COOKIE } from "@/constants";
import { connectDatabase } from "@/lib";
import { CartModel, TemporaryCartModel } from "@/models";
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

  if (cart.length === 0) {
    return null;
  }

  return cart[0] as ICart;
}
