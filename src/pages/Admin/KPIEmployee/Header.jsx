import { Typography } from "@material-tailwind/react";
import React from "react";
import InputComponent from "../../../components/Input/InputComponent";
import { PlusIcon, SearchIcon } from "../../../components/Icon";
import ButtonComponent from "../../../components/common/Button";
import { useDispatch } from "react-redux";

import { setModalAssignKpieEmployee } from "../../../reduxs/kpiEmployee/kpiEmployeeSlice";
import { EBool } from "../../../constants/enum";
import TextComponent from "../../../components/common/Text";

const Header = () => {
  const dispatch = useDispatch();

  return (
    <div className="w-[100%]">
      <TextComponent variant="h3">Assign KPIs Employee</TextComponent>
      <div
        className="flex 
      w-[100%] justify-between items-center"
      >
        <div className="py-5 w-[50%]">
          <InputComponent label="Department code" icon={<SearchIcon />} />
        </div>
        <div>
          <ButtonComponent
            onClick={() => {
              dispatch(setModalAssignKpieEmployee(EBool.true));
            }}
          >
            <div className="flex items-center justify-center">
              <PlusIcon />
              <Typography variant="h6">Assign Employee</Typography>
            </div>
          </ButtonComponent>
        </div>
      </div>
    </div>
  );
};

export default Header;
