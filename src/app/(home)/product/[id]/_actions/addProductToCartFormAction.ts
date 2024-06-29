"use server";

import { FormContextType } from "@/@types";
import { ProductSize } from "@/@types/model";
import { addProductToCart } from "@/services";
import { fromErrorToFormState } from "@/utils";
import { AddToCartFormData } from "@/validation";
import { revalidatePath } from "next/cache";

export async function addProductToCartFormAction(
  _formState: FormContextType,
  formData: FormData,
): Promise<FormContextType> {
  try {
    const params = AddToCartFormData.parse({
      size: formData.get("size"),
      productId: formData.get("product-id"),
    });

    await addProductToCart({
      size: params.size as ProductSize,
      productId: params.productId,
    });

    revalidatePath(`/product/${params.productId}`);

    return {
      name: "",
      message: "",
    };
  } catch (error) {
    const errorState = fromErrorToFormState(error);

    return errorState;
  }
}
