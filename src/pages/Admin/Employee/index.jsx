import React from "react";
import Header from "./Header";
import {
  Container,
  DataGridComponent,
  ModalComponent,
} from "../../../components/common";
import { useDispatch, useSelector } from "react-redux";
import {
  clearEmployee,
  setEmployeeDataModal,
  setEmployeeDeleteModal,
  setEmployeeModal,
} from "../../../reduxs/employee/employeeSlice";
import { EColumnsEmployee, rows } from "./constants";
import ModalEmployee from "./ModalEmployee";
import ModalDelete from "./ModalDelete";
import isEmpty from "is-empty";
import { EBool, EMode } from "../../../constants/enum";

const EmployeePage = () => {
  const dishpatch = useDispatch();
  const EmployeeRedux = useSelector((state) => state.emp);

  const onView = (e) => {
    if (!isEmpty(e)) {
      dishpatch(
        setEmployeeDataModal({
          ...e,
          date: [e.startDate, e.endDate],
        })
      );
      dishpatch(setEmployeeModal({ mode: EMode.view, open: EBool.true }));
    }
  };
  const onEdit = (e) => {
    if (!isEmpty(e)) {
      dishpatch(
        setEmployeeDataModal({
          ...e,
        })
      );
      dishpatch(setEmployeeModal({ mode: EMode.edit, open: EBool.true }));
    }
  };
  const onDelete = (e) => {
    if (!isEmpty(e)) {
      dishpatch(
        setEmployeeDataModal({
          ...e,
          date: [e.startDate, e.endDate],
        })
      );
      dishpatch(setEmployeeDeleteModal(EBool.true));
    }
  };

  return (
    <Container className="flex flex-col bg-localWhite h-[95vh] w-[100%] max-w-[100%] ">
      <Header />
      <DataGridComponent
        disableRowSelectionOnClick
        rows={rows}
        getRowId={(row) => {
          return row.employeeId;
        }}
        columns={EColumnsEmployee(onView, onEdit, onDelete)}
      />
      <ModalComponent
        title="Employee"
        open={EmployeeRedux.openModal.open}
        handleClose={() => {
          dishpatch(clearEmployee());
        }}
      >
        <ModalEmployee />
      </ModalComponent>
      <ModalComponent
        title="Employee"
        open={EmployeeRedux.openModalDelete}
        handleClose={() => {
          dishpatch(clearEmployee());
        }}
      >
        <ModalDelete />
      </ModalComponent>
    </Container>
  );
};

export default EmployeePage;
