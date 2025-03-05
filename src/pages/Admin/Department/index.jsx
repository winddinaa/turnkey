import React from "react";
import Header from "./Header";
import {
  Container,
  DataGridComponent,
  ModalComponent,
} from "../../../components/common";
import { useDispatch, useSelector } from "react-redux";
import {
  clearDepartment,
  setDepartmentDataModal,
  setDepartmentDeleteModal,
  setDepartmentModal,
} from "../../../reduxs/department/departmentSlice";
import { EColumnsDepartment, rows } from "./constants";
import ModalDepartment from "./ModalDepartment";
import ModalDelete from "./ModalDelete";
import isEmpty from "is-empty";
import { EBool, EMode } from "../../../constants/enum";

const DepartmentPage = () => {
  const dishpatch = useDispatch();
  const DepartmentRedux = useSelector((state) => state.dept);

  const onView = (e) => {
    if (!isEmpty(e)) {
      dishpatch(
        setDepartmentDataModal({
          ...e,
          date: [e.startDate, e.endDate],
        })
      );
      dishpatch(setDepartmentModal({ mode: EMode.view, open: EBool.true }));
    }
  };
  const onEdit = (e) => {
    if (!isEmpty(e)) {
      dishpatch(
        setDepartmentDataModal({
          ...e,
        })
      );
      dishpatch(setDepartmentModal({ mode: EMode.edit, open: EBool.true }));
    }
  };
  const onDelete = (e) => {
    if (!isEmpty(e)) {
      dishpatch(
        setDepartmentDataModal({
          ...e,
          date: [e.startDate, e.endDate],
        })
      );
      dishpatch(setDepartmentDeleteModal(EBool.true));
    }
  };

  return (
    <Container className="flex flex-col bg-localWhite h-[95vh] w-[100%] max-w-[100%] ">
      <Header />
      <DataGridComponent
        disableRowSelectionOnClick
        rows={rows}
        getRowId={(row) => {
          return row.departmentId;
        }}
        columns={EColumnsDepartment(onView, onEdit, onDelete)}
      />
      <ModalComponent
        title="Department"
        open={DepartmentRedux.openModal.open}
        handleClose={() => {
          dishpatch(clearDepartment());
        }}
      >
        <ModalDepartment />
      </ModalComponent>
      <ModalComponent
        title="Department"
        open={DepartmentRedux.openModalDelete}
        handleClose={() => {
          dishpatch(clearDepartment());
        }}
      >
        <ModalDelete />
      </ModalComponent>
    </Container>
  );
};

export default DepartmentPage;
