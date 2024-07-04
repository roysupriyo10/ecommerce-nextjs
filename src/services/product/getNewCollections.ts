import { IProduct, ProductCategory, ProductSize } from "@/@types/model";
import { connectDatabase } from "@/lib";
import { ProductModel } from "@/models";
import { FilterQuery } from "mongoose";
import all_product from "../../../public/images/all_product";

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

  // const result = await ProductModel.insertMany(
  //   all_product.map((product) => {
  //     return {
  //       name: product.name,
  //       category:
  //         product.category === "kid" ? ProductCategory.KIDS : product.category,
  //       sizes: [
  //         ProductSize.SMALL,
  //         ProductSize.MEDIUM,
  //         ProductSize.LARGE,
  //         ProductSize.EXTRA_LARGE,
  //         ProductSize.EXTRA_EXTRA_LARGE,
  //       ],
  //       image: product.image,
  //       tags: ["nice", "clothing", "women", "crop-top", "hottest"],
  //       description: "Best product",
  //       new_price: product.new_price,
  //       old_price: product.old_price,
  //     };
  //   }),
  // );

  const { paginate = false, category, page = 1, limit = 8 } = params;

  const query: FilterQuery<IProduct> = {};

  if (params?.category) {
    query.category = category;
  }

  let products: IProduct[];

  if (paginate === true) {
    products = (await ProductModel.find(query)
      .limit(limit)
      .skip(limit * (page - 1))) as IProduct[];
  } else {
    products = (await ProductModel.find(query)) as IProduct[];
  }

  const totalProducts = await ProductModel.countDocuments();

  return {
    totalProducts,
    products,
  };
}
