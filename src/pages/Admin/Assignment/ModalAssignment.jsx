import React from "react";
import {
  DatePickerComponent,
  InputComponent,
  SelectComponent,
} from "../../../components/Input";
import { mockAssignmentType, mockFiscal } from "./constants";
import { TextComponent } from "../../../components/common";
import ButtonComponent from "../../../components/common/Button";
import { useSelector } from "react-redux";
import { EMode } from "../../../constants/enum";
import { Formik } from "formik";
import dayjs from "dayjs";

const ModalAssignment = () => {
  const assignRedux = useSelector((state) => state.assign);
  const isDisabled = assignRedux.openModal.mode === EMode.view;

  if (assignRedux) {
    return (
      <Formik
        initialValues={
          assignRedux.dataModal ? assignRedux.dataModal : { data: [] }
        }
        onSubmit={(values, { setSubmitting }) => {
          dispatch(clearModalAssignDepartment());
          setTimeout(() => {
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ values, handleChange, handleSubmit }) => (
          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            <TextComponent variant="h6" color="blue-gray" className="-mb-3">
              Assignment Type
            </TextComponent>
            <SelectComponent
              option={mockAssignmentType}
              isDisabled={isDisabled}
              name="assignmenttypeId"
              value={mockAssignmentType.find(
                (option) => option.value === values.assignmenttypeId
              )}
              onChange={(selectedOption) => {
                handleChange({
                  target: {
                    name: "assignmenttypeId",
                    value: selectedOption,
                  },
                });
              }}
            />

            <TextComponent variant="h6" color="blue-gray" className="-mb-3">
              Assignment Name
            </TextComponent>
            <InputComponent
              name="assignmentName"
              disabled={isDisabled}
              value={values.assignmentName}
              onChange={(e) => {
                handleChange({
                  target: {
                    name: "assignmentName",
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
              Fiscal Year
            </TextComponent>
            <SelectComponent
              name="fiscalYear"
              option={mockFiscal}
              isDisabled={isDisabled}
              value={mockFiscal.find(
                (option) => option.value === values.fiscalYear
              )}
              onChange={(selectedOption) => {
                handleChange({
                  target: {
                    name: "fiscalYear",
                    value: selectedOption,
                  },
                });
              }}
            />
            <TextComponent variant="h6" color="blue-gray" className="-mb-3">
              Deadline
            </TextComponent>

            <DatePickerComponent
              disabled={isDisabled}
              name="date"
              value={
                values.date &&
                values.date.map((itemValue) => {
                  return dayjs(itemValue);
                })
              }
              onChange={(selectedOption) => {
                handleChange({
                  target: {
                    name: "date",
                    value: selectedOption,
                  },
                });
              }}
            />
            {!isDisabled && (
              <div className="flex flex-row gap-5 justify-center items-center mt-10">
                <ButtonComponent
                  type="submit"
                  className="bg-localGreen w-button-default"
                >
                  Save Draft
                </ButtonComponent>
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

export default ModalAssignment;
