import React from "react";
import { Formik } from "formik";
import ButtonComponent from "../../components/common/Button";
import { EBool, EMode } from "../../constants/enum";
import { Typography } from "@material-tailwind/react";
import SelectMultiComponent from "../../components/Input/SelectMultiComponent";
import SelectComponent from "../../components/Input/SelectComponent";
import { DateRangePicker } from "react-date-range";
import { useDispatch, useSelector } from "react-redux";
import { clearModalAssignDepartment } from "../../reduxs/kpiDepartment/kpiDepartmentSlice";

export const mockDepartMent = [
  {
    value: "Department1",
    label: "Department 1",
  },
  {
    value: "Department2",
    label: "Department 2",
  },
];

export const mockKPI = [
  {
    value: "kpi1",
    label: "KPI 1",
  },
  {
    value: "kpi2",
    label: "KPI 2",
  },
];

export const mockCategory = [
  {
    value: "category1",
    label: "Category 1",
  },
  {
    value: "category2",
    label: "Category 2",
  },
];

export const mockArea = [
  {
    value: "area1",
    label: "Area 1",
  },
  {
    value: "area2",
    label: "Area 2",
  },
];

const ModalAssign = () => {
  const dispatch = useDispatch();
  const kpiDeptRedux = useSelector((state) => state.kpiDept);
  return (
    <Formik
      initialValues={
        kpiDeptRedux.dataModal
          ? kpiDeptRedux.dataModal
          : {
              department: {
                value: "",
                label: "",
              },

              area: {
                value: "area1",
                label: "Area 1",
              },
              category: [
                {
                  value: "",
                  label: "",
                },
              ],
              kpi: [
                {
                  value: "",
                  label: "",
                },
              ],
              selectionRange: {
                startDate: "2026-02-22",
                endDate: "2026-02-28",
                key: "selection",
              },
            }
      }
      onSubmit={(values, { setSubmitting }) => {
        console.log("=>values", values);
        dispatch(clearModalAssignDepartment());
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
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Department
          </Typography>
          <SelectComponent
            name="department"
            option={mockDepartMent}
            isDisabled={kpiDeptRedux.openModal.mode === EMode.view}
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
            Area
          </Typography>
          <SelectComponent
            name="area"
            option={mockArea}
            isDisabled={kpiDeptRedux.openModal.mode === EMode.view}
            onChange={(selectedOption) => {
              handleChange({
                target: {
                  name: "area",
                  value: selectedOption,
                },
              });
            }}
          />

          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Category
          </Typography>
          <SelectMultiComponent
            name="Category"
            option={mockCategory}
            closeMenuOnSelect={EBool.false}
            isDisabled={kpiDeptRedux.openModal.mode === EMode.view}
            onChange={(selectedOption) => {
              handleChange({
                target: {
                  name: "category",
                  value: selectedOption,
                },
              });
            }}
          />

          <Typography variant="h6" color="blue-gray" className="-mb-3">
            KPIs
          </Typography>
          <SelectMultiComponent
            name="kpi"
            option={mockKPI}
            closeMenuOnSelect={EBool.false}
            isDisabled={kpiDeptRedux.openModal.mode === EMode.view}
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
            Deadline
          </Typography>
          {console.log("=> value", values)}
          <div
            className={
              kpiDeptRedux.openModal.mode !== EMode.view
                ? ""
                : "pointer-events-none opacity-50"
            }
          >
            <DateRangePicker
              name="selectionRange"
              staticRanges={[]}
              inputRanges={[]}
              ranges={[values.selectionRange]}
              onChange={(e) => {
                handleChange({
                  target: {
                    name: "selectionRange",
                    value: e.selection,
                  },
                });
              }}
            />
          </div>
          {kpiDeptRedux.openModal.mode !== EMode.view && (
            <div className="flex flex-row items-center justify-center gap-2">
              {kpiDeptRedux.openModal.mode !== EMode.edit && (
                <ButtonComponent
                  type="submit"
                  variant="outlined"
                  className="w-[20%]"
                >
                  Save Draft
                </ButtonComponent>
              )}

              <ButtonComponent type="submit" className="w-[20%]">
                {kpiDeptRedux.openModal.mode === EMode.add ? "Submit" : "Edit"}
              </ButtonComponent>
            </div>
          )}
        </form>
      )}
    </Formik>
  );
};

export default ModalAssign;
