import { ProductCategory } from "@/@types/model";
import { NewCollections } from "../_components";

export default function Women() {
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
        category={ProductCategory.WOMEN}
        showHeading={false}
      />
    </main>
  );
}
