import * as yup from "yup";

export const loginFormSchema = yup.object({
  email: yup.string().trim().email().required(),
  password: yup.string().trim().min(6).max(12).required(),
});
