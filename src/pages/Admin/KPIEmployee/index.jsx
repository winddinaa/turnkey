import React from "react";
import Container from "../../../components/common/Container";
import Header from "./Header";
import DataGridComponent from "../../../components/common/DataGrid";
import { EColumnsKPIEmployee } from "./constants";
import ModalComponent from "../../../components/common/Modal";
import { useDispatch, useSelector } from "react-redux";
import { setModalAssignKpieEmployee } from "../../../reduxs/kpiEmployee/kpiEmployeeSlice";
import ModalAssignEmp from "./ModalAssignEmp";

const KPIEmployeePage = () => {
  const rows = Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    department: `Department${i + 1}`,
    kpis: `KPIs ${i + 1}`,
    category: `Category ${i + 1}`,
    area: `Area ${i + 1}`,
    type: `Type ${i + 1}`,
    status: "active",
  }));
  const dispatch = useDispatch();
  const kpiEmpRedux = useSelector((state) => state.kpiEmp);
  console.log("=> kpiEmpRedux", kpiEmpRedux);
  return (
    <Container className="flex flex-col bg-localWhite h-[95vh] w-[100%] max-w-[100%] ">
      <Header />
      <DataGridComponent
        checkboxSelection
        rows={rows}
        columns={EColumnsKPIEmployee()}
      />
      <ModalComponent
        title="Assign KPIs Employee"
        open={kpiEmpRedux.openModal}
        handleClose={() => dispatch(setModalAssignKpieEmployee(false))}
      >
        <ModalAssignEmp />
      </ModalComponent>
    </Container>
  );
};

export default KPIEmployeePage;
