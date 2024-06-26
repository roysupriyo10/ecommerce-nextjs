import { ICart } from "@/@types/model";
import { createMongooseModel } from "@/utils";
import { Schema } from "mongoose";

const cartSchema = new Schema<ICart>(
  {
    associatedUserId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    items: {
      type: [Schema.Types.ObjectId],
      ref: "Product",
    },
  },
  { timestamps: true },
);

const Cart = createMongooseModel<ICart>("Cart", cartSchema);

export default Cart;
