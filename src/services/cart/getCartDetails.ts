import { getUser } from "@/auth";
import { Cart } from "@/models";
import { ICart } from "@/@types/model";

export async function getCartDetails() {
  const user = await getUser();

  if (!user) {
    return null;
  }

  const cart = await Cart.findOne({
    associatedUserId: user._id,
  });

  return cart as ICart;
}
