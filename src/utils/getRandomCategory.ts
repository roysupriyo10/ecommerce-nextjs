import { PRODUCT_CATEGORIES } from "@/@types/model";

export function getRandomCategory() {
  return PRODUCT_CATEGORIES[Math.floor(Math.random() * 3)];
}
