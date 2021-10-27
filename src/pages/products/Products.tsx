import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GridColDef } from "@mui/x-data-grid";
import Button from "@material-ui/core/Button";
import DataTable from "../../components/dataTable/DataTable";
import Notification from "../../components/notification/Notification";
import ConfirmDialog from "../../components/confirmDialog/ConfirmDialog";
import Popup from "../../components/popup/Popup";
import TableHeader from "../../components/dataTable/tableHeader/TableHeader";
import DateFilter from "./dateFilter/DateFilter";
import ProductForm from "./ProductForm";
import ProductInfo from "./ProductInfo";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import EditIcon from "@material-ui/icons/Edit";
import PageviewIcon from "@material-ui/icons/Pageview";
import { getProducts, deleteProduct, addProduct } from "../../service/api";
import ProductInputProps from "./type";
import { ConfirmDialogProps } from "../../components/confirmDialog/type";
import { OpenViewPopupProps } from "../../components/popup/type";
import { NotifyProps } from "../../components/notification/type";

const columns: GridColDef[] = [
  { field: "code", headerName: "Code", width: 200 },
  { field: "name", headerName: "Name", width: 200 },
  { field: "categoryName", headerName: "Category", width: 200 },
  { field: "description", headerName: "Product Descriotion", width: 200 },
  { field: "rawPrice", headerName: "tax %", width: 200 },
  { field: "price", headerName: "Price", width: 200 },
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
            deleteProductField(params.row.id);
          },
        });
      };
      const onOpenViewPopup = () => {
        setOpenViewPopupModal({
          isOpen: true,
          title: "View Product Info",
          inputField: params.row,
          onSubmit: () => {},
        });
      };
      return (
        <div>
          <Button onClick={onOpenDeleteConfirmDialog}>
            <DeleteForeverIcon />
          </Button>
          <Button>
            <Link
              to={{
                pathname: `/editProduct/${params.row.id}`,
                state: params.row,
              }}
            >
              <EditIcon />
            </Link>
          </Button>
          <Button onClick={onOpenViewPopup}>
            <PageviewIcon />
          </Button>
        </div>
      );
    },
  },
];

let setDeleteConfirmDialog: (value: ConfirmDialogProps) => void;
let deleteProductField: (id: number) => void;
let setOpenViewPopupModal: (value: OpenViewPopupProps) => void;

const Products: React.FC = () => {
  const [products, setProducts] = useState<ProductInputProps[]>([]);
  const [notify, setNotify] = useState<NotifyProps>({
    isOpen: false,
    message: "",
    type: "success",
  });
  const [confirmDialog, setConfirmDialog] = useState({
    isOpen: false,
    title: "",
    subTitle: "",
    onConfirm: () => {},
  });
  const [openViewPopup, setOpenViewPopup] = useState({
    isOpen: false,
    title: "",
    inputField: {
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
    },
    onSubmit: () => {},
  });
  const [openPopup, setOpenPopup] = useState({
    isOpen: false,
    title: "",
    inputField: {
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
    },
    onSubmit: (product: ProductInputProps) => {},
  });
  const [editOrAdd, setEditOrAdd] = useState("");

  useEffect(() => {
    setDeleteConfirmDialog = setConfirmDialog;
    deleteProductField = deleteProductData;
    setOpenViewPopupModal = setOpenViewPopup;
    getAllProducts();
  }, []);

  const deleteProductData = async (id: number) => {
    setConfirmDialog({
      ...confirmDialog,
      isOpen: false,
    });
    await deleteProduct(id);
    getAllProducts();
    setNotify({
      isOpen: true,
      message: "Deleted Successfully",
      type: "error",
    });
  };

  const getAllProducts = async () => {
    let response = await getProducts();
    setProducts(response.data);
  };

  const addCategoryData = async (product: ProductInputProps) => {
    await addProduct(product);
    getAllProducts();
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
      title: "Add product Form",
      inputField: {
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
      },
      onSubmit: (product: ProductInputProps) => {
        addCategoryData(product);
      },
    });
  };

  const handleResetData = () => {
    getAllProducts();
  };
  return (
    <div>
      <TableHeader
        openAddPopup={openAddPopup}
        data={products}
        setData={setProducts}
        resetData={handleResetData}
        felterTerm="global"
      >
        <DateFilter data={products} setData={setProducts} />
        <Button color="primary" variant="contained" onClick={openAddPopup}>
          Add Product
        </Button>
      </TableHeader>
      <DataTable
        tableData={products}
        tableHeader={columns}
        autoPageSize={true}
      />
      <Popup openPopup={openPopup} setOpenPopup={setOpenPopup}>
        <ProductForm
          editOrAdd={editOrAdd}
          onSubmit={openPopup.onSubmit}
          inputField={openPopup.inputField}
          products={products}
        />
      </Popup>
      <Popup openPopup={openViewPopup} setOpenPopup={setOpenViewPopup}>
        <ProductInfo productInfo={openViewPopup.inputField} />
      </Popup>
      <Notification
        notify={notify}
        setNotify={setNotify}
        snackbarOrigins={{ vertical: "top", horizontal: "right" }}
      />
      <ConfirmDialog
        confirmDialog={confirmDialog}
        setConfirmDialog={setConfirmDialog}
      />
    </div>
  );
};

export default Products;
