import { Typography } from "@material-tailwind/react";
import React from "react";
import ButtonComponent from "../../components/common/Button";
import { useDispatch } from "react-redux";
import { setModalDeleteAssignDepartment } from "../../reduxs/kpiDepartment/kpiDepartmentSlice";

const ModalDelete = () => {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col justify-center text-center">
      <div className="py-10">
        <Typography variant="p">
          Are you sure you want to delete KPIs Department? this action cannot be
          undone.
        </Typography>
      </div>
      <ButtonComponent
        onClick={() => dispatch(setModalDeleteAssignDepartment(false))}
        className="bg-localError"
      >
        Delete
      </ButtonComponent>
    </div>
  );
};

export default ModalDelete;
