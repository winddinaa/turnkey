import { Typography } from "@material-tailwind/react";
import React from "react";
import InputComponent from "../../../components/Input/InputComponent";
import { SearchIcon } from "../../../components/Icon";
import { useDispatch } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();

  return (
    <div className="w-[100%]">
      <Typography variant="h3">Assign KPIs Employee History</Typography>
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
