import React from "react";
import Container from "../../../components/common/Container";

import DataGridComponent from "../../../components/common/DataGrid";
import { useSelector } from "react-redux";
import Header from "./Header";
import { EColumnsHistory } from "./constants";

const KPIHistoryPage = () => {
  const rows = Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    department: `Department${i + 1}`,
    kpis: `KPIs ${i + 1}`,
    category: `Category ${i + 1}`,
    area: `Area ${i + 1}`,
    type: `Type ${i + 1}`,
  }));

  const kpiEmpRedux = useSelector((state) => state.kpiEmp);
  console.log("=> kpiEmpRedux", kpiEmpRedux);
  return (
    <Container className="flex flex-col bg-localWhite h-[95vh] w-[100%] max-w-[100%] ">
      <Header />
      <DataGridComponent rows={rows} columns={EColumnsHistory()} />
    </Container>
  );
};

export default KPIHistoryPage;
