import { checkIfProductIsInCart, getProductById } from "@/services";
import { isValidObjectId } from "mongoose";
import { notFound } from "next/navigation";
import { ProductImages, SizeSelector } from "./_components";
import { BreadCrumbs } from "@/components";
import { getProductBreadcrumbSteps } from "@/utils";

export default async function Product({ params }: { params: { id: string } }) {
  if (!isValidObjectId(params.id)) {
    notFound();
  }

  const product = await getProductById({ productId: params.id });

  if (!product) {
    notFound();
  }

  const cartDetails = await checkIfProductIsInCart({
    productId: product._id,
  });

  return (
    <main
      className="
        flex
        flex-col
        gap-y-10
      "
    >
      <BreadCrumbs
        steps={getProductBreadcrumbSteps(product)}
        className="
          mt-10
          max-sm:hidden
        "
      />
      <section
        className="
          max-sm:mt-4
          flex
          w-full
          gap-x-8
          flex-col
          sm:flex-row
          gap-y-6
        "
      >
        <ProductImages
          className="
            sm:flex-[2]
            max-sm:h-[400px]
            max-md:h-[400px]
            max-lg:h-[500px]
            h-[600px]
          "
          images={[
            product.image || "/images/product_1.png",
            product.image || "/images/product_2.png",
            product.image || "/images/product_3.png",
            product.image || "/images/product_4.png",
            product.image || "/images/product_5.png",
            product.image || "/images/product_6.png",
            product.image || "/images/product_7.png",
            product.image || "/images/product_8.png",
            product.image || "/images/product_9.png",
            product.image || "/images/product_10.png",
            product.image || "/images/product_11.png",
            product.image || "/images/product_12.png",
            product.image || "/images/product_13.png",
            product.image || "/images/product_14.png",
            product.image || "/images/product_15.png",
            product.image || "/images/product_1.png",
            product.image || "/images/product_1.png",
            product.image || "/images/product_1.png",
            product.image || "/images/product_1.png",
            product.image || "/images/product_1.png",
            product.image || "/images/product_1.png",
            product.image || "/images/product_1.png",
          ]}
          altPrefix={product.name}
        />
        <div
          className="
            sm:flex-[1]
            flex
            grow
            pb-20
            flex-col
            gap-y-6
          "
        >
          <div
            className="
              flex
              flex-col
              gap-y-2
            "
          >
            <h2
              className="
                text-3xl
                leading-normal
                font-semibold
              "
            >
              {product.name}
            </h2>
          </div>
          <div
            className="
              flex
              items-center
              gap-x-6
              text-lg
            "
          >
            <span
              className="
                line-through
                text-gray-400
              "
            >
              ${product.old_price}
            </span>
            <span
              className="
                font-bold
              "
            >
              ${product.new_price}
            </span>
          </div>
          <p>{product.description}</p>
          <SizeSelector
            itemsInBag={cartDetails?.items || []}
            productId={product._id.toString()}
            sizes={product.sizes || []}
          />
          <div>
            <p>
              <span
                className="
                font-bold
              "
              >
                Category:
              </span>{" "}
              {product.category[0].toUpperCase() + product.category.slice(1)}
            </p>
            <p>
              <span
                className="
                font-bold
              "
              >
                Tags:
              </span>{" "}
              {product.tags.join(", ")}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
