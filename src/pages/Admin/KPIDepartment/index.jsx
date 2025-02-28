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

  return (
    <Container className="flex flex-col bg-localWhite h-[95vh] w-[100%] max-w-[100%] ">
      <Header />
      <TableCollape />
      {/* <DataGridComponent
        rows={rows}
        columns={EColumnsKPIDepartment(onView, onEdit, onDelete)}
      /> */}
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
