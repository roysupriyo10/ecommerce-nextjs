import { strongPasswordRegex } from "@/constants";
import { createZodFormMessage } from "@/utils/createZodFormMessage";
import { z } from "zod";

export const RegistrationFormData = z
  .object({
    name: z
      .string({
        required_error: createZodFormMessage("name", "Must provide a name."),
        invalid_type_error: createZodFormMessage(
          "name",
          "Invalid name provided.",
        ),
      })
      .min(
        3,
        createZodFormMessage("name", "Name must be at least 3 characters."),
      ),
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
      .min(8, createZodFormMessage("password", "Password must be at least 8 characters.")),
    confirmPassword: z
      .string({
        required_error: createZodFormMessage("email", "Must provide a email."),
        invalid_type_error: createZodFormMessage(
          "email",
          "Invalid email provided.",
        ),
      })
      .min(
        8,
        createZodFormMessage(
          "confirm-password",
          "Passwords do not match.",
        ),
      ),
  })
  .superRefine(({ confirmPassword, password }, z) => {
    const isStrongPassword = strongPasswordRegex.test(password);

    if (!isStrongPassword) {
      z.addIssue({
        code: "custom",
        path: ["password"],
        message: createZodFormMessage("password", "Password must be strong."),
      });
    }

    if (confirmPassword !== password) {
      z.addIssue({
        code: "custom",
        path: ["confirm-password"],
        message: createZodFormMessage(
          "confirm-password",
          "Passwords do not match.",
        ),
      });
    }
  });
