import { ProductCategory } from "@/@types/model";
import { NewCollections } from "../_components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Men | Ecommerce Platform",
  description: "Best Shop Ever"
}

export default function Men() {
  return (
    <main
      className="
        flex
        flex-col
        gap-y-20
      "
    >
      <NewCollections category={ProductCategory.MEN}
        showHeading={false}
      />
    </main>
  );
}
