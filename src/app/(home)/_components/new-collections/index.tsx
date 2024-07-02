import { FC } from "react";
import { getNewCollections } from "@/services";
import { ProductCard } from "@/components";
import { IProduct } from "@/@types/model";

type NewCollectionsProps = {
  category?: IProduct["category"];
  showHeading?: boolean;
  showBanner?: boolean;
  page?: number;
  createdOn?: number;
};

const NewCollections: FC<NewCollectionsProps> = async ({
  category,
  showHeading = true,
  showBanner = false,
  page = 1,
}) => {
  // const productPages = 
  const { products, totalProducts } = await getNewCollections({
    category,
    paginate: true,
    page,
    limit: 8,
  });

  return (
    <section
      id="new-collections"
      className="
        flex
        flex-col
        gap-y-12
      "
    >
      {
        showBanner && (
          <div
            className="
              h-[400px]
            "
          >

          </div>
        )
      }
      {showHeading && (
        <h2
          className="
          uppercase
          font-medium
          text-center
          self-center
          text-xl
          sm:text-2xl
          lg:text-4xl
          xl:text-5xl
        "
        >
          NEW COLLECTIONS
        </h2>
      )}
      <div
        className="
          grid
          grid-cols-2
          sm:grid-cols-4
          sm:gap-4
          gap-4
        "
      >
        {products.map((product) => (
          <ProductCard key={product._id.toString()} product={product} />
        ))}
      </div>
      {
        totalProducts / 8 - Number(page)
      }
    </section>
  );
};

export default NewCollections;
