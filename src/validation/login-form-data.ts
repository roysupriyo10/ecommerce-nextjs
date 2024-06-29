import { createZodFormMessage } from "@/utils";
import { z } from "zod";

export const LoginFormData = z.object({
  email: z.coerce
    .string({
      required_error: createZodFormMessage("email", "Must provide a email."),
      invalid_type_error: createZodFormMessage(
        "email",
        "Invalid email provided.",
      ),
    })
    .email()
    .min(
      5,
      createZodFormMessage("email", "Email must be at least 5 characters."),
    ),
  password: z
    .string({
      required_error: createZodFormMessage(
        "password",
        "Must provide a password.",
      ),
      invalid_type_error: createZodFormMessage(
        "password",
        "Invalid password provided.",
      ),
    })
    .min(
      8,
      createZodFormMessage(
        "password",
        "Password must be at least 8 characters.",
      ),
    ),
});
