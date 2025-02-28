import React from "react";
import FormFormik from "../../../components/common/FormFormik";
import { InputComponent, SelectComponent } from "../../../components/Input";
import { mockAssignmentType, mockFiscal } from "./constants";
import { Typography } from "@material-tailwind/react";
import { TextComponent } from "../../../components/common";

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
    </FormFormik>
  );
};

export default ModalAssignment;
