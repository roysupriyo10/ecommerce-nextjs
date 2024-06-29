import { getCart } from "@/services";
import { ProductsTable } from "./_components";

export default async function Cart() {
  const cart = await getCart();

  return (
    <main
      className="
        flex
        flex-col
        gap-y-10
      "
    >
      <ProductsTable
        className="
          mt-10
        "
        products={cart?.items ?? []}
      />
    </main>
  );
}
