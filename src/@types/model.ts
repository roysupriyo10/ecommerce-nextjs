import { Types } from "mongoose";

export interface GenericMongooseDocument {
  _id: Types.ObjectId;
  createdAt?: Date;
  updatedAt?: Date;
}

export enum ProductCategory {
  KIDS = "kids",
  MEN = "men",
  WOMEN = "women",
}

export enum ProductSize {
  SMALL = "S",
  MEDIUM = "M",
  LARGE = "L",
  EXTRA_LARGE = "XL",
  EXTRA_EXTRA_LARGE = "XXL",
}

export const PRODUCT_SIZES: ProductSize[] = [
  ProductSize.SMALL,
  ProductSize.MEDIUM,
  ProductSize.LARGE,
  ProductSize.EXTRA_LARGE,
  ProductSize.EXTRA_EXTRA_LARGE,
];

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  ProductCategory.KIDS,
  ProductCategory.MEN,
  ProductCategory.WOMEN,
];

export interface IProduct extends GenericMongooseDocument {
  name: string;
  category: (typeof PRODUCT_CATEGORIES)[number];
  sizes: typeof PRODUCT_SIZES;
  image: string;
  tags: string[];
  description: string;
  new_price: number;
  old_price: number;
}

export interface IUser extends GenericMongooseDocument {
  name: string;
  email: string;
  password: string;
  profilePicture: string;
  cart: Types.ObjectId | ICart;
}

export interface ICart extends GenericMongooseDocument {
  associatedUserId: Types.ObjectId | IUser;
  items: {
    productId: Types.ObjectId | IProduct;
    size: ProductSize;
  }[];
}

export type ITemporaryCart = Omit<ICart, "associatedUserId"> & {
  identifier: string;
};
