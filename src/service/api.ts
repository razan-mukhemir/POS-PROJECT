import axios from "axios";

const categoriesUrl = "http://127.0.0.1:3002/categories";
export const getCategories = async (id?: number | string) => {
  id = id || "";
  return await axios.get(`${categoriesUrl}/${id}`);
};
export const deleteCategory = async (id: number) => {
  return await axios.delete(`${categoriesUrl}/${id}`);
};
export const editCategory = async (id: number, category: any) => {
  return await axios.put(`${categoriesUrl}/${id}`, category);
};
export const addCategory = async (category: any) => {
  return await axios.post(`${categoriesUrl}`, category);
};
