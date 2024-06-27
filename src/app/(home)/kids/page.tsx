import { ProductCategory } from "@/@types/model";
import { NewCollections } from "../_components";

export default function Kids() {
  return (
    <main
      className="
        flex
        flex-col
        gap-y-20
      "
    >
      <NewCollections category={ProductCategory.KIDS} showHeading={false} />
    </main>
  );
}
