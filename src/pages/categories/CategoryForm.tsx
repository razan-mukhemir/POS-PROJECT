import React, { useState, useEffect } from "react";
import { Grid, TextField, Divider, Button } from "@material-ui/core";
import { addLeadingZeros, categoryNameValidate } from "./utils";
import CategoryInputProps from "./type";
import useStyles from "./style";

export default function CategoryForm(props: {
  editOrAdd: string;
  onSubmit: (c: CategoryInputProps) => void;
  inputField: CategoryInputProps;
  categories: CategoryInputProps[];
}) {
  const { editOrAdd, onSubmit, inputField, categories } = props;
  const [values, setValues] = useState({
    id: 0,
    categoryName: "",
    createdAt: "",
  });
  const [errors, setErrors] = useState({
    categoryName: "",
    createdAt: "",
  });
  const resetForm = () => {
    setValues({ ...values, categoryName: "" });
    setErrors({ ...errors, categoryName: "" });
  };

  useEffect(() => {
    setValues(inputField);
    setErrors({ categoryName: "", createdAt: "" });
  }, []);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = categoryNameValidate(values, categories);
    setErrors(validationErrors);
    if (!validationErrors.categoryName) {
      if (editOrAdd === "edit") {
        onSubmit({ ...values, categoryName: values.categoryName });
        resetForm();
      } else if (editOrAdd === "add") {
        let currentDatetime = new Date();
        let c = {
          id: Math.floor((1 + Math.random()) * 0x10000),
          categoryName: values.categoryName,
          createdAt:
            currentDatetime.getFullYear() +
            "/" +
            addLeadingZeros(currentDatetime.getMonth() + 1) +
            "/" +
            addLeadingZeros(currentDatetime.getDate()) +
            " " +
            addLeadingZeros(currentDatetime.getHours()) +
            ":" +
            addLeadingZeros(currentDatetime.getMinutes()) +
            ":" +
            addLeadingZeros(currentDatetime.getSeconds()),
        };
        onSubmit(c);
        resetForm();
      }
    }
  };

  const classes = useStyles();
  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <Grid container>
        <Grid item xs={12}>
          <TextField
            id="outlined-basic"
            name="categoryName"
            label="Category Name"
            value={values.categoryName}
            onChange={handleInputChange}
            variant="outlined"
            error={Boolean(errors.categoryName)}
            helperText={errors.categoryName}
          />
          <Divider classes={{ root: classes.divider }} />
          <div className={classes.actionContainer}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              className={classes.buttonMargin}
            >
              Submit
            </Button>
            <Button variant="contained" color="secondary" onClick={resetForm}>
              Reset
            </Button>
          </div>
        </Grid>
      </Grid>
    </form>
  );
}
