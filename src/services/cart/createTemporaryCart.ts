import { ITemporaryCart } from "@/@types/model";
import { TemporaryCartModel } from "@/models";

export async function createTemporaryCart() {
  return (await TemporaryCartModel.create({
    items: [],
  })) as ITemporaryCart;
}
