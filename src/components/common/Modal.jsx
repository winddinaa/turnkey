import { Dialog, DialogBody, DialogHeader } from "@material-tailwind/react";
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
      <DialogHeader>{title}</DialogHeader>
      <DialogBody>{children}</DialogBody>
    </Dialog>
  );
};

ModalComponent.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  title: PropTypes.string,
};

export default ModalComponent;
