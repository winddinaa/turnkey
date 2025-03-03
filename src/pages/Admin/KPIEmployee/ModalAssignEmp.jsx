import { Typography } from "@material-tailwind/react";
import { Formik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { EBool } from "../../../constants/enum";
import ButtonComponent from "../../../components/common/Button";
import DataGridComponent from "../../../components/common/DataGrid";
import { EColumnEmployee } from "./constants";
import { SelectMultiComponent } from "../../../components/Input";
import { setModalAssignKpieEmployee } from "../../../reduxs/kpiEmployee/kpiEmployeeSlice";

export const mockDepartment = [
  {
    value: "Department1",
    label: "Department 1",
  },
  {
    value: "Department2",
    label: "Department 2",
  },
];

export const mockEmployee = [
  {
    id: 1,
    value: 1,
    label: "Employee 1",
    employeeName: "Employee 1",
    employeePosition: "Position 1",
    Organization: "Org 1",
    supervisor: "Supervisor 1",
    ImmediateManager: "Immediate Manager 1",
  },
  {
    id: 2,
    value: 2,
    label: "Employee 2",
    employeeName: "Employee 2",
    employeePosition: "Position 2",
    Organization: "Org 2",
    supervisor: "Supervisor 2",
    ImmediateManager: "Immediate Manager 2",
  },
];
const ModalAssignEmp = () => {
  const dispatch = useDispatch();
  const kpiEmpRedux = useSelector((state) => state.kpiEmp);
  return (
    <Formik
      initialValues={{
        department: [
          {
            value: "Department1",
            label: "Department 1",
          },
        ],

        employee: [],
      }}
      onSubmit={(values, { setSubmitting }) => {
        dispatch(setModalAssignKpieEmployee(false));
        setTimeout(() => {
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 min-h-[50vh] "
        >
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Department
          </Typography>
          <SelectMultiComponent
            name="department"
            option={mockDepartment}
            isDisabled
            closeMenuOnSelect={EBool.false}
            onChange={(selectedOption) => {
              handleChange({
                target: {
                  name: "department",
                  value: selectedOption,
                },
              });
            }}
          />

          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Employee
          </Typography>
          <SelectMultiComponent
            name="employee"
            option={mockEmployee}
            closeMenuOnSelect={EBool.false}
            onChange={(selectedOption) => {
              handleChange({
                target: {
                  name: "employee",
                  value: selectedOption,
                },
              });
            }}
          />

          <DataGridComponent
            rows={values.employee}
            columns={EColumnEmployee()}
          />

          <div className="flex flex-row items-center justify-center gap-2">
            <ButtonComponent
              type="submit"
              variant="outlined"
              className="w-[20%]"
            >
              Save Draft
            </ButtonComponent>

            <ButtonComponent type="submit" className="w-[20%]">
              {"Submit"}
            </ButtonComponent>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default ModalAssignEmp;
