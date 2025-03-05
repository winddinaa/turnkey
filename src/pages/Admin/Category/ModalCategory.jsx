import React from "react";
import {
  InputComponent,
  SelectComponent,
  SwitchComponent,
} from "../../../components/Input";
import { TextComponent } from "../../../components/common";
import ButtonComponent from "../../../components/common/Button";
import { useSelector } from "react-redux";
import { EMode } from "../../../constants/enum";
import { Formik } from "formik";
import { clearCategory } from "../../../reduxs/category/categorySlice";
import { mockArea } from "./constants";

const ModalCategory = () => {
  const categoryRedux = useSelector((state) => state.category);
  const isDisabled = categoryRedux.openModal.mode === EMode.view;

  if (categoryRedux) {
    return (
      <Formik
        initialValues={
          categoryRedux.dataModal
            ? categoryRedux.dataModal
            : { status: true, category_name: "", description: "" }
        }
        onSubmit={(values, { setSubmitting }) => {
          dispatch(clearCategory());
          setTimeout(() => {
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ values, handleChange, handleSubmit }) => (
          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            <TextComponent variant="h6" color="blue-gray" className="-mb-3">
              Area Name
            </TextComponent>
            {console.log("=>values", values)}
            <SelectComponent
              name="area_name"
              isDisabled={isDisabled}
              value={mockArea.find(
                (option) => option.value === values.area_name
              )}
              option={mockArea}
              onChange={(e) => {
                handleChange({
                  target: {
                    name: "area_name",
                    value: e,
                  },
                });
              }}
            />
            <TextComponent variant="h6" color="blue-gray" className="-mb-3">
              Category Name
            </TextComponent>
            <InputComponent
              name="category_name"
              disabled={isDisabled}
              value={values.category_name}
              onChange={(e) => {
                handleChange({
                  target: {
                    name: "category_name",
                    value: e.target.value,
                  },
                });
              }}
            />
            <TextComponent variant="h6" color="blue-gray" className="-mb-3">
              Description
            </TextComponent>
            <InputComponent
              name="description"
              disabled={isDisabled}
              value={values.description}
              onChange={(e) => {
                handleChange({
                  target: {
                    name: "description",
                    value: e.target.value,
                  },
                });
              }}
            />
            <TextComponent variant="h6" color="blue-gray" className="-mb-3">
              Status
            </TextComponent>
            <SwitchComponent
              name="status"
              value={values.status}
              disabled={isDisabled}
              onChange={(e) => {
                handleChange({
                  target: {
                    name: "status",
                    value: e.target.value,
                  },
                });
              }}
            />
            {!isDisabled && (
              <div className="flex flex-row gap-5 justify-center items-center mt-10">
                <ButtonComponent type="submit" className=" w-button-default">
                  Submit
                </ButtonComponent>
              </div>
            )}
          </form>
        )}
      </Formik>
    );
  }
  return <></>;
};

export default ModalCategory;
