import React from "react";
import InputComponent from "../../../components/Input/InputComponent";
import { PlusIcon, SearchIcon } from "../../../components/Icon";
import ButtonComponent from "../../../components/common/Button";
import { useDispatch } from "react-redux";
import { EBool, EMode } from "../../../constants/enum";
import { setAssignmentModal } from "../../../reduxs/assignment/assignmentSlice";
import TextComponent from "../../../components/common/Text";

const Header = () => {
  const dispatch = useDispatch();
  return (
    <div className="w-[100%]">
      <TextComponent variant="h3">Assignment</TextComponent>
      <div
        className="flex 
     w-[100%] justify-between items-center"
      >
        <div className="py-5 w-[50%]">
          <InputComponent label="Search Assignment" icon={<SearchIcon />} />
        </div>
        <div>
          <ButtonComponent
            className="bg-primary"
            onClick={() => {
              dispatch(
                setAssignmentModal({
                  mode: EMode.add,
                  open: EBool.true,
                })
              );
            }}
          >
            <div
              className="flex items-center justify-center"
              title="Create Assignment"
            >
              <PlusIcon />
            </div>
          </ButtonComponent>
        </div>
      </div>
    </div>
  );
};

export default Header;
