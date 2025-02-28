import React from "react";
import FormFormik from "../../../components/common/FormFormik";
import {
  DatePickerComponent,
  InputComponent,
  SelectComponent,
} from "../../../components/Input";
import { mockAssignmentType, mockFiscal } from "./constants";
import { TextComponent } from "../../../components/common";
import ButtonComponent from "../../../components/common/Button";

const ModalAssignment = () => {
  return (
    <FormFormik initialValues={{}}>
      <TextComponent variant="h6" color="blue-gray" className="-mb-3">
        Assignment Type
      </TextComponent>
      <SelectComponent option={mockAssignmentType} />
      <TextComponent variant="h6" color="blue-gray" className="-mb-3">
        Assignment Name
      </TextComponent>
      <InputComponent />
      <TextComponent variant="h6" color="blue-gray" className="-mb-3">
        Description
      </TextComponent>
      <InputComponent />
      <TextComponent variant="h6" color="blue-gray" className="-mb-3">
        Fiscal Year
      </TextComponent>
      <SelectComponent option={mockFiscal} />
      <TextComponent variant="h6" color="blue-gray" className="-mb-3">
        Deadline
      </TextComponent>
      <DatePickerComponent />
      <div className="flex flex-row gap-5 justify-center items-center mt-10">
        <ButtonComponent className="bg-localGreen w-button-default">
          Save Draft
        </ButtonComponent>
        <ButtonComponent className=" w-button-default">Submit</ButtonComponent>
      </div>
    </FormFormik>
  );
};

export default ModalAssignment;
