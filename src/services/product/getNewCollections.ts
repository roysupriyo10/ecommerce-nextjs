import { IProduct, ProductCategory } from "@/@types/model";
import { connectDatabase } from "@/lib";
import { ProductModel } from "@/models";
import { FilterQuery } from "mongoose";

type GetNewCollectionsParams = {
  category?: ProductCategory;
} & (
  | {
      paginate?: false;
      page?: never;
      limit?: never;
    }
  | {
      paginate: true;
      page: number;
      limit: number;
    }
);

export async function getNewCollections(params: GetNewCollectionsParams) {
  await connectDatabase();

  const { paginate = false, category, page = 1, limit = 8 } = params;

  const query: FilterQuery<IProduct> = {};

  if (params?.category) {
    query.category = category;
  }

  if (paginate === true) {
    // query[`createdAt`] = {
    //   $lte: createdOn,
    // };
    const products = await ProductModel.find(query)
      .limit(limit)
      .skip(limit * (page - 1));

    return products;
  } else {
    const products = await ProductModel.find(query);

    return products;
  }
}
