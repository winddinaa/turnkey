import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";
import { EColumnsAssignment, rows } from "./constants";
import ModalAssignment from "./ModalAssignment";

import {
  clearAssignment,
  setAssignDataModal,
  setModalAssignment,
} from "../../../reduxs/assignment/assignmentSlice";
import {
  Container,
  DataGridComponent,
  ModalComponent,
} from "../../../components/common";
import { EMode } from "../../../constants/enum";
import isEmpty from "is-empty";

const AssignmentPage = () => {
  const dishpatch = useDispatch();
  const assignRedux = useSelector((state) => state.assign);

  const onView = (e) => {
    if (!isEmpty(e)) {
      dishpatch(
        setAssignDataModal({
          ...e,
          date: [e.startDate, e.endDate],
        })
      );
      dishpatch(setModalAssignment({ mode: EMode.view, open: true }));
    }
  };
  const onEdit = (e) => {
    if (!isEmpty(e)) {
      dishpatch(
        setAssignDataModal({
          ...e,
          date: [e.startDate, e.endDate],
        })
      );
      dishpatch(setModalAssignment({ mode: EMode.edit, open: true }));
    }
  };
  const onDelete = () => {};
  console.log("=> assignRedux", assignRedux);

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
          dishpatch(clearAssignment());
        }}
      >
        <ModalAssignment />
      </ModalComponent>
    </Container>
  );
};

export default AssignmentPage;
