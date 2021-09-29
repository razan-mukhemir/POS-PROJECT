import React, { useState } from "react";
import { TextField, Container, Typography } from "@material-ui/core";
import useStyles from "./loginStyle";
import { validation } from "./utils";
import ShellPage from "../shellPage/ShellPage";
import Buttons from "../../components/buttons/Buttons";

export const UsernameContext = React.createContext<string>("");
const Login: React.FC = () => {
  const [values, setValues] = useState({
    username: "",
    password: "",
    loggedin: false,
  });
  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };
  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrors(validation(values));
  };
  const classes = useStyles();
  return (
    <>
      {values.loggedin ? (
        <UsernameContext.Provider value={values.username}>
          <ShellPage />
        </UsernameContext.Provider>
      ) : (
        <div className={classes.root}>
          <Container maxWidth="xs" classes={{ root: classes.MuiContainerRoot }}>
            <Typography
              variant="h2"
              classes={{ root: classes.MuiTypographyRoot }}
            >
              Sign in
            </Typography>
            <form onSubmit={submitHandler}>
              <TextField
                type="text"
                name="username"
                label="User Name"
                value={values.username}
                onChange={handleInputChange}
                id="nameInput"
                placeholder="Enter username"
                classes={{ root: classes.textFieldRoot }}
                InputLabelProps={{
                  className: classes.inputLabel,
                }}
                error={Boolean(errors.username)}
                helperText={errors.username}
              />
              <TextField
                type="password"
                name="password"
                label="Password"
                value={values.password}
                onChange={handleInputChange}
                id="passInput"
                className={classes.textFieldRoot}
                placeholder="Enter password"
                InputLabelProps={{
                  className: classes.inputLabel,
                }}
                error={Boolean(errors.password)}
                helperText={errors.password}
              />
              <Buttons
                variant="contained"
                type="submit"
                classStyle={classes.loginBtn}
              >
                Login
              </Buttons>
            </form>
          </Container>
        </div>
      )}
    </>
  );
};
export default Login;
