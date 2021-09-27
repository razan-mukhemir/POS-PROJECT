import React, { useState, useEffect, useContext } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import CategoryInputProps from "../pages/categories/type";

const DataTable: React.FC<{
  tableData: CategoryInputProps[];
  tableHeader: GridColDef[];
  autoPageSize: boolean;
}> = ({ tableData, tableHeader, autoPageSize }) => {
  return (
    <div style={{ height: "50vh", width: "70%" }}>
      <DataGrid
        rows={tableData}
        columns={tableHeader}
        autoPageSize={autoPageSize}
      />
    </div>
  );
};

export default DataTable;
