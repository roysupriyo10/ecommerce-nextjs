import { ProductCategory } from "@/@types/model";
import { NewCollections } from "../_components";
import { Metadata } from "next";
import { cleanPageParameter } from "@/utils";

export const metadata: Metadata = {
  title: "Men | Ecommerce Platform",
  description: "Best Shop Ever",
};

export default function Men({
  searchParams,
}: {
  searchParams: {
    page: string;
  };
}) {
  const cleanedPageParam = cleanPageParameter(searchParams.page);

  return (
    <main
      className="
        flex
        flex-col
        gap-y-20
        pt-4
        sm:pt-6
        md:pt-8
        lg:pt-10
        xl:pt-12
      "
    >
      <NewCollections
        showBanner
        page={cleanedPageParam}
        category={ProductCategory.MEN}
        showHeading={false}
      />
    </main>
  );
}
