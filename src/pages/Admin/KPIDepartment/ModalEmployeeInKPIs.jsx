import React from "react";
import { DataGridComponent, TextComponent } from "../../../components/common";
import { useDispatch, useSelector } from "react-redux";
import { EColumnsEmpInKPIs, EColumnsEmployee, empRows } from "./constants";
import ButtonComponent from "../../../components/common/Button";
import { setEmpForDelete } from "../../../reduxs/kpiDepartment/kpiDepartmentSlice";
import isEmpty from "is-empty";

const ModalEmployeeInKPIs = () => {
  const kpiDeptRedux = useSelector((state) => state.kpiDept);
  const sizeScreenRedux = useSelector((state) => state.screenSize);
  const dispatch = useDispatch();
  console.log("=> kpiDeptRedux", kpiDeptRedux);

  const onDelete = (e) => {
    if (
      isEmpty(kpiDeptRedux.empSelectforDelete.find((item) => item === e.id))
    ) {
      dispatch(setEmpForDelete([...kpiDeptRedux.empSelectforDelete, e.id]));
    } else {
      dispatch(
        setEmpForDelete(
          kpiDeptRedux.empSelectforDelete.filter((itemEmp) => itemEmp !== e.id)
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
            {kpiDeptRedux.focusAssignmentData.type}
          </TextComponent>
          <TextComponent variant="h6" className="mr-2">
            Status
          </TextComponent>
          <TextComponent variant="paragraph">
            {kpiDeptRedux.focusAssignmentData.status}
          </TextComponent>
        </div>
        <div className="flex flex-row mb-5">
          <TextComponent variant="h6" className="mr-2">
            Department
          </TextComponent>
          <TextComponent variant="paragraph" className="mr-5">
            {kpiDeptRedux.dataEmpInKPIs.department}
          </TextComponent>
          <TextComponent variant="h6" className="mr-2">
            Area
          </TextComponent>
          <TextComponent variant="paragraph" className="mr-5">
            {kpiDeptRedux.dataEmpInKPIs.area}
          </TextComponent>
          <TextComponent variant="h6" className="mr-2">
            Category
          </TextComponent>
          <TextComponent variant="paragraph" className="mr-5">
            {kpiDeptRedux.dataEmpInKPIs.categories}
          </TextComponent>
          <TextComponent variant="h6" className="mr-2">
            KPI
          </TextComponent>
          <TextComponent variant="paragraph" className="mr-5">
            {kpiDeptRedux.dataEmpInKPIs.kpis}
          </TextComponent>
        </div>
      </div>

      <div className={`h-[${sizeScreenRedux.isLargeScreen ? "60vh" : "40vh"}]`}>
        <DataGridComponent
          getRowId={(row) => row.id}
          rows={empRows}
          columns={EColumnsEmpInKPIs(kpiDeptRedux, onDelete)}
        />
      </div>
      {kpiDeptRedux.empSelectforDelete.length > 0 && (
        <div className="flex justify-center items-center sticky -bottom-0 z-10">
          <ButtonComponent className="w-[180px] bg-localError">
            Submit
          </ButtonComponent>
        </div>
      )}
    </div>
  );
};

export default ModalEmployeeInKPIs;
