import { FormContextType } from "@/@types";
import { FormException } from "./classes";

export function parseFormException(error: FormException): FormContextType {
  return {
    name: error.name ?? "form",
    message: error.message ?? "There was an unknown error. Please try again.",
  };
}
