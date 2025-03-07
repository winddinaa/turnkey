import React from "react";
import { DataGridComponent, TextComponent } from "../../../components/common";
import { useSelector } from "react-redux";
import isEmpty from "is-empty";
import InputComponent from "../../../components/Input/InputComponent";
import { SearchIcon } from "lucide-react";
import { DeleteIcon } from "../../../components/Icon";
import { EColumnsEmployee, empRows } from "./constants";
import ButtonComponent from "../../../components/common/Button";

const ModalAddEmployee = () => {
  const kpiDeptRedux = useSelector((state) => state.kpiDept);
  const sizeScreenRedux = useSelector((state) => state.screenSize);
  const mappingGroupData = () => {
    if (
      !isEmpty(kpiDeptRedux.focusAssignmentData?.rows) &&
      !isEmpty(kpiDeptRedux.selectKPIs)
    ) {
      let focusKpisSelect = kpiDeptRedux.focusAssignmentData?.rows.filter(
        (itemSelect, index) => {
          return kpiDeptRedux.selectKPIs.includes(index);
        }
      );
      if (focusKpisSelect.length > 0) {
        const groupedArray = Object.values(
          focusKpisSelect.reduce((acc, item) => {
            const { department, ...rest } = item;

            if (!acc[department]) {
              acc[department] = { department, kpis: [] };
            }

            acc[department].kpis.push(rest);

            return acc;
          }, {})
        );
        return groupedArray;
      }
    } else return [];
  };

  const handleSelectKPIs = (e) => {};

  return (
    <div className="flex flex-col gap-10">
      <div className="max-h-[30vh]">
        <div className="flex flex-row mb-5">
          <TextComponent variant="h6" className="mr-2">
            Assign ID
          </TextComponent>
          <TextComponent variant="paragraph">
            {kpiDeptRedux.focusAssignmentData?.assignId || ""}
          </TextComponent>
        </div>
        {mappingGroupData().map((itemMapping, index) => {
          return (
            <div
              className="flex flex-col gap-2  overflow-auto"
              key={`assign-id-${index.toString()}`}
            >
              {itemMapping.kpis.map((itemKpis, indexMap) => {
                return (
                  <div
                    className="flex flex-col justify-between border border-localLightGrey p-2 rounded-md"
                    key={`department-id-${indexMap.toString()}`}
                  >
                    <div className="flex justify-between">
                      <div className="flex flex-row">
                        <TextComponent variant="h6" className="mr-2">
                          Department
                        </TextComponent>
                        <TextComponent variant="paragraph" className="mr-5">
                          {itemMapping.department}
                        </TextComponent>
                        <TextComponent variant="h6" className="mr-2">
                          Area Name
                        </TextComponent>
                        <TextComponent variant="paragraph" className="mr-5">
                          {itemKpis.area}
                        </TextComponent>
                        <TextComponent variant="h6" className="mr-2">
                          Category Name
                        </TextComponent>
                        <TextComponent variant="paragraph" className="mr-5">
                          {itemKpis.categories}
                        </TextComponent>
                        <TextComponent variant="h6" className="mr-2">
                          KPIs
                        </TextComponent>
                        <TextComponent variant="paragraph" className="mr-5">
                          {itemKpis.kpis}
                        </TextComponent>
                      </div>
                      <span className="cursor-pointer">
                        <DeleteIcon />
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
      <div className="flex flex-col gap-2">
        <TextComponent variant="h6">Employee</TextComponent>
        <InputComponent placeholder="Search employee" icon={<SearchIcon />} />
        <div
          className={`h-[${sizeScreenRedux.isLargeScreen ? "50vh" : "40vh"}]`}
        >
          <DataGridComponent
            checkboxSelection
            getRowId={(row) => row.id}
            rows={empRows}
            onRowSelectionModelChange={handleSelectKPIs}
            columns={EColumnsEmployee}
          />
        </div>
        <div className="flex flex-row justify-center items-center w-full gap-5">
          <ButtonComponent className="w-[180px] bg-localGreen">
            Save Draft
          </ButtonComponent>
          <ButtonComponent className="w-[180px]">Submit</ButtonComponent>
        </div>
      </div>
    </div>
  );
};

export default ModalAddEmployee;
