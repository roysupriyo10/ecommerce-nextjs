import { connectDatabase } from "./lib";
import { ProductModel } from "./models";
import all_product from "../public/images/all_product";
import { ProductCategory, ProductSize } from "./@types/model";

export async function register() {
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
}
