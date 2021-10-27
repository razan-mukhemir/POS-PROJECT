import { GridColDef } from "@mui/x-data-grid";
export interface DataTableProps<T> {
  tableData: T[];
  tableHeader: GridColDef[];
  autoPageSize: boolean;
}
