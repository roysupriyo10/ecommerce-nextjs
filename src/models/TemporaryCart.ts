import { ITemporaryCart, PRODUCT_SIZES } from "@/@types/model";
import { createMongooseModel } from "@/utils";
import { Schema } from "mongoose";

const temporaryCartSchema = new Schema<ITemporaryCart>(
  {
    identifier: {
      type: String,
      required: true,
      index: true,
      unique: true,
    },
    items: {
      type: [
        {
          productId: {
            type: Schema.Types.ObjectId,
            ref: "Product",
            required: true,
          },
          size: {
            type: String,
            enum: PRODUCT_SIZES,
            required: true,
          },
        },
      ],
      default: [],
    },
  },
  {
    timestamps: true,
  },
);

const TemporaryCartModel = createMongooseModel<ITemporaryCart>(
  "TemporaryCart",
  temporaryCartSchema,
);

export default TemporaryCartModel;
