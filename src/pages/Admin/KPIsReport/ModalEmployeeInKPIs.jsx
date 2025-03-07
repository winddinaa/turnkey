import React from "react";
import { DataGridComponent, TextComponent } from "../../../components/common";
import { useDispatch, useSelector } from "react-redux";
import { EColumnsEmpInKPIs, empRows } from "./constants";
import ButtonComponent from "../../../components/common/Button";
import { setEmpForDelete } from "../../../reduxs/kpiDepartment/kpiDepartmentSlice";
import isEmpty from "is-empty";

const ModalEmployeeInKPIs = () => {
  const reportRedux = useSelector((state) => state.kpisAssignReport);
  const sizeScreenRedux = useSelector((state) => state.screenSize);
  const dispatch = useDispatch();
  console.log("=> reportRedux", reportRedux);

  const onDelete = (e) => {
    if (isEmpty(reportRedux.empSelectforDelete.find((item) => item === e.id))) {
      dispatch(setEmpForDelete([...reportRedux.empSelectforDelete, e.id]));
    } else {
      dispatch(
        setEmpForDelete(
          reportRedux.empSelectforDelete.filter((itemEmp) => itemEmp !== e.id)
        )
      );
    }
  };
  return (
    <div className="flex flex-col gap-5 ">
      <div className="flex flex-col sticky -top-4 z-10 bg-localWhite  ">
        <div className="flex flex-row ">
          <TextComponent variant="h6" className="mr-2">
            Type
          </TextComponent>
          <TextComponent variant="paragraph" className="mr-5">
            {reportRedux.focusKPIs.type}
          </TextComponent>
          <TextComponent variant="h6" className="mr-2">
            Status
          </TextComponent>
          <TextComponent variant="paragraph">
            {reportRedux.focusKPIs.status}
          </TextComponent>
        </div>
        <div className="flex flex-row mb-5">
          <TextComponent variant="h6" className="mr-2">
            Department
          </TextComponent>
          <TextComponent variant="paragraph" className="mr-5">
            {reportRedux.focusKPIs.department}
          </TextComponent>
          <TextComponent variant="h6" className="mr-2">
            Area
          </TextComponent>
          <TextComponent variant="paragraph" className="mr-5">
            {reportRedux.focusKPIs.area}
          </TextComponent>
          <TextComponent variant="h6" className="mr-2">
            Category
          </TextComponent>
          <TextComponent variant="paragraph" className="mr-5">
            {reportRedux.focusKPIs.categories}
          </TextComponent>
          <TextComponent variant="h6" className="mr-2">
            KPI
          </TextComponent>
          <TextComponent variant="paragraph" className="mr-5">
            {reportRedux.focusKPIs.kpis}
          </TextComponent>
        </div>
      </div>

      <div className={`h-[${sizeScreenRedux.isLargeScreen ? "60vh" : "40vh"}]`}>
        <DataGridComponent
          getRowId={(row) => row.id}
          rows={empRows}
          columns={EColumnsEmpInKPIs(reportRedux, onDelete)}
        />
      </div>
    </div>
  );
};

export default ModalEmployeeInKPIs;
