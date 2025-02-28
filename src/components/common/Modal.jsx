import {
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
} from "@material-tailwind/react";
import { Divider } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";

const ModalComponent = ({
  open = false,
  handleClose = () => {
    console.log("click");
  },
  title = "Title",
  children,
}) => {
  return (
    <Dialog open={open} handler={handleClose}>
      <DialogHeader className="text-textPrimary">{title}</DialogHeader>
      <Divider />
      <DialogBody className="min-h-[50vh] max-h-[80vh]  gap-5 overflow-y-auto">
        {children}
      </DialogBody>
      <DialogFooter></DialogFooter>
    </Dialog>
  );
};

ModalComponent.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  title: PropTypes.string,
};

export default ModalComponent;
