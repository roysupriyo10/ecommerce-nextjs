import { FC } from "react";
import { getPopularProducts } from "@/services";
import { getRandomCategory } from "@/utils";
import { ProductCard } from "@/components";

const Popular: FC = async () => {
  const category = getRandomCategory();

  const products = await getPopularProducts(category, {
    count: 4,
  });

  return (
    <section
      className="
        flex
        flex-col
        gap-y-12
      "
    >
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
        POPULAR IN {category}
      </h2>
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
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Popular;
