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
import { clearDepartment } from "../../../reduxs/department/departmentSlice";
import { mockArea } from "./constants";

const ModalDepartment = () => {
  const departmentRedux = useSelector((state) => state.dept);
  const isDisabled = departmentRedux.openModal.mode === EMode.view;

  if (departmentRedux) {
    return (
      <Formik
        initialValues={
          departmentRedux.dataModal
            ? departmentRedux.dataModal
            : { status: true, department_name: "", description: "" }
        }
        onSubmit={(values, { setSubmitting }) => {
          dispatch(clearDepartment());
          setTimeout(() => {
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ values, handleChange, handleSubmit }) => (
          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            <TextComponent variant="h6" color="blue-gray" className="-mb-3">
              Department Code
            </TextComponent>
            <InputComponent
              name="department_code"
              disabled={isDisabled}
              value={values.department_name}
              onChange={(e) => {
                handleChange({
                  target: {
                    name: "department_code",
                    value: e.target.value,
                  },
                });
              }}
            />
            <TextComponent variant="h6" color="blue-gray" className="-mb-3">
              Department Name
            </TextComponent>
            <InputComponent
              name="department_name"
              disabled={isDisabled}
              value={values.department_name}
              onChange={(e) => {
                handleChange({
                  target: {
                    name: "department_name",
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

export default ModalDepartment;
