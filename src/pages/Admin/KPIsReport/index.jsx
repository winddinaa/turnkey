import React from "react";
import Container from "../../../components/common/Container";

import DataGridComponent from "../../../components/common/DataGrid";
import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";
import { data, EColumnsHistory, headerAssignment } from "./constants";
import TableCollape from "../../../components/common/TableCollape";
import {
  clearKPIsAssignReport,
  setFocusAssignmentReport,
  setFocusKPIsAssignmentReport,
  setKPIsReportModal,
} from "../../../reduxs/kpisAssignReport/kpiAssignReport";
import TabComponent from "../../../components/common/Tab";
import { EMode } from "../../../constants/enum";
import ModalEmployeeInKPIs from "./ModalEmployeeInKPIs";
import { ModalComponent } from "../../../components/common";

const KPIsReport = () => {
  const rows = Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    department: `Department${i + 1}`,
    kpis: `KPIs ${i + 1}`,
    category: `Category ${i + 1}`,
    area: `Area ${i + 1}`,
    type: `Type ${i + 1}`,
  }));

  const dispatch = useDispatch();
  const reportRedux = useSelector((state) => state.kpisAssignReport);

  const handleCollape = (assignment) => {
    delete assignment.expandCollape;
    delete assignment.action;
    dispatch(setFocusAssignmentReport(assignment));
  };

  const handleEmployee = (assignment) => {
    console.log("=> assignment", assignment);
    dispatch(setKPIsReportModal(true));
    dispatch(setFocusKPIsAssignmentReport(assignment));
  };

  console.log("=> reportRedux", reportRedux);
  return (
    <Container className="flex flex-col bg-localWhite h-[95vh] w-[100%] max-w-[100%] ">
      <Header />
      <TableCollape
        getCollapsOpenIndex={handleCollape}
        columns={headerAssignment}
        rows={Array.from({ length: 9 }, (_, i) => ({
          assignId: `as-00${i + 1}`,
          start: `2025-08-01`,
          end: `2025-12-31`,
          type: `type ${i + 1}`,
          status: `active`,
          rows: rows,
          expandCollape: (
            <div className="w-full customtab">
              <TabComponent data={data(handleEmployee)} />
            </div>
          ),
        }))}
      />
      <ModalComponent
        open={reportRedux.openModal}
        title={`KPIs report`}
        size={"xl"}
        handleClose={() => {
          dispatch(clearKPIsAssignReport());
        }}
      >
        <ModalEmployeeInKPIs />
      </ModalComponent>
    </Container>
  );
};

export default KPIsReport;
