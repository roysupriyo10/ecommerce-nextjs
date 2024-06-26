import { Product } from "@/models";

export async function getNewCollections() {
  const products = await Product.find({});

  return products;
}
