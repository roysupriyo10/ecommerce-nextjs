import { ProductCategory } from "@/@types/model";
import { connectDatabase } from "@/lib";
import { ProductModel } from "@/models";

export async function getPopularProducts(
  category: ProductCategory,
  { count = 10 }: { count: number },
) {
  await connectDatabase();

  return await ProductModel.find({ category })
    .sort({ new_price: 1 })
    .limit(count);
}
