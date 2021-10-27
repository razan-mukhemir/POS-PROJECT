import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { DataTableProps } from "./type";
import useStyles from "./style";

const DataTable = <T extends object>(props: DataTableProps<T>) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <DataGrid
        rows={props.tableData}
        columns={props.tableHeader}
        autoPageSize={props.autoPageSize}
      />
    </div>
  );
};

export default DataTable;
