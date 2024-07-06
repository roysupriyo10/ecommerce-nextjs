import { FC } from "react";
import { getNewCollections } from "@/services";
import { ProductCard } from "@/components";
import { IProduct } from "@/@types/model";
import { Pagination } from "@/shared";

type NewCollectionsProps = {
  category?: IProduct["category"];
  showHeading?: boolean;
  showBanner?: boolean;
  page?: number;
};

const NewCollections: FC<NewCollectionsProps> = async ({
  category,
  showHeading = true,
  showBanner = false,
  page = 1,
}) => {
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
      {showBanner && (
        <div
          className={`
            h-[200px]
            sm:h-[250px]
            md:h-[350px]
            lg:h-[400px]
            xl:h-[450px]
            border-[1px]
            border-black
            flex
            items-center
            justify-center
          `}
        >
          <h2
            className="
              text-xl
              sm:text-2xl
              lg:text-3xl
              md:text-4xl
              font-medium
            "
          >
            This is a sample banner
          </h2>
        </div>
      )}
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
          auto-rows-[400px]
          sm:gap-4
          gap-4
        "
      >
        {products.map((product) => (
          <ProductCard key={product._id.toString()} product={product} />
        ))}
      </div>
      <Pagination
        mapHref={(page) => {
          return `/?page=${page + 1}`;
        }}
        totalCount={totalProducts}
        pageSize={8}
        siblingCount={0}
        currentPage={Number(page)}
      />
    </section>
  );
};

export default NewCollections;
