import { Typography } from "@material-tailwind/react";
import React from "react";
import InputComponent from "../../components/Input/InputComponent";
import { PlusIcon, SearchIcon } from "../../components/Icon";
import ButtonComponent from "../../components/common/Button";

const Header = () => {
  return (
    <div className="w-[100%]">
      <Typography variant="h3">Assign KPIs</Typography>
      <Typography variant="h3">KPIs Department</Typography>
      <div
        className="flex 
      w-[100%] justify-between"
      >
        <div className="py-5 w-[50%]">
          <InputComponent icon={<SearchIcon />} />
        </div>
        <div>
          <ButtonComponent>
            <div className="flex items-center justify-center">
              <PlusIcon />
              <Typography variant="h6">Assign KPIs</Typography>
            </div>
          </ButtonComponent>
        </div>
      </div>
    </div>
  );
};

export default Header;
