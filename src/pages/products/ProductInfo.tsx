import { Typography } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import ProductInputProps from "./type";

const ProductInfo: React.FC<{ productInfo: ProductInputProps }> = ({
  productInfo,
}) => {
  const [values, setValues] = useState({
    id: 0,
    name: "",
    rawPrice: 0,
    price: 0,
    code: "",
    color: "",
    image: "",
    categoryName: "",
    description: "",
    stockCount: 0,
    expirationDate: new Date(),
  });

  useEffect(() => {
    setValues(productInfo);
  }, []);
  return (
    <div>
      <Typography component="h4">Product ID: {values.id}</Typography>
      <Typography component="h4">Product Name: {values.name}</Typography>
      <Typography component="h4">
        Product Raw Price: {values.rawPrice}
      </Typography>
      <Typography component="h4">Product Price: {values.price}</Typography>
      <Typography component="h4">Product Code: {values.code}</Typography>
      <Typography component="h4">Product Color: {values.color}</Typography>
      <Typography component="h4">Product Image: {values.image}</Typography>
      <Typography component="h4">
        Category Name: {values.categoryName}
      </Typography>
      <Typography component="h4">
        Product Description: {values.description}
      </Typography>
      <Typography component="h4">
        Product Stock Count: {values.stockCount}
      </Typography>
      <img src={values.image} alt="product image" />
    </div>
  );
};

export default ProductInfo;
