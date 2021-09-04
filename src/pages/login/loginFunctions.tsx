export default interface userInput {
  username: string;
  password: string;
}
export const validation = (values: userInput) => {
  let errors = { username: "", password: "" };
  if (!values.username.trim()) {
    errors.username = "Username is required";
  }

  if (!values.password.trim()) {
    errors.password = "Password is required";
  } else if (values.password.length < 4) {
    errors.password = "Password must be 4 char or more";
  } else if (
    !/[0-9]/.test(values.password) ||
    !/[a-zA-Z]/.test(values.password)
  ) {
    errors.password = "Password must be contain chars and numbers";
  }

  return errors;
};
