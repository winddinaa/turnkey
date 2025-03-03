import React from "react";
import InputComponent from "../../../components/Input/InputComponent";
import { SearchIcon } from "../../../components/Icon";
import { useDispatch } from "react-redux";
import TextComponent from "../../../components/common/Text";

const Header = () => {
  const dispatch = useDispatch();

  return (
    <div className="w-[100%]">
      <TextComponent variant="h3">Assign KPIs Employee History</TextComponent>
      <div
        className="flex 
      w-[100%] justify-between items-center"
      >
        <div className="py-5 w-[50%]">
          <InputComponent label="Department code" icon={<SearchIcon />} />
        </div>
      </div>
    </div>
  );
};

export default Header;
