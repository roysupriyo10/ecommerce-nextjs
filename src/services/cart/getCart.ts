import { getUser } from "@/auth";
import { getCartDetails } from "./getCartDetails";
import { cookies } from "next/headers";
import { TEMP_CART_COOKIE } from "@/constants";
import { getTemporaryCartDetails } from "./getTemporaryCartDetails";

export async function getCart() {
  const user = await getUser();

  if (user) {
    return await getCartDetails({
      userId: user._id,
    });
  } else {
    const tempCartId = cookies().get(TEMP_CART_COOKIE)?.value || "";

    return tempCartId
      ? await getTemporaryCartDetails({
          cartId: tempCartId,
        })
      : null;
  }
}
