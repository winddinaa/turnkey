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
  setFucusAssignment,
  setSelectKPIs,
} from "../../../reduxs/kpiDepartment/kpiDepartmentSlice";
import { EBool, EMode, ESelectType } from "../../../constants/enum";
import ModalAssign from "./ModalAssign";
import ModalDelete from "./ModalDelete";
import { convertStringToArray, filterValueSelect } from "../../../utils/helper";
import TableCollape from "../../../components/common/TableCollape";
import ButtonComponent from "../../../components/common/Button";
import { AddEmpIcon, AddFileIcon } from "../../../components/Icon";
import ModalAddEmployee from "./ModalAddEmployee";

const KPIDepartmentPage = () => {
  const kpiDeptRedux = useSelector((state) => state.kpiDept);
  console.log("=> kpiDeptRedux", kpiDeptRedux);
  const dispatch = useDispatch();
  const onView = () => {
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

  const onDelete = () => {
    dispatch(setModalDeleteAssignDepartment(true));
  };

  const handleSelectKPIs = (newSelection) => {
    console.log("=> newSelection", newSelection);
    dispatch(setSelectKPIs(newSelection));
  };
  const handleCollape = (assignment) => {
    console.log("=>assignment", assignment);
    delete assignment.expandCollape;
    delete assignment.action;
    dispatch(setFucusAssignment(assignment));
  };
  return (
    <Container className="flex flex-col bg-localWhite h-[95vh] w-[100%] max-w-[100%] ">
      <Header />
      <TableCollape
        isCollaps
        getCollapsOpenIndex={handleCollape}
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
                assign: `as-00${i + 1}`,
                start: `2025-08-01`,
                end: `2025-12-31`,
                type: `type ${i + 1}`,
                rows: { rows },
                status: `active`,
                expandCollape: (
                  <div className="w-full h-[60vh]">
                    <DataGridComponent
                      rows={rows}
                      columns={EColumnsKPIDepartment(onView, onEdit, onDelete)}
                    />
                  </div>
                ),
              }))
            : Array.from({ length: 9 }, (_, i) => ({
                assign: `as-00${i + 1}`,
                start: `2025-08-01`,
                end: `2025-12-31`,
                type: `type ${i + 1}`,
                status: `active`,
                action: (e) => {
                  return (
                    <div className="flex flex-row gap-2">
                      <ButtonComponent
                        className="w-[20px]  min-w-[40px]"
                        onClick={(e) => {
                          dispatch(
                            setModalAssignKpiDepartment({
                              mode: EMode.add,
                              open: EBool.true,
                            })
                          );
                        }}
                      >
                        <AddFileIcon />
                      </ButtonComponent>
                      <ButtonComponent className="w-[20px] min-w-[40px]">
                        <AddEmpIcon />
                      </ButtonComponent>
                    </div>
                  );
                },
                expandCollape: (
                  <div className="w-full h-[60vh]">
                    <DataGridComponent
                      checkboxSelection
                      rows={rows}
                      onRowSelectionModelChange={handleSelectKPIs}
                      columns={EColumnsKPIDepartment(onView, onEdit, onDelete)}
                    />
                  </div>
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
        <ModalAddEmployee />
      </ModalComponent>

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
