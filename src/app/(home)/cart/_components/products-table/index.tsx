import { ICart, IProduct, ProductSize } from "@/@types/model";
import { FC } from "react";
import { PRODUCTS_TABLE_HEADERS } from "./table-headers";
import ShopNowButton from "./shop-now";
import { assertPopulation } from "@/validation";
import { Button } from "@/shared";
import Image from "next/image";

type ProductsTableProps = {
  className?: string;
  products: ICart[`items`];
};

type FormattedProduct = IProduct & { quantity: number; size: ProductSize };

const ProductsTable: FC<ProductsTableProps> = ({
  className = "",
  products,
}) => {
  const sorted = products.reduce<FormattedProduct[]>((state, product) => {
    assertPopulation<IProduct>(product.productId);

    const productFound = state.find((stateProduct) => {
      return stateProduct._id.toString() === product.productId._id.toString();
    });

    if (!productFound) {
      state.push({
        ...product.productId,
        quantity: 1,
        size: product.size,
      });

      return state;
    }

    productFound.quantity++;

    return state;
  }, []);

  return (
    <div
      className={`
        overflow-x-auto
        sm:rounded-lg
        ${className}
      `}
    >
      <table
        className="
          w-full
          relative
          overflow-x-auto
          text-sm
          text-left
          rtl:text-right
        "
      >
        <thead
          className="
            text-xs
            border-b
            border-black/30
          "
        >
          <tr>
            {PRODUCTS_TABLE_HEADERS.map((header) => (
              <th
                key={header}
                scope="col"
                className="
                  px-6
                  py-4
                "
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody
          className="
            rounded-lg
          "
        >
          {!sorted.length ? (
            <tr>
              <td
                scope="row"
                colSpan={PRODUCTS_TABLE_HEADERS.length}
                className="
                  px-6
                  py-20
                  font-medium
                  text-gray-900
                  text-center
                  whitespace-nowrap
                "
              >
                <div
                  className="
                    flex
                    items-center
                    justify-center
                    gap-x-2
                  "
                >
                  <span>Nothing added yet.</span>
                  <ShopNowButton />
                </div>
              </td>
            </tr>
          ) : (
            sorted.map((product) => (
              <tr
                key={product._id.toString()}
                className="
                  border-b
                  border-black/30
                "
              >
                <th
                  scope="row"
                  className="
                    px-6
                    py-4
                    font-medium
                  "
                >
                  <Image
                    alt={`${product.name}-image`}
                    src={product.image || "/images/product_1.png"}
                    width={0}
                    height={0}
                    className="
                      object-cover
                    "
                    sizes="100vw"
                    style={{
                      width: "50px",
                      height: "100%",
                    }}
                  />
                </th>
                <td
                  className="
                    px-6
                    py-4
                  "
                >
                  {product.name} - {product.size}
                </td>
                <td
                  className="
                    px-6
                    py-4
                  "
                >
                  ${product.new_price}
                </td>
                <td
                  className="
                    px-6
                    py-4
                  "
                >
                  {product.quantity}
                </td>
                <td
                  className="
                    px-6
                    py-4
                  "
                >
                  {product.new_price * product.quantity}
                </td>
                <td
                  className="
                    px-6
                    py-4
                  "
                >
                  <form>
                    <Button
                      className="
                        bg-red-800
                        text-white
                        border-red-800
                      "
                    >
                      Remove
                    </Button>
                  </form>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsTable;
