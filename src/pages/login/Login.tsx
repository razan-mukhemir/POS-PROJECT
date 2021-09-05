import React, { useState } from "react";
import { TextField, Button, Container, Typography } from "@material-ui/core";
import useStyles from "./loginStyle";
import { validation } from "./utils";
const Login: React.FC = () => {
  const [values, setValues] = useState({
    username: "",
    password: "",
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
            />
            {errors.username ? (
              <p className={classes.errors}>{errors.username}</p>
            ) : null}
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
            />
            {errors.password ? (
              <p className={classes.errors}>{errors.password}</p>
            ) : null}
            <Button
              variant="contained"
              type="submit"
              className={classes.loginBtn}
              fullWidth
            >
              Login
            </Button>
          </form>
        </Container>
      </div>
    </>
  );
};
export default Login;
