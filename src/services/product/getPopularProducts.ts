import { ProductCategory } from "@/@types/model";
import { Product } from "@/models";

export async function getPopularProducts(
  category: ProductCategory,
  { count = 10 }: { count: number },
) {
  return await Product.find({ category }).sort({ new_price: 1 }).limit(count);
}
