import z from "zod";

export const userSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: "First name must be at least 2 characters long" })
    .max(50, { message: "First name must be less than 50 characters" })
    .trim(),
  lastName: z
    .string()
    .min(2, { message: "Last name must be at least 2 characters long" })
    .max(50, { message: "Last name must be less than 50 characters" })
    .trim(),
  email: z
    .string()
    .email({ message: "Please enter a valid email address" })
    .trim(),
  avatarLink: z
    .string()
    .url({ message: "Please enter a valid URL" })
    .optional()
    .or(z.literal("")),
});
