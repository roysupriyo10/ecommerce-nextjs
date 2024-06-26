import { ZodError } from "zod";
import { parseZodFormMessage } from "./parseZodFormMessage";
import { FormContextType } from "@/@types";

export function fromErrorToFormState(error: unknown): FormContextType {
  if (error instanceof ZodError) {
    return parseZodFormMessage(error.errors[0].message);
  } else if (error instanceof Error) {
    return {
      name: "form",
      message: String(error.message),
    };
  } else {
    return {
      name: "form",
      message: "An unknown error occurred. Please try again.",
    };
  }
}
