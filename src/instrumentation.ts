import { connectDatabase } from "./lib";

// import all_product from "../public/images/all_product";
// import { Product } from "./models";

export async function register() {
  // console.log(all_product);
  await connectDatabase();

  // await Product.insertMany(
  //   all_product.map((product) => ({
  //     name: product.name,
  //     category: product.category === "kid" ? "kids" : product.category,
  //     old_price: product.old_price,
  //     new_price: product.new_price,
  //     image: "",
  //   })),
  // );
}
