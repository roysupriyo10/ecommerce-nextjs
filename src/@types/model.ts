import { Types } from "mongoose";

export interface GenericMongooseDocument {
  _id: Types.ObjectId;
  createdAt?: Date;
  updatedAt?: Date;
}

export enum ProductCategory {
  KID = "kid",
  MEN = "men",
  WOMEN = "women",
}

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  ProductCategory.KID,
  ProductCategory.MEN,
  ProductCategory.WOMEN,
];

export interface IProduct extends GenericMongooseDocument {
  name: string;
  category: (typeof PRODUCT_CATEGORIES)[number];
  image: string;
  new_price: number;
  old_price: number;
}
