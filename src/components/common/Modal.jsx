import {
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
} from "@material-tailwind/react";
import { Divider } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";
import { CloseIcon } from "../Icon";

const ModalComponent = ({
  open = false,
  handleClose = () => {
    console.log("click");
  },
  title = "Title",
  size = "md",
  children,
  ...rest
}) => {
  return (
    <Dialog open={open} handler={handleClose} size={size} {...rest}>
      <DialogHeader className="text-textPrimary justify-between">
        {title}
        <div className="cursor-pointer" onClick={handleClose}>
          <CloseIcon />
        </div>
      </DialogHeader>
      <Divider />
      <DialogBody className="min-h-[50vh] max-h-[80vh]  gap-5 overflow-y-auto">
        {children}
      </DialogBody>
      <DialogFooter>
        <></>
      </DialogFooter>
    </Dialog>
  );
};

ModalComponent.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  title: PropTypes.any,
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl", "xxl"]),
};

export default ModalComponent;
