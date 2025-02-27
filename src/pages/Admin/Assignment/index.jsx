import React from "react";
import Container from "../../../components/common/Container";
import Header from "./Header";
import DataGridComponent from "../../../components/common/DataGrid";
import { EColumnsAssignment, rows } from "./constants";

const AssignmentPage = () => {
  const onView = () => {};
  const onEdit = () => {};
  const onDelete = () => {};
  return (
    <Container className="flex flex-col bg-localWhite h-[95vh] w-[100%] max-w-[100%] ">
      <Header />
      <DataGridComponent
        rows={rows}
        getRowId={(row) => {
          console.log("=>  row.assigmentId", row);
          return row.assignmentId;
        }}
        columns={EColumnsAssignment(onView, onEdit, onDelete)}
      />
    </Container>
  );
};

export default AssignmentPage;
