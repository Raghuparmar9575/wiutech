import * as Yup from "yup";

export const SignupSchema = Yup.object({
  name: Yup.string().min(4).required("Please Enter your name"),
  email: Yup.string().required("Please Enter your email"),
  phone: Yup.number()
    .min(1000000000, "OPPs Phone Number Not Valid")
    .max(9999999999, "OPPs Phone Number Not Valid")
    .required("Phone number is required"),

  address: Yup.string().min(3).max(100).required("Please enter your Address"),
  description: Yup.string()
    .min(3)
    .max(100)
    .required("Please enter description"),
  gender: Yup.string().required(),
  language: Yup.array().required(),

  password: Yup.string().min(6).required("Please enter your password"),
  confirm_password: Yup.string()
    .required("Please enter Confirm password")
    .oneOf([Yup.ref("password"), null], "Password must match"),
});
export const LoginSchema = Yup.object({
  email: Yup.string().required("Please Enter your email"),
  password: Yup.string().min(6).required("Please enter your password"),
});
