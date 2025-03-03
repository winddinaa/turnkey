import React from "react";
import Container from "../../../components/common/Container";

import Header from "./Header";
import DataGridComponent from "../../../components/common/DataGrid";
import {
  EColumnsKPIDepartment,
  mockArea,
  mockCategory,
  mockKPI,
  rows,
} from "./constants";
import ModalComponent from "../../../components/common/Modal";
import { useDispatch, useSelector } from "react-redux";
import {
  setModalAssignKpiDepartment,
  setDataModalAssignDepartment,
  setModalDeleteAssignDepartment,
} from "../../../reduxs/kpiDepartment/kpiDepartmentSlice";
import { EBool, EMode, ESelectType } from "../../../constants/enum";
import ModalAssign from "./ModalAssign";
import ModalDelete from "./ModalDelete";
import { convertStringToArray, filterValueSelect } from "../../../utils/helper";
import TableCollape from "../../../components/common/TableCollape";
import ButtonComponent from "../../../components/common/Button";

const KPIDepartmentPage = () => {
  const kpiDeptRedux = useSelector((state) => state.kpiDept);
  const dispatch = useDispatch();
  const onView = (e) => {
    dispatch(
      setModalAssignKpiDepartment({ mode: EMode.view, open: EBool.true })
    );
    let bodyShow = {
      ...e,
      kpis: filterValueSelect(
        convertStringToArray(e.kpis),
        mockKPI,
        ESelectType.multi
      ),
      categories: filterValueSelect(
        convertStringToArray(e.categories),
        mockCategory,
        ESelectType.multi
      ),
      area: filterValueSelect(e.area, mockArea, ESelectType.single),
    };
    dispatch(setDataModalAssignDepartment(bodyShow));
  };

  const onEdit = (e) => {
    dispatch(
      setModalAssignKpiDepartment({ mode: EMode.edit, open: EBool.true })
    );

    let bodyShow = {
      ...e,
      kpis: filterValueSelect(
        convertStringToArray(e.kpis),
        mockKPI,
        ESelectType.multi
      ),
    };
    dispatch(setDataModalAssignDepartment(bodyShow));
  };

  const onDelete = (e) => {
    dispatch(setModalDeleteAssignDepartment(true));
  };

  const handleOnClickAssign = (e) => {
    dispatch(
      setModalAssignKpiDepartment({
        mode: EMode.add,
        open: EBool.true,
      })
    );
  };
  return (
    <Container className="flex flex-col bg-localWhite h-[95vh] w-[100%] max-w-[100%] ">
      <Header />
      <TableCollape
        isCollaps
        onRowData={handleOnClickAssign}
        columns={
          kpiDeptRedux.isDraft
            ? [
                "Assign ID",
                "Start  Evaluation Date",
                "End  Evaluation Date",
                "Type",
                "Status",
              ]
            : [
                "Assign ID",
                "Start  Evaluation Date",
                "End  Evaluation Date",
                "Type",
                "Status",
                "KPIs Department",
              ]
        }
        rows={
          kpiDeptRedux.isDraft
            ? Array.from({ length: 9 }, (_, i) => ({
                assign: `Assign${i + 1}`,
                start: `2025-08-01`,
                end: `2025-12-31`,
                type: `type ${i + 1}`,
                status: `Status ${i + 1}`,
                expandCollape: (
                  <DataGridComponent
                    rows={rows}
                    columns={EColumnsKPIDepartment(onView, onEdit, onDelete)}
                  />
                ),
              }))
            : Array.from({ length: 9 }, (_, i) => ({
                assign: `Assign${i + 1}`,
                start: `2025-08-01`,
                end: `2025-12-31`,
                type: `type ${i + 1}`,
                status: `Status ${i + 1}`,
                action: (
                  <ButtonComponent
                    className="w-[100px] min-w-[100px] min"
                    onClick={(e) => {}}
                  >
                    Assign
                  </ButtonComponent>
                ),
                expandCollape: (
                  <DataGridComponent
                    rows={rows}
                    columns={EColumnsKPIDepartment(onView, onEdit, onDelete)}
                  />
                ),
              }))
        }
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
