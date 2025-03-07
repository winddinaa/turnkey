import { FieldArray } from "formik";
import React from "react";
import { TextComponent } from "../../../../components/common";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import {
  SelectComponent,
  SelectMultiComponent,
} from "../../../../components/Input";
import { mockDepartMent } from ".";
import { init, mockArea, mockCategory, mockKPI } from "../constants";
import { EBool, EMode } from "../../../../constants/enum";
import ButtonComponent from "../../../../components/common/Button";
import { Divider } from "antd";

const CreateField = ({ values, handleChange }) => {
  const kpiDeptRedux = useSelector((state) => state.kpiDept);
  return (
    <FieldArray name="items">
      {({ push, remove }) => (
        <>
          {values.items.map((itemAssign, index) => {
            return (
              <div
                className="flex flex-col gap-5"
                key={`item-${index} overflow-auto`}
              >
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
                          return remove(1);
                        }}
                      >
                        Remove
                      </TextComponent>
                    )}
                  </div>
                )}

                <TextComponent variant="h6" color="blue-gray" className="-mb-3">
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
                <TextComponent variant="h6" color="blue-gray" className="-mb-3">
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
                <TextComponent variant="h6" color="blue-gray" className="-mb-3">
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
                <TextComponent variant="h6" color="blue-gray" className="-mb-3">
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
              {kpiDeptRedux.openModal.mode !== EMode.edit && (
                <ButtonComponent
                  variant="outlined"
                  className="w-[20%] bg-white "
                  onClick={() => push(init)}
                >
                  Add
                </ButtonComponent>
              )}

              <ButtonComponent type="submit" className="w-[20%] bg-localGreen">
                Save Draft
              </ButtonComponent>

              <ButtonComponent type="submit" className="w-[20%]">
                {kpiDeptRedux.openModal.mode === EMode.add ? "Submit" : "Edit"}
              </ButtonComponent>
            </div>
          )}
        </>
      )}
    </FieldArray>
  );
};
CreateField.propTypes = {
  values: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default CreateField;
