import React, { useState, useEffect } from "react";
import { GridColDef } from "@mui/x-data-grid";
import DataTable from "../../components/dataTable/DataTable";
import Notification from "../../components/notification/Notification";
import ConfirmDialog from "../../components/confirmDialog/ConfirmDialog";
import Popup from "../../components/popup/Popup";
import CategoryForm from "./CategoryForm";
import Buttons from "../../components/buttons/Buttons";
import Header from "../../components/header/Header";
import {
  getCategories,
  deleteCategory,
  editCategory,
  addCategory,
} from "../../service/api";
import CategoryInputProps from "./type";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID" },
  { field: "categoryName", headerName: "Category Name", width: 200 },
  { field: "createdAt", headerName: "Created At", width: 200 },
  {
    field: "actions",
    headerName: "Actions",
    width: 200,
    renderCell: (params) => {
      const onOpenDeleteConfirmDialog = () => {
        setDeleteConfirmDialog({
          isOpen: true,
          title: "Are you sure to delete this record?",
          subTitle: "You can't undo this operation",
          onConfirm: () => {
            deleteCategoryField(params.row.id);
          },
        });
      };
      const onOpenEditPopup = () => {
        setOpenEditPopup({
          isOpen: true,
          title: "Edit Category Form",
          inputField: params.row,
          onSubmit: (category: CategoryInputProps) => {
            editCategoryField(params.row.id, category);
          },
        });
        setEditOrAddField("edit");
      };
      return (
        <div>
          <Buttons
            onClick={onOpenDeleteConfirmDialog}
            variant="contained"
            color="secondary"
          >
            delete
          </Buttons>
          <Buttons onClick={onOpenEditPopup} variant="contained">
            edit
          </Buttons>
        </div>
      );
    },
  },
];
let setDeleteConfirmDialog: any;
let deleteCategoryField: any;
let setOpenEditPopup: any;
let editCategoryField: any;
let setEditOrAddField: any;

const Categories: React.FC = () => {
  const [categories, setCategories] = useState([]);
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });
  const [confirmDialog, setConfirmDialog] = useState({
    isOpen: false,
    title: "",
    subTitle: "",
    onConfirm: () => {},
  });
  const [openPopup, setOpenPopup] = useState({
    isOpen: false,
    title: "",
    inputField: {},
    onSubmit: (category: CategoryInputProps) => {},
  });
  const [editOrAdd, setEditOrAdd] = useState("");
  useEffect(() => {
    setDeleteConfirmDialog = setConfirmDialog;
    deleteCategoryField = deleteCategoryData;
    setOpenEditPopup = setOpenPopup;
    editCategoryField = editCategoryData;
    setEditOrAddField = setEditOrAdd;
    getAllCategories();
  }, []);
  const deleteCategoryData = async (id: number) => {
    setConfirmDialog({
      ...confirmDialog,
      isOpen: false,
    });
    await deleteCategory(id);
    getAllCategories();
    setNotify({
      isOpen: true,
      message: "Deleted Successfully",
      type: "error",
    });
  };
  const getAllCategories = async () => {
    let response = await getCategories();
    setCategories(response.data);
  };
  const editCategoryData = async (id: number, category: CategoryInputProps) => {
    const response = await editCategory(id, category);
    getAllCategories();
    setNotify({
      isOpen: true,
      message: "Edited Successfully",
      type: "success",
    });
  };
  const addCategoryData = async (category: CategoryInputProps) => {
    await addCategory(category);
    getAllCategories();
    setNotify({
      isOpen: true,
      message: "Added Successfully",
      type: "success",
    });
  };
  const openAddPopup = () => {
    setEditOrAdd("add");
    setOpenPopup({
      ...openPopup,
      isOpen: true,
      title: "Add Category Form",
      inputField: { categoryName: "", createdAt: "" },
      onSubmit: (category: CategoryInputProps) => {
        addCategoryData(category);
      },
    });
  };

  const handleResetData = () => {
    getAllCategories();
  };

  return (
    <div>
      <Header
        openAddPopup={openAddPopup}
        data={categories}
        setData={setCategories}
        resetData={handleResetData}
        felterTerm="categoryName"
      />
      <DataTable
        tableData={categories}
        tableHeader={columns}
        autoPageSize={true}
      />
      <Popup openPopup={openPopup} setOpenPopup={setOpenPopup}>
        <CategoryForm
          editOrAdd={editOrAdd}
          onSubmit={openPopup.onSubmit}
          inputField={openPopup.inputField}
          categories={categories}
        />
      </Popup>
      <Notification notify={notify} setNotify={setNotify} />
      <ConfirmDialog
        confirmDialog={confirmDialog}
        setConfirmDialog={setConfirmDialog}
      />
    </div>
  );
};

export default Categories;
