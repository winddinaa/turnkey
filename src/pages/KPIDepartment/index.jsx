import React from "react";
import Container from "../../components/common/Container";

import Header from "./Header";
import DataGridComponent from "../../components/common/DataGrid";
import { EColumnsKPIDepartment } from "./constants";
import ModalComponent from "../../components/common/Modal";
import { useDispatch, useSelector } from "react-redux";
import { setModalAssignKpiDepartment } from "../../reduxs/kpiDepartment/kpiDepartmentSlice";
import { EBool } from "../../constants/enum";
import ModalAssign from "./ModalAssign";

const KPIDepartmentPage = () => {
  const kpiDeptRedux = useSelector((state) => state.kpiDept);
  const dispatch = useDispatch();
  const rows = Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    department: `Department${i + 1}`,
    kpis: `KPIs ${i + 1}`,
    category: `Category ${i + 1}`,
    areaName: `Area ${i + 1}`,
    type: `Type ${i + 1}`,
    status: "active",
  }));
  console.log("=> kpiDeptRedux", kpiDeptRedux);
  return (
    <Container className="flex flex-col bg-localWhite h-[95vh] w-[100%] max-w-[100%] ">
      <Header />
      <DataGridComponent rows={rows} columns={EColumnsKPIDepartment} />
      <ModalComponent
        open={kpiDeptRedux.openModal.open}
        title={`${kpiDeptRedux.openModal.mode} KPIs Department`}
        handleClose={() =>
          dispatch(setModalAssignKpiDepartment({ mode: "", open: EBool.false }))
        }
      >
        <ModalAssign />
      </ModalComponent>
    </Container>
  );
};

export default KPIDepartmentPage;
