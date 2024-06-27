import { getCartDetails } from "@/services";
import { ProductsTable } from "./_components";

export default async function Cart() {
  const cart = await getCartDetails();

  return (
    <main>
      <ProductsTable />
    </main>
  )
}
