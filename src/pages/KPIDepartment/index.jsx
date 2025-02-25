import React from "react";
import Container from "../../components/common/Container";

import Header from "./Header";
import DataGridComponent from "../../components/common/DataGridComponent";
import { EColumnsKPIDepartment } from "./constants";

const KPIDepartmentPage = () => {
  const rows = Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    departmentName: `Department${i + 1}`,
    kpis: `KPIs ${i + 1}`,
    categoryName: `Category ${i + 1}`,
    areaName: `Area ${i + 1}`,
    type: `Type ${i + 1}`,
    status: "active",
  }));

  return (
    <Container className="flex flex-col bg-localWhite h-[95vh] w-[100%] max-w-[100%] ">
      <Header />
      <DataGridComponent rows={rows} columns={EColumnsKPIDepartment} />
    </Container>
  );
};

export default KPIDepartmentPage;
