import { ProductCategory } from "@/@types/model";
import { NewCollections } from "../_components";

export default function Women() {
  return (
    <main
      className="
        flex
        flex-col
        gap-y-20
        pt-20
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
