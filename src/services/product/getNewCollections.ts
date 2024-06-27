import { IProduct, ProductCategory } from "@/@types/model";
import { connectDatabase } from "@/lib";
import { Product } from "@/models";
import { FilterQuery } from "mongoose";

type GetNewCollectionsParams = {
  category?: ProductCategory;
};

export async function getNewCollections(params: GetNewCollectionsParams) {
  await connectDatabase();

  const query: FilterQuery<IProduct> = {};

  if (params?.category) {
    query.category = params.category;
  }
  const products = await Product.find(query);

  return products;
}
