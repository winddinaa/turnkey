import React from "react";
import { Formik } from "formik";
import ButtonComponent from "../../../components/common/Button";
import { EBool, EMode, ESelectType } from "../../../constants/enum";
import { Typography } from "@material-tailwind/react";
import SelectMultiComponent from "../../../components/Input/SelectMultiComponent";
import SelectComponent from "../../../components/Input/SelectComponent";
import { DateRangePicker } from "react-date-range";
import { useDispatch, useSelector } from "react-redux";
import { clearModalAssignDepartment } from "../../../reduxs/kpiDepartment/kpiDepartmentSlice";
import { convertStringToArray, filterValueSelect } from "../../../utils/helper";
import isEmpty from "is-empty";
import { mockArea, mockCategory, mockKPI, mockStatus } from "./constants";

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

const dateFrom = new Date();
const dateTo = new Date();
dateFrom.setDate(dateFrom.getDate() - 3);
dateTo.setDate(dateTo.getDate() + 2);

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

              category: [],
              kpis: "",
              area: {
                value: "",
                label: "",
              },
              selectionRange: {
                startDate: dateFrom,
                endDate: dateTo,
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
          {console.log("=> value", values)}
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
            name="category"
            option={mockCategory}
            closeMenuOnSelect={EBool.false}
            value={values.categories}
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
            name="kpis"
            option={mockKPI}
            closeMenuOnSelect={EBool.false}
            isDisabled={kpiDeptRedux.openModal.mode === EMode.view}
            value={values.kpis}
            onChange={(selectedOption) => {
              handleChange({
                target: {
                  name: "kpis",
                  value: selectedOption,
                },
              });
            }}
          />

          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Status
          </Typography>
          <SelectComponent
            name="status"
            option={mockStatus}
            isDisabled={kpiDeptRedux.openModal.mode === EMode.view}
            onChange={(selectedOption) => {
              handleChange({
                target: {
                  name: "status",
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
