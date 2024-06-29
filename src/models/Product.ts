import { Schema } from "mongoose";
import { IProduct, PRODUCT_CATEGORIES, PRODUCT_SIZES } from "@/@types/model";
import { createMongooseModel } from "@/utils";

const productSchema = new Schema<IProduct>(
  {
    sizes: {
      type: [String],
      enum: PRODUCT_SIZES,
      required: true,
    },
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
    description: {
      type: String,
    },
    tags: {
      type: [String],
      default: [],
    },
  },
  { timestamps: true },
);

const ProductModel = createMongooseModel<IProduct>("Product", productSchema);

export default ProductModel;
