import { ProductCategory } from "@/@types/model";
import { NewCollections } from "../_components";
import { Metadata } from "next";
import { cleanPageParameter } from "@/utils";

export const metadata: Metadata = {
  title: "Men | Ecommerce Platform",
  description: "Best Shop Ever",
};

export default function Men({ searchParams }: {
  searchParams: {
    page: string;
  }
}) {
  const cleanedPageParam = cleanPageParameter(searchParams.page)

  return (
    <main
      className="
        flex
        flex-col
        gap-y-20
      "
    >
      <NewCollections
        page={cleanedPageParam}
        category={ProductCategory.MEN} showHeading={false} />
    </main>
  );
}
