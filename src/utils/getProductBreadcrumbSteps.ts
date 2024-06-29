import { IProduct } from "@/@types/model";

export function getProductBreadcrumbSteps(product: IProduct) {
  return [
    {
      displayText: "Shop",
      pathname: "/",
    },
    {
      displayText:
        product.category[0].toUpperCase() + product.category.slice(1),
      pathname: `/${product.category}`,
    },
    {
      displayText: product.name,
      pathname: `/product/${product._id}`,
    },
  ];
}
