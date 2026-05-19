import * as yup from "yup";

// ─── Reusable field validators ───
const nameField = (label = "Name") =>
  yup
    .string()
    .required(`${label} is required`)
    .min(2, `${label} must be at least 2 characters`);

const emailField = () =>
  yup
    .string()
    .required("Email is required")
    .email("Please enter a valid email address");

const phoneField = () =>
  yup
    .string()
    .required("Phone number is required")
    .matches(
      /^(\+44|0)\d{9,10}$/,
      "Please enter a valid UK phone number (e.g. 07XXX XXXXXX)",
    );

const passwordField = () =>
  yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(
      /[^A-Za-z0-9]/,
      "Password must contain at least one special character",
    );

// ─── Checkout Step 1: Your Details ───
export const checkoutDetailsSchema = yup.object({
  firstName: nameField("First name"),
  lastName: nameField("Last name"),
  email: emailField(),
  mobile: phoneField(),
  dob: yup
    .date()
    .required("Date of birth is required")
    .typeError("Please enter a valid date")
    .max(
      new Date(new Date().setFullYear(new Date().getFullYear() - 18)),
      "You must be at least 18 years old",
    ),
  password: passwordField(),
  confirmPassword: yup
    .string()
    .required("Please confirm your password")
    .oneOf([yup.ref("password")], "Passwords do not match"),
});

// ─── Checkout Step 1 (Social/Logged-in users): Only mobile & dob ───
export const checkoutSocialDetailsSchema = yup.object({
  mobile: phoneField(),
  dob: yup
    .date()
    .required("Date of birth is required")
    .typeError("Please enter a valid date")
    .max(
      new Date(new Date().setFullYear(new Date().getFullYear() - 18)),
      "You must be at least 18 years old",
    ),
});

// ─── Checkout Step 2: Billing Address ───
export const checkoutBillingSchema = yup.object({
  postcode: yup
    .string()
    .required("Postcode is required")
    .matches(
      /^[A-Z]{1,2}\d[A-Z\d]? ?\d[A-Z]{2}$/i,
      "Please enter a valid UK postcode",
    ),
  addr1: yup.string().required("Address line 1 is required"),
  addr2: yup.string(),
  city: yup.string().required("City / Town is required"),
});

// ─── Booking Modal (from locations & course details) ───
export const bookingModalSchema = yup.object({
  firstName: nameField("First name"),
  lastName: nameField("Last name"),
  email: emailField(),
  phone: phoneField(),
  course: yup.string().required("Please select a course"),
  date: yup.string().required("Please select a preferred date"),
});

// ─── Career Apply Modal ───
export const applyModalSchema = yup.object({
  firstName: nameField("First name"),
  lastName: nameField("Last name"),
  email: emailField(),
  phone: phoneField(),
  address: yup.string().required("Address is required"),
  city: yup.string().required("City is required"),
  postcode: yup
    .string()
    .required("Postcode is required")
    .matches(
      /^[A-Z]{1,2}\d[A-Z\d]? ?\d[A-Z]{2}$/i,
      "Please enter a valid UK postcode",
    ),
});

// ─── Newsletter Email ───
export const newsletterSchema = yup.object({
  email: emailField(),
});

// ─── Helper: validate a single field against a schema ───
export const validateField = async (
  schema,
  fieldName,
  value,
  allValues = {},
) => {
  try {
    await schema.validateAt(fieldName, { ...allValues, [fieldName]: value });
    return "";
  } catch (err) {
    return err.message;
  }
};

// ─── Helper: validate all fields against a schema ───
export const validateAll = async (schema, values) => {
  try {
    await schema.validate(values, { abortEarly: false });
    return {};
  } catch (err) {
    const errors = {};
    if (err.inner) {
      err.inner.forEach((e) => {
        if (!errors[e.path]) {
          errors[e.path] = e.message;
        }
      });
    }
    return errors;
  }
};
