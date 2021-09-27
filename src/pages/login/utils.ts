import UserInputProps from "./type";
import {
  REQUIRED_USERNAME_ERROR_MSG,
  REQUIRED_PASSWORD_ERRO_MSG,
  PASSWORD_LENGTH_ERROR_MSG,
  PASSWORD_RULES_ERROR_MSG,
  UNCORRECT_USERNAME_OR_PASSWORD,
} from "./constants";
import users from "./users.json";
localStorage.setItem("usersList", JSON.stringify(users));
export const validation = (values: UserInputProps) => {
  let errors = { username: "", password: "" };
  let users: UserInputProps[];
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
  } else {
    let getLocalStorageData = localStorage.getItem("usersList");
    if (getLocalStorageData == null) {
      users = [];
    } else {
      users = JSON.parse(getLocalStorageData);
    }
    for (let i = 0; i < users.length; i++) {
      if (
        users[i].username === values.username &&
        users[i].password === values.password
      ) {
        users[i].loggedin = true;
        values.loggedin = users[i].loggedin;
        break;
      } else {
        users[i].loggedin = false;
        values.loggedin = users[i].loggedin;
        errors.password = UNCORRECT_USERNAME_OR_PASSWORD;
      }
    }
    localStorage.setItem("usersList", JSON.stringify(users));
  }

  return errors;
};
