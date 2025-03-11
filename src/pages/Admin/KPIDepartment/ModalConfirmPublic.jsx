import { Typography } from "@material-tailwind/react";
import React from "react";
import ButtonComponent from "../../../components/common/Button";
import { useDispatch } from "react-redux";
import { setModalPublicAssignment } from "../../../reduxs/kpiDepartment/kpiDepartmentSlice";

const ModalConfirmPublic = () => {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col justify-center items-center text-center min-h-[40vh] ">
      <div className="py-10">
        <Typography variant="paragraph">
          Are you sure you want to public this assignment? this action cannot be
          undone.
        </Typography>
      </div>

      <ButtonComponent
        onClick={() => dispatch(setModalPublicAssignment(false))}
        className=" w-button-default"
      >
        Confirm
      </ButtonComponent>
    </div>
  );
};

export default ModalConfirmPublic;
