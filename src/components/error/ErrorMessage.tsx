import React from "react";
import useStyles from "./errorStyle";
const ErrorMessage: React.FC<{ errorMsg: string }> = ({ errorMsg }) => {
  const classes = useStyles();
  return (
    <>
      <p className={classes.errors}>{errorMsg}</p>
    </>
  );
};

export default ErrorMessage;
