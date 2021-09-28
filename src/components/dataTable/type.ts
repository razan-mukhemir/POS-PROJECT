import CategoryInputProps from "../../pages/categories/type";
import { GridColDef } from "@mui/x-data-grid";
export interface DataTableProps {
  tableData: CategoryInputProps[];
  tableHeader: GridColDef[];
  autoPageSize: boolean;
}
