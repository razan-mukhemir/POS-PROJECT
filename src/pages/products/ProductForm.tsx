import { useState, useEffect } from "react";
import { Divider, Button } from "@material-ui/core";
import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date";
import DropDown from "../../components/dropdown/DropDown";
import Datepicker from "../../components/datepicker/Datepicker";
import ProductInputProps from "./type";
import CategoryInputProps from "../../pages/categories/type";
import { getCategories } from "../../service/api";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import { TextField } from "formik-material-ui";
import * as yup from "yup";
import {
  REQUIRED_PRODUCT_NAME_ERROR_MSG,
  REQUIRED_RAW_PRICE_ERROR_MSG,
  REQUIRED_PRICE_ERROR_MSG,
  REQUIRED_Code_ERROR_MSG,
  MORE_THAN_ZERO,
  MORE_THAN_RAW_PRIC,
  CODE_FORMAT,
} from "./constants";
import useStyles from "./style";

export default function ProductForm(props: {
  editOrAdd: string;
  onSubmit: (p: ProductInputProps) => void;
  inputField: ProductInputProps;
  products: ProductInputProps[];
}) {
  const { editOrAdd, onSubmit, inputField, products } = props;
  const [categories, setCategories] = useState<CategoryInputProps[]>([]);
  const categoryNameDropdownData = categories.map(
    (item: CategoryInputProps) => {
      return item["categoryName"];
    }
  );

  const productsCode = products.map((item: ProductInputProps) => {
    return item["code"];
  });
  const [dropdownValue, setDropdownValue] = useState("");
  const [image, setImage] = useState("");
  const [selectedDate, handleDateChange] = useState<MaterialUiPickersDate>(
    new Date("14/07/2025")
  );

  function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files !== null) {
      let url = URL.createObjectURL(e.target.files[0]);
      setImage(url);
    }
  }

  const initialValues: ProductInputProps = inputField;

  const handleSubmit = (
    values: ProductInputProps,
    onSubmitProps: FormikHelpers<ProductInputProps>
  ) => {
    onSubmitProps.setSubmitting(false);
    onSubmitProps.resetForm();
    if (editOrAdd === "edit") {
      onSubmit({
        ...values,
        name: values.name,
        rawPrice: values.rawPrice,
        price: values.price,
        code: values.code,
        color: values.color,
        image: image,
        categoryName: dropdownValue,
        description: values.description,
        stockCount: values.stockCount,
        expirationDate: selectedDate,
      });
    } else if (editOrAdd === "add") {
      let p = {
        id: Math.floor((1 + Math.random()) * 0x10000),
        name: values.name,
        rawPrice: values.rawPrice,
        price: values.price,
        code: values.code,
        color: values.color,
        image: image,
        categoryName: dropdownValue,
        description: values.description,
        stockCount: values.stockCount,
        expirationDate: selectedDate,
      };
      onSubmit(p);
    }
  };

  const validationSchema = yup.object({
    name: yup.string().required(REQUIRED_PRODUCT_NAME_ERROR_MSG),
    rawPrice: yup.number().required(REQUIRED_RAW_PRICE_ERROR_MSG),
    price: yup
      .number()
      .required(REQUIRED_PRICE_ERROR_MSG)
      .moreThan(0, MORE_THAN_ZERO)
      .moreThan(yup.ref("rawPrice"), MORE_THAN_RAW_PRIC),
    code: yup
      .string()
      .required(REQUIRED_Code_ERROR_MSG)
      .length(12)
      .test("productCode", CODE_FORMAT, (data) => {
        return (
          data?.substring(0, 3) === data?.substring(0, 3).toUpperCase() &&
          data?.charAt(3) === "-" &&
          data?.substring(4, 7) === data?.substring(4, 7).toLowerCase() &&
          data?.charAt(7) === "-" &&
          !isNaN(+data?.substring(8, 12))
        );
      })
      .notOneOf(productsCode, "uniqe code"),
    stockCount: yup.number(),
  });

  useEffect(() => {
    handleDateChange(inputField.expirationDate);
    setDropdownValue(inputField.categoryName);
    setImage(inputField.image);
    getAllCategories();
  }, []);

  const getAllCategories = async () => {
    let response = await getCategories();
    setCategories(response.data);
  };

  const classes = useStyles();
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {(formik) => {
        return (
          <Form className={classes.root}>
            <Field
              id="outlined-basic"
              name="name"
              label="name"
              type="text"
              component={TextField}
              variant="outlined"
              style={{ width: editOrAdd === "add" ? "90%" : "50%" }}
            />
            <Field
              id="outlined-basic"
              name="rawPrice"
              label="Raw Price"
              type="text"
              component={TextField}
              variant="outlined"
              style={{ width: editOrAdd === "add" ? "90%" : "50%" }}
            />
            <Field
              id="outlined-basic"
              name="price"
              label="Price"
              type="text"
              component={TextField}
              variant="outlined"
              style={{ width: editOrAdd === "add" ? "90%" : "50%" }}
            />
            <Field
              id="outlined-basic"
              name="code"
              label="Code"
              type="text"
              component={TextField}
              variant="outlined"
              style={{ width: editOrAdd === "add" ? "90%" : "50%" }}
            />
            <input
              id="outlined-basic"
              name="image"
              type="file"
              onChange={handleImageChange}
              style={{ width: editOrAdd === "add" ? "90%" : "50%" }}
            />
            <div style={{ width: editOrAdd === "add" ? "90%" : "50%" }}>
              <DropDown
                label="Category name"
                menuName="categoryName"
                data={categoryNameDropdownData}
                dropdownValue={dropdownValue}
                setDropdownValue={setDropdownValue}
              />
            </div>
            <Field
              id="outlined-basic"
              name="description"
              label="Discription"
              type="text"
              component={TextField}
              variant="outlined"
              multiline
              rows={5}
              rowsMax={10}
              style={{ width: editOrAdd === "add" ? "90%" : "50%" }}
            />
            <Field
              id="outlined-basic"
              name="stockCount"
              label="Stock Count"
              type="text"
              component={TextField}
              variant="outlined"
              style={{ width: editOrAdd === "add" ? "90%" : "50%" }}
            />
            <div style={{ width: editOrAdd === "add" ? "90%" : "50%" }}>
              <Datepicker
                label="Expiration date"
                name="expirationDate"
                datePickerValue={selectedDate}
                setDatePickerValue={handleDateChange}
              />
            </div>
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
              <Button variant="contained" color="secondary">
                Reset
              </Button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}
