import React from "react";
import Container from "../../components/common/Container";

import Header from "./Header";
import DataGridComponent from "../../components/common/DataGrid";
import { EColumnsKPIDepartment } from "./constants";
import ModalComponent from "../../components/common/Modal";
import { useDispatch, useSelector } from "react-redux";
import {
  setModalAssignKpiDepartment,
  setDataModalAssignDepartment,
  setModalDeleteAssignDepartment,
} from "../../reduxs/kpiDepartment/kpiDepartmentSlice";
import { EBool, EMode } from "../../constants/enum";
import ModalAssign from "./ModalAssign";
import ModalDelete from "./ModalDelete";

const KPIDepartmentPage = () => {
  const kpiDeptRedux = useSelector((state) => state.kpiDept);
  const dispatch = useDispatch();
  const rows = Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    department: `Department${i + 1}`,
    kpis: `KPIs ${i + 1}`,
    category: `Category ${i + 1}`,
    area: `Area ${i + 1}`,
    type: `Type ${i + 1}`,
    status: "active",
  }));
  const onView = (e) => {
    dispatch(
      setModalAssignKpiDepartment({ mode: EMode.view, open: EBool.true })
    );
    dispatch(setDataModalAssignDepartment(e));
  };

  const onEdit = (e) => {
    dispatch(
      setModalAssignKpiDepartment({ mode: EMode.edit, open: EBool.true })
    );
    dispatch(setDataModalAssignDepartment(e));
  };

  const onDelete = (e) => {
    console.log("=test");
    dispatch(setModalDeleteAssignDepartment(true));
  };
  console.log("=> kpiDeptRedux1", kpiDeptRedux);

  return (
    <Container className="flex flex-col bg-localWhite h-[95vh] w-[100%] max-w-[100%] ">
      <Header />
      <DataGridComponent
        rows={rows}
        columns={EColumnsKPIDepartment(onView, onEdit, onDelete)}
      />
      <ModalComponent
        open={kpiDeptRedux.openModal.open}
        title={`${kpiDeptRedux.openModal.mode} KPIs Department`}
        handleClose={() =>
          dispatch(setModalAssignKpiDepartment({ mode: "", open: EBool.false }))
        }
      >
        <ModalAssign />
      </ModalComponent>
      <ModalComponent
        title={`Delete  KPIs Department`}
        open={kpiDeptRedux.openModalDelete}
        handleClose={() => dispatch(setModalDeleteAssignDepartment(false))}
      >
        <ModalDelete />
      </ModalComponent>
    </Container>
  );
};

export default KPIDepartmentPage;
