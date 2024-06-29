import { IProduct } from "@/@types/model";
import { connectDatabase } from "@/lib";
import { ProductModel } from "@/models";
import { Types } from "mongoose";

type GetProductByIdParams = {
  productId: string | Types.ObjectId;
};

export async function getProductById(params: GetProductByIdParams) {
  await connectDatabase();

  const product = await ProductModel.findById(params.productId).lean();

  if (!product) {
    return null;
  }

  return product as IProduct;
}
