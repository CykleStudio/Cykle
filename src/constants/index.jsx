import { checkMail } from "../utils";

export const inputArray = [
  {
    label: "",
    type: "text",
    name: "Product Name",
    placeholder: "Product Name",
    _id: "product_name",
    errorMessage: "Product Name is required",
    validator: (data) => data.length > 3,
  },
  {
    label: "",
    type: "text",
    name: "First Name",
    placeholder: "First Name",
    _id: "first_name",
    errorMessage: "First name must be at least 3 characters",
    validator: (data) => data.length > 3,
  },
  {
    label: "",
    type: "text",
    name: "Last Name",
    placeholder: "Last Name",
    _id: "last_name",
    errorMessage: "Last name must be at least 3 characters",
    validator: (data) => data.length > 3,
  },
  {
    label: "",
    type: "email",
    name: "Email",
    placeholder: "Email Address",
    _id: "email",
    errorMessage: "Please enter a valid email",
    // validator: (data) => checkMail(data),
  },
  {
    label: "",
    type: "tel",
    name: "Phone",
    placeholder: "Phone Number",
    _id: "phone",
    validator: (data) => data.length > 10,
    errorMessage: "Invalid Phone",
  },
  {
    label: "",
    type: "text",
    name: "Address",
    placeholder: "Addresss [City, Country]",
    _id: "address",
    validator: (data) => data.length > 3,
    errorMessage: "Invalid Address",
  },
];

export const checkboxArray = [
  {
    name: "Sass",
    _id: "sass",
    text: "Sass",
  },
  {
    name: "B2B",
    _id: "b2b",
    text: "B2B",
  },
  {
    name: "B2C",
    _id: "b2c",
    text: "B2C",
  },
  {
    name: "Mobile App",
    _id: "mobile_app",
    text: "Mobile App",
  },
  {
    name: "Web App",
    _id: "web_app",
    text: "Web App",
  },
  {
    name: "Websites",
    _id: "websites",
    text: "Websites",
  },
  {
    name: "One Pager",
    _id: "one_pager",
    text: "One Pager",
  },
  {
    name: "Others",
    _id: "others",
    text: "Others",
  },
];

export const checkboxArray2 = [
  {
    name: "Product Documentation",
    _id: "product_documentation",
    text: "Product Documentation",
  },
  {
    name: "UI/UX Designer",
    _id: "ui_ux_designer",
    text: "UI/UX Designer",
  },
  {
    name: "Brand Identity Designer",
    _id: "brand_identity_designer",
    text: "Brand Identity Designer",
  },
];
