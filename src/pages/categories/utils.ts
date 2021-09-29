import CategoryInputProps from "./type";
import {
  REQUIRED_CATEGORY_NAME_ERROR_MSG,
  UNIQUE_CATEGORY_NAME,
} from "./constants";

export const categoryNameValidate = (
  values: CategoryInputProps,
  categories: CategoryInputProps[]
) => {
  let errors = { categoryName: "", createdAt: "" };
  let uniqeName = categories.find((c) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    return c.categoryName === values.categoryName;
  });
  if (values.categoryName === "")
    errors.categoryName = REQUIRED_CATEGORY_NAME_ERROR_MSG;
  else if (uniqeName?.id) errors.categoryName = UNIQUE_CATEGORY_NAME;
  else errors.categoryName = "";
  return errors;
};

export function addLeadingZeros(n: number) {
  if (n <= 9) {
    return "0" + n;
  }
  return n;
}
