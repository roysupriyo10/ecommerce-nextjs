import { ZodError } from "zod";
import { parseZodFormMessage } from "./parseZodFormMessage";
import { FormContextType } from "@/@types";
import { FormException } from "./classes";
import { parseFormException } from "./parseFormException";

export function fromErrorToFormState(error: unknown): FormContextType {
  if (error instanceof ZodError) {
    return parseZodFormMessage(error.errors[0].message);
  } else if (error instanceof FormException) {
    return parseFormException(error);
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
