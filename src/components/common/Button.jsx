import React from "react";
import { Button } from "@material-tailwind/react";
import PropTypes from "prop-types";

const ButtonComponent = ({
  variant = "filled",
  onClick = () => console.log("click button!"),
  type = "button",
  children,
}) => {
  return (
    <Button type={type} variant={variant} onClick={onClick}>
      {children}
    </Button>
  );
};

ButtonComponent.propTypes = {
  variant: PropTypes.string, // ต้องเป็น string และต้องส่งค่าเข้ามา
  onClick: PropTypes.func,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
};

export default ButtonComponent;
