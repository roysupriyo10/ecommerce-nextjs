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

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  ProductCategory.KIDS,
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

export interface IUser extends GenericMongooseDocument {
  name: string;
  email: string;
  password: string;
  profilePicture: string;
  cart: Types.ObjectId | ICart;
}

export interface ICart extends GenericMongooseDocument {
  associatedUserId: Types.ObjectId | IUser;
  items: Types.ObjectId[] | IProduct[];
}
