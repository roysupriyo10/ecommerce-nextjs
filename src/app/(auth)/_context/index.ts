import { FormContextType } from "@/@types";
import { createContext } from "react";

export const FormContext = createContext<FormContextType>({
  message: "",
  name: "",
});
