import { Schema } from "mongoose";
import { IProduct, PRODUCT_CATEGORIES } from "../@types/model";
import { createMongooseModel } from "../utils";

const productSchema = new Schema<IProduct>(
  {
    category: {
      type: String,
      enum: PRODUCT_CATEGORIES,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    new_price: {
      type: Number,
      required: true,
    },
    old_price: {
      type: Number,
    },
  },
  { timestamps: true },
);

const Product = createMongooseModel("Product", productSchema);

export default Product;
