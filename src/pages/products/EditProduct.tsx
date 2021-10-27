import React, { useState, useEffect } from "react";
import ProductForm from "./ProductForm";
import ProductInputProps from "./type";
import { useHistory, useParams } from "react-router-dom";
import { editProduct } from "../../service/api";

const EditProduct: React.FC = (props: any) => {
  const { state } = props.location;
  const { id } = useParams<any>();
  let history = useHistory();

  const editProductData = async (id: number, product: ProductInputProps) => {
    const response = await editProduct(id, product);
    history.push("/products");
  };
  return (
    <>
      <ProductForm
        editOrAdd={"edit"}
        onSubmit={(product: ProductInputProps) => {
          editProductData(id, product);
        }}
        inputField={state}
        products={[]}
      />
    </>
  );
};

export default EditProduct;
