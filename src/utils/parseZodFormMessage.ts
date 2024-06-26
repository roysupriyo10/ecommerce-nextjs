import { FormContextType } from "@/@types";

export function parseZodFormMessage(message: string): FormContextType {
  const [name, errorMessage] = message.split(";;");

  if (!name || !errorMessage) {
    throw new Error("Corrupted format of message passed.");
  }

  return {
    name,
    message: errorMessage
  }
}
