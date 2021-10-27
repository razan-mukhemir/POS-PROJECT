import axios from "axios";
import CategoryInputProps from "../pages/categories/type";

const categoriesUrl = "http://127.0.0.1:3002/categories";
const productsUrl = "http://127.0.0.1:3002/products";

export const getCategories = async (id?: number | string) => {
  id = id || "";
  return await axios.get(`${categoriesUrl}/${id}`);
};
export const deleteCategory = async (id: number) => {
  return await axios.delete(`${categoriesUrl}/${id}`);
};
export const editCategory = async (
  id: number,
  category: CategoryInputProps
) => {
  return await axios.put(`${categoriesUrl}/${id}`, category);
};
export const addCategory = async (category: CategoryInputProps) => {
  return await axios.post(`${categoriesUrl}`, category);
};

export const getProducts = async (id?: number | string) => {
  id = id || "";
  return await axios.get(`${productsUrl}/${id}`);
};
export const deleteProduct = async (id: number) => {
  return await axios.delete(`${productsUrl}/${id}`);
};
export const editProduct = async (id: number, product: any) => {
  return await axios.put(`${productsUrl}/${id}`, product);
};
export const addProduct = async (product: any) => {
  return await axios.post(`${productsUrl}`, product);
};
