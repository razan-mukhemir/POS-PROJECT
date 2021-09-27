import React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import CategoryInputProps from "../../pages/categories/type";
import useStyles from "./dataTableStyle";

const DataTable: React.FC<{
  tableData: CategoryInputProps[];
  tableHeader: GridColDef[];
  autoPageSize: boolean;
}> = ({ tableData, tableHeader, autoPageSize }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <DataGrid
        rows={tableData}
        columns={tableHeader}
        autoPageSize={autoPageSize}
      />
    </div>
  );
};

export default DataTable;
