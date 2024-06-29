import { ICart, PRODUCT_SIZES } from "@/@types/model";
import { createMongooseModel } from "@/utils";
import { Schema } from "mongoose";

const cartSchema = new Schema<ICart>(
  {
    associatedUserId: {
      type: Schema.Types.ObjectId,
      ref: "User",
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
  { timestamps: true },
);

const CartModel = createMongooseModel<ICart>("Cart", cartSchema);

export default CartModel;
