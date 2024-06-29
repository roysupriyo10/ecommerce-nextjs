import { PRODUCT_SIZES, ProductSize } from "@/@types/model";
import { createZodFormMessage } from "@/utils";
import { isValidObjectId } from "mongoose";
import { z } from "zod";

export const AddToCartFormData = z
  .object({
    size: z.string({
      required_error: createZodFormMessage(
        "size",
        "Must provide a valid size to add to cart.",
      ),
      invalid_type_error: createZodFormMessage(
        "size",
        "No valid size provided.",
      ),
    }),
    productId: z.string({
      required_error: createZodFormMessage(
        "product-id",
        "This product is not valid. Try something else.",
      ),
      invalid_type_error: createZodFormMessage(
        "product-id",
        "This product is not valid. Try something else.",
      ),
    }),
  })
  .superRefine(({ productId, size }, z) => {
    if (!isValidObjectId(productId)) {
      z.addIssue({
        code: "custom",
        path: ["productId"],
        message: createZodFormMessage(
          "product-id",
          "This product is invalid. Try something else.",
        ),
      });
    }

    if (size === "") {
      z.addIssue({
        code: "custom",
        path: ["size"],
        message: createZodFormMessage("size", "No size provided."),
      });
    }

    if (!PRODUCT_SIZES.includes(size as ProductSize)) {
      z.addIssue({
        code: "custom",
        path: ["size"],
        message: createZodFormMessage("size", "This size is not available."),
      });
    }
  });
