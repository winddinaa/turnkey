import React from "react";
import TextComponent from "../../../components/common/Text";
import { sortBy } from "./constants";
import { SelectComponent } from "../../../components/Input";

const Header = () => {
  return (
    <div className="w-[100%]">
      <TextComponent variant="h3">
        Select the employee you want to Evaluation.{" "}
      </TextComponent>
      <div className="flex flex-row justify-between py-5">
        <TextComponent variant="h5">Employee List</TextComponent>
        <div className="flex flex-row"></div>
        <SelectComponent placeholder="Sort By" option={sortBy} />
      </div>
    </div>
  );
};

export default Header;
