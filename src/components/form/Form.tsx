import React from "react";
import useStyles from "./formStyle";

export default function Form(props: any) {
  const classes = useStyles();
  const { children, ...other } = props;
  return (
    <form className={classes.root} autoComplete="off" {...other}>
      {children}
    </form>
  );
}
