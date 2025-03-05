import React from "react";
import { FieldArray, Formik } from "formik";
import ButtonComponent from "../../../components/common/Button";
import { EBool, EMode } from "../../../constants/enum";
import { Typography } from "@material-tailwind/react";
import SelectMultiComponent from "../../../components/Input/SelectMultiComponent";
import SelectComponent from "../../../components/Input/SelectComponent";
import { DateRangePicker } from "react-date-range";
import { useDispatch, useSelector } from "react-redux";
import { clearModalAssignDepartment } from "../../../reduxs/kpiDepartment/kpiDepartmentSlice";
import { init, mockArea, mockCategory, mockKPI, mockStatus } from "./constants";
import isEmpty from "is-empty";
import { TextComponent } from "../../../components/common";
import { Divider } from "@mui/material";

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
        !isEmpty(kpiDeptRedux.dataModal) ? kpiDeptRedux.dataModal : init
      }
      onSubmit={(values, { setSubmitting }) => {
        dispatch(clearModalAssignDepartment());
        setTimeout(() => {
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ values, handleChange, handleSubmit }) => (
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <FieldArray name="items">
            {({ push, remove }) => (
              <>
                {values.items.map((itemAssign, index) => {
                  return (
                    <div
                      className="flex flex-col gap-5"
                      key={`item-${index} overflow-auto`}
                    >
                      {console.log("=> value", values)}
                      {values.items.length > 1 && (
                        <div className="flex flex-row justify-between ">
                          <TextComponent variant="h6" color="blue-gray">
                            # {index + 1}
                          </TextComponent>
                          {index !== 0 && (
                            <TextComponent
                              variant="paragraph"
                              className="text- cursor-pointer"
                              onClick={() => {
                                console.log("=> index", index);
                                return remove(1);
                              }}
                            >
                              Remove
                            </TextComponent>
                          )}
                        </div>
                      )}

                      <TextComponent
                        variant="h6"
                        color="blue-gray"
                        className="-mb-3"
                      >
                        Department
                      </TextComponent>
                      <SelectComponent
                        name={`${index}.department`}
                        placeholder="Department"
                        option={mockDepartMent}
                        isDisabled={kpiDeptRedux.openModal.mode === EMode.view}
                        onChange={(selectedOption) => {
                          handleChange({
                            target: {
                              name: `${index}.department`,
                              value: selectedOption,
                            },
                          });
                        }}
                      />
                      <TextComponent
                        variant="h6"
                        color="blue-gray"
                        className="-mb-3"
                      >
                        Area
                      </TextComponent>
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
                      <TextComponent
                        variant="h6"
                        color="blue-gray"
                        className="-mb-3"
                      >
                        Category
                      </TextComponent>
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
                      <TextComponent
                        variant="h6"
                        color="blue-gray"
                        className="-mb-3"
                      >
                        KPIs
                      </TextComponent>

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

                      {values.items.length > 1 && <Divider />}
                    </div>
                  );
                })}
                {kpiDeptRedux.openModal.mode !== EMode.view && (
                  <div className="flex flex-row items-center justify-center gap-2 mt-2 ">
                    <ButtonComponent
                      variant="outlined"
                      className="w-[20%] bg-white "
                      onClick={() => push(init)}
                    >
                      Add
                    </ButtonComponent>

                    <ButtonComponent
                      type="submit"
                      className="w-[20%] bg-localGreen"
                    >
                      Save Draft
                    </ButtonComponent>

                    <ButtonComponent type="submit" className="w-[20%]">
                      {kpiDeptRedux.openModal.mode === EMode.add
                        ? "Submit"
                        : "Edit"}
                    </ButtonComponent>
                  </div>
                )}
              </>
            )}
          </FieldArray>
        </form>
      )}
    </Formik>
  );
};

export default ModalAssign;
