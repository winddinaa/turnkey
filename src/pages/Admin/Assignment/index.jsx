import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";
import { EColumnsAssignment, rows } from "./constants";
import ModalAssignment from "./ModalAssignment";

import { setModalAssignment } from "../../../reduxs/assignment/assignmentSlice";
import {
  Container,
  DataGridComponent,
  ModalComponent,
} from "../../../components/common";
import { EBool } from "../../../constants/enum";

const AssignmentPage = () => {
  const onView = () => {};
  const onEdit = () => {};
  const onDelete = () => {};
  const dishpatch = useDispatch();
  const assignRedux = useSelector((state) => state.assign);
  return (
    <Container className="flex flex-col bg-localWhite h-[95vh] w-[100%] max-w-[100%] ">
      <Header />
      <DataGridComponent
        rows={rows}
        getRowId={(row) => {
          return row.assignmentId;
        }}
        columns={EColumnsAssignment(onView, onEdit, onDelete)}
      />
      <ModalComponent
        title="Assignment"
        open={assignRedux.openModal.open}
        handleClose={() => {
          dishpatch(setModalAssignment(EBool.false));
        }}
      >
        <ModalAssignment />
      </ModalComponent>
    </Container>
  );
};

export default AssignmentPage;
