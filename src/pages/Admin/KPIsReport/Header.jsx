import React from "react";
import InputComponent from "../../../components/Input/InputComponent";
import { SearchIcon } from "../../../components/Icon";
import { useDispatch } from "react-redux";
import TextComponent from "../../../components/common/Text";
import { SelectComponent } from "../../../components/Input";
import { Eyears } from "./constants";
import ButtonComponent from "../../../components/common/Button";
import { Typography } from "@material-tailwind/react";

const Header = () => {
  const dispatch = useDispatch();

  return (
    <div className="w-[100%]">
      <TextComponent variant="h3">KPIs Report</TextComponent>
      <div
        className="flex 
      w-[100%] justify-between items-center"
      >
        <div className="py-5 w-[50%] flex flex-row gap-5">
          <SelectComponent
            className="w-[15vw]"
            placeholder="Fiscal Year"
            option={Eyears}
          />
          <InputComponent placeholder="Assignment" icon={<SearchIcon />} />
        </div>
        <div>
          <ButtonComponent className="bg-buttonExport" onClick={() => {}}>
            <div className="flex items-center justify-center">
              <Typography variant="h6">Export</Typography>
            </div>
          </ButtonComponent>
        </div>
      </div>
    </div>
  );
};

export default Header;
