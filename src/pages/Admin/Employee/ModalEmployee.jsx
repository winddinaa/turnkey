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
import { clearEmployee } from "../../../reduxs/employee/employeeSlice";
import { mockPosition, mockRole } from "./constants";

const ModalEmployee = () => {
  const employeeRedux = useSelector((state) => state.emp);
  const isDisabled = employeeRedux.openModal.mode === EMode.view;

  if (employeeRedux) {
    return (
      <Formik
        initialValues={
          employeeRedux.dataModal
            ? employeeRedux.dataModal
            : { status: true, employee_name: "", description: "" }
        }
        onSubmit={(values, { setSubmitting }) => {
          dispatch(clearEmployee());
          setTimeout(() => {
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ values, handleChange, handleSubmit }) => (
          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            <TextComponent variant="h6" color="blue-gray" className="-mb-3">
              Employee Code
            </TextComponent>
            <InputComponent
              name="employee_code"
              disabled={isDisabled}
              value={values.employee_name}
              onChange={(e) => {
                handleChange({
                  target: {
                    name: "employee_code",
                    value: e.target.value,
                  },
                });
              }}
            />
            {console.log("=>values", values)}

            <TextComponent variant="h6" color="blue-gray" className="-mb-3">
              Role
            </TextComponent>
            <SelectComponent
              name="roleId"
              isDisabled={isDisabled}
              value={mockRole.find((option) => option.value === values.roleId)}
              option={mockRole}
              onChange={(e) => {
                handleChange({
                  target: {
                    name: "roleId",
                    value: e,
                  },
                });
              }}
            />
            <div className="flex flex-row gap-5 w-full">
              <div className="flex flex-col gap-5 w-full">
                <TextComponent variant="h6" color="blue-gray" className="-mb-3">
                  First Name
                </TextComponent>
                <InputComponent
                  name="firstname"
                  disabled={isDisabled}
                  value={values.employee_name}
                  onChange={(e) => {
                    handleChange({
                      target: {
                        name: "firstname",
                        value: e.target.value,
                      },
                    });
                  }}
                />
              </div>
              <div className="flex flex-col gap-5 w-full">
                <TextComponent variant="h6" color="blue-gray" className="-mb-3">
                  Last Name
                </TextComponent>
                <InputComponent
                  name="lastname"
                  disabled={isDisabled}
                  value={values.employee_name}
                  onChange={(e) => {
                    handleChange({
                      target: {
                        name: "lastname",
                        value: e.target.value,
                      },
                    });
                  }}
                />
              </div>
            </div>

            <TextComponent variant="h6" color="blue-gray" className="-mb-3">
              Position
            </TextComponent>
            <SelectComponent
              name="roleId"
              isDisabled={isDisabled}
              value={mockPosition.find(
                (option) => option.value === values.position
              )}
              option={mockPosition}
              onChange={(e) => {
                handleChange({
                  target: {
                    name: "roleId",
                    value: e,
                  },
                });
              }}
            />

            <TextComponent variant="h6" color="blue-gray" className="-mb-3">
              Phone number
            </TextComponent>
            <InputComponent
              name="phonnumber"
              disabled={isDisabled}
              value={values.phonnumber}
              onChange={(e) => {
                handleChange({
                  target: {
                    name: "phonnumber",
                    value: e.target.value,
                  },
                });
              }}
            />
            <TextComponent variant="h6" color="blue-gray" className="-mb-3">
              Email
            </TextComponent>
            <InputComponent
              name="email"
              disabled={isDisabled}
              value={values.email}
              onChange={(e) => {
                handleChange({
                  target: {
                    name: "email",
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

export default ModalEmployee;
