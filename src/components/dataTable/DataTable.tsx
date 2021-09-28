import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { DataTableProps } from "./type";
import useStyles from "./dataTableStyle";

const DataTable: React.FC<DataTableProps> = ({
  tableData,
  tableHeader,
  autoPageSize,
}) => {
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
