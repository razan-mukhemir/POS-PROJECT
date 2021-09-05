import UserInputProps from "./type";
import {
  REQUIRED_USERNAME_ERROR_MSG,
  REQUIRED_PASSWORD_ERRO_MSG,
  PASSWORD_LENGTH_ERROR_MSG,
  PASSWORD_RULES_ERROR_MSG,
} from "./constants";
export const validation = (values: UserInputProps) => {
  let errors = { username: "", password: "" };
  if (!values.username.trim()) {
    errors.username = REQUIRED_USERNAME_ERROR_MSG;
  }

  if (!values.password.trim()) {
    errors.password = REQUIRED_PASSWORD_ERRO_MSG;
  } else if (values.password.length < 4) {
    errors.password = PASSWORD_LENGTH_ERROR_MSG;
  } else if (
    !/[0-9]/.test(values.password) ||
    !/[a-zA-Z]/.test(values.password)
  ) {
    errors.password = PASSWORD_RULES_ERROR_MSG;
  }

  return errors;
};
