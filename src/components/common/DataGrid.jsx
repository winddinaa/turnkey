import React from "react";
import PropTypes from "prop-types";
import { DataGrid } from "@mui/x-data-grid";

const DataGridComponent = ({
  columns = [
    { field: "col1", headerName: "Column 1", width: 150 },
    { field: "col2", headerName: "Column 2", width: 150 },
  ],
  rows = [
    { id: 1, col1: "Hello", col2: "World" },
    { id: 2, col1: "DataGridPro", col2: "is Awesome" },
    { id: 3, col1: "MUI", col2: "is Amazing" },
  ],
  checkboxSelection = false,
  getRowId,
  disableRowSelectionOnClick = false,
  ...rest
}) => {
  return (
    <div className="h-[80%] w-[100%] overflow-x-auto">
      <DataGrid
        rows={rows}
        columns={columns}
        checkboxSelection={checkboxSelection}
        getRowId={getRowId}
        disableRowSelectionOnClick={disableRowSelectionOnClick}
        {...rest}
      />
    </div>
  );
};

DataGridComponent.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.any).isRequired,
  rows: PropTypes.arrayOf(PropTypes.any).isRequired,
  checkboxSelection: PropTypes.bool,
  disableSelectionOnClick: PropTypes.bool,
};

export default DataGridComponent;
