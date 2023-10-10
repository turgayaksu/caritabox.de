import { z } from "zod";

export const createResume = z.object({
  email: z.string().min(1, { message: "Email is required" }).email({
    message: "Must be a valid email",
  }),
  location: z.array(z.number()),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" })
    .max(16, { message: "Password must be max 16 characters" })
    .regex(new RegExp(".*[A-Z].*"), {
      message: "The password must contain at least 1 uppercase letter.",
    })
    .regex(new RegExp(".*[a-z].*"), {
      message: "The password must contain at least 1 lowercase letter.",
    })
    .regex(new RegExp(".*[0-9].*"), {
      message: "The password must contain at least 1 number.",
    })
    .regex(new RegExp(".*[`~<>?,./!@#$%^&*()\\-_+=\"'|{}\\[\\];:\\\\].*"), {
      message: "The password must contain at least 1 special character.",
    }),
});
