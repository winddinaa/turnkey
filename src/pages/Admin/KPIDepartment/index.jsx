import Container from "../../../components/common/Container";

import Header from "./Header";
import DataGridComponent from "../../../components/common/DataGrid";
import {
  EColumnsKPIDepartment,
  headerAssignment,
  headerDraft,
  mockArea,
  mockCategory,
  mockDraftDepartment,
  mockKPI,
  rows,
} from "./constants";
import ModalComponent from "../../../components/common/Modal";
import { useDispatch, useSelector } from "react-redux";
import {
  setModalAssignKpiDepartment,
  setDataModalAssignDepartment,
  setModalDeleteAssignDepartment,
  setFocusAssignment,
  setSelectKPIs,
  setModalAssignKPIsEmployees,
  clearAssignDepartment,
  setModalEmployeeInKPIs,
  setDataEmpInKPIs,
} from "../../../reduxs/kpiDepartment/kpiDepartmentSlice";
import { EBool, EMode } from "../../../constants/enum";
import ModalAssign from "./ModalAssign";
import ModalDelete from "./ModalDelete";
import TableCollape from "../../../components/common/TableCollape";
import ButtonComponent from "../../../components/common/Button";
import { AddEmpIcon, AddFileIcon } from "../../../components/Icon";
import ModalAddEmployee from "./ModalAddEmployee";
import ModalEmployeeInKPIs from "./ModalEmployeeInKPIs";

const KPIDepartmentPage = () => {
  const kpiDeptRedux = useSelector((state) => state.kpiDept);
  const dispatch = useDispatch();
  const onView = () => {
    dispatch(
      setModalAssignKpiDepartment({ mode: EMode.view, open: EBool.true })
    );
  };

  const onEdit = (e) => {
    dispatch(
      setModalAssignKpiDepartment({ mode: EMode.edit, open: EBool.true })
    );
    console.log("=> e", e);
    dispatch(setDataModalAssignDepartment());
  };

  const onOpenEmp = (e) => {
    dispatch(setModalEmployeeInKPIs(true));
    dispatch(setDataEmpInKPIs(e));
  };

  const onDelete = () => {
    dispatch(setModalDeleteAssignDepartment(true));
  };

  const handleSelectKPIs = (newSelection) => {
    dispatch(setSelectKPIs(newSelection));
  };
  const handleCollape = (assignment) => {
    delete assignment.expandCollape;
    delete assignment.action;
    dispatch(setFocusAssignment(assignment));
  };
  return (
    <Container className="flex flex-col bg-localWhite h-[95vh] w-[100%] max-w-[100%] ">
      <Header />
      <TableCollape
        isCollaps
        getCollapsOpenIndex={handleCollape}
        columns={kpiDeptRedux.isDraft ? headerDraft : headerAssignment}
        rows={
          kpiDeptRedux.isDraft
            ? mockDraftDepartment(onView, onEdit, onDelete)
            : Array.from({ length: 9 }, (_, i) => ({
                assignId: `as-00${i + 1}`,
                start: `2025-08-01`,
                end: `2025-12-31`,
                type: `type ${i + 1}`,
                status: `active`,
                rows: rows,
                action: (e) => {
                  return (
                    <div className="flex flex-row gap-2">
                      <ButtonComponent
                        className="w-[20px]  min-w-[40px]"
                        title="Assign KPIs"
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
                      {kpiDeptRedux.focusAssignmentData?.assignId ===
                        e.assignId &&
                        kpiDeptRedux.selectKPIs.length > 0 && (
                          <ButtonComponent
                            className="w-[20px] min-w-[40px]"
                            title="Assign Employee"
                            onClick={(e) => {
                              dispatch(
                                setModalAssignKPIsEmployees({
                                  mode: EMode.add,
                                  open: EBool.true,
                                })
                              );
                            }}
                          >
                            <AddEmpIcon />
                          </ButtonComponent>
                        )}
                    </div>
                  );
                },
                expandCollape: (
                  <div className="w-full h-[60vh]">
                    <DataGridComponent
                      checkboxSelection
                      rows={rows}
                      onRowSelectionModelChange={handleSelectKPIs}
                      columns={EColumnsKPIDepartment(
                        onView,
                        onEdit,
                        onDelete,
                        onOpenEmp
                      )}
                    />
                  </div>
                ),
              }))
        }
      />
      <ModalComponent
        open={kpiDeptRedux.modalEmployeeInKPIs}
        title={`Assignment ID: ${kpiDeptRedux.focusAssignmentData?.assignId}`}
        size={"lg"}
        handleClose={() => {
          dispatch(clearAssignDepartment());
        }}
      >
        <ModalEmployeeInKPIs />
      </ModalComponent>

      <ModalComponent
        open={kpiDeptRedux.modalAssignEmployees.open}
        title={` Assign KPIs employee`}
        size={"lg"}
        handleClose={() => {
          dispatch(clearAssignDepartment());
        }}
      >
        <ModalAddEmployee />
      </ModalComponent>

      <ModalComponent
        open={kpiDeptRedux.openModal.open}
        title={`Assign KPIs`}
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
