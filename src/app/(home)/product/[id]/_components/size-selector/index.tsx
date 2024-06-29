"use client";

import { FormContextType } from "@/@types";
import { ICart, ProductSize } from "@/@types/model";
import { FormContext } from "@/app/(auth)/_context";
import { Button } from "@/shared";
import { FC } from "react";
import { useFormState } from "react-dom";
import { addProductToCartFormAction } from "../../_actions";

type SizeSelectorProps = {
  sizes: ProductSize[];
  productId: string;
  itemsInBag: ICart["items"];
};

const SizeSelector: FC<SizeSelectorProps> = ({
  itemsInBag,
  productId,
  sizes,
}) => {
  const [formState, formAction] = useFormState<FormContextType, FormData>(
    addProductToCartFormAction,
    {
      message: "",
      name: "",
    },
  );
  return (
    <FormContext.Provider value={formState}>
      <form
        action={formAction}
        className="
          flex
          flex-col
          gap-y-12
        "
      >
        <input type="hidden" name="product-id" value={productId} />
        <h4
          className="
            text-sm
            text-gray-600
          "
        >
          {formState.message ? (
            <span
              className="
                text-red-800
                font-light
              "
            >
              {formState.message}
            </span>
          ) : (
            `Select your desired size`
          )}
        </h4>
        <div
          className="
            flex
            items-center
            gap-x-2
          "
        >
          {sizes.map((size) => {
            return (
              <label
                key={size}
                className="
                  flex
                  items-center
                "
              >
                <input
                  type="radio"
                  name="size"
                  className="
                    peer
                    hidden
                  "
                  value={size}
                />
                <span
                  className="
                    p-2
                    border
                    border-black/30
                    uppercase
                    min-w-[50px]
                    peer-checked:bg-red-800
                    peer-checked:border-red-800
                    transition-all
                    duration-200
                    ease-in-out
                    peer-checked:text-white
                    text-center
                    font-bold
                    cursor-pointer
                    rounded-lg
                  "
                >
                  {size}
                </span>
              </label>
            );
          })}
        </div>
        <div
          className="
            flex
            items-center
            gap-x-4
          "
        >
          <Button
            title="Add this item to your cart"
            children={"Add to cart"}
            className="
              border-red-800
              bg-red-800
              text-white
              sm:self-start
              min-w-40
            "
          />
          {itemsInBag?.length && (
            <p>
              <span
                className="
                  font-bold
                "
              >
                Items in bag:
              </span>{" "}
              {itemsInBag.length}
            </p>
          )}
        </div>
      </form>
    </FormContext.Provider>
  );
};

export default SizeSelector;
