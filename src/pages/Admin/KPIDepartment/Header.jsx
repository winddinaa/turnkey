import { Typography } from "@material-tailwind/react";
import React from "react";
import InputComponent from "../../../components/Input/InputComponent";
import { SearchIcon } from "../../../components/Icon";
import ButtonComponent from "../../../components/common/Button";
import { useDispatch, useSelector } from "react-redux";
import { setAssignDepartmentDraft } from "../../../reduxs/kpiDepartment/kpiDepartmentSlice";
import TextComponent from "../../../components/common/Text";

const Header = () => {
  const dispatch = useDispatch();
  const kpiDeptRedux = useSelector((state) => state.kpiDept);
  return (
    <div className="w-[100%]">
      <TextComponent variant="h3">Assign KPIs</TextComponent>
      <div
        className="flex 
     w-[100%] justify-between items-center mb-5"
      >
        <div className="py-5 w-[50%]">
          <InputComponent label="Department code" icon={<SearchIcon />} />
        </div>
        <div>
          <ButtonComponent
            className={`${
              kpiDeptRedux.isDraft ? "bg-primary" : "bg-localGreen"
            }`}
            onClick={() => {
              dispatch(setAssignDepartmentDraft(!kpiDeptRedux.isDraft));
            }}
          >
            <div className="flex items-center justify-center">
              <Typography variant="h6">
                {kpiDeptRedux.isDraft ? "Assignment" : "My draft"}
              </Typography>
            </div>
          </ButtonComponent>
        </div>
      </div>
    </div>
  );
};

export default Header;
