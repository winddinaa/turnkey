import React from "react";
import InputComponent from "../../../components/Input/InputComponent";
import { PlusIcon, SearchIcon } from "../../../components/Icon";
import ButtonComponent from "../../../components/common/Button";
import { useDispatch } from "react-redux";
import { EBool, EMode } from "../../../constants/enum";
import TextComponent from "../../../components/common/Text";
import { setCategoryModal } from "../../../reduxs/category/categorySlice";

const Header = () => {
  const dispatch = useDispatch();
  return (
    <div className="w-[100%]">
      <TextComponent variant="h3">Category</TextComponent>
      <div
        className="flex 
     w-[100%] justify-between items-center"
      >
        <div className="py-5 w-[50%]">
          <InputComponent label="Search Category" icon={<SearchIcon />} />
        </div>
        <div className="flex flex-row gap-5">
          <ButtonComponent className="bg-buttonImport" onClick={() => {}}>
            <TextComponent variant="h6" className="text-localWhite">
              Import
            </TextComponent>
          </ButtonComponent>
          <ButtonComponent
            className="bg-primary"
            onClick={() => {
              dispatch(
                setCategoryModal({
                  mode: EMode.add,
                  open: EBool.true,
                })
              );
            }}
          >
            <div
              className="flex items-center justify-center"
              title="Create Category"
            >
              <div className="flex items-center justify-center">
                <PlusIcon />
              </div>
              <TextComponent variant="h6" className="text-localWhite">
                Category
              </TextComponent>
            </div>
          </ButtonComponent>
        </div>
      </div>
    </div>
  );
};

export default Header;
