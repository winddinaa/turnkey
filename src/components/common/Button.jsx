import React from "react";
import { Button } from "@material-tailwind/react";
import PropTypes from "prop-types";

const ButtonComponent = ({
  variant = "filled",
  onClick,
  type = "button",
  children,
  className = "",
}) => {
  return (
    <Button
      type={type}
      variant={variant}
      onClick={onClick}
      className={`w-[100%]  min-w-[180px]  bg-primary p-2 ${className}`}
    >
      {children}
    </Button>
  );
};

ButtonComponent.propTypes = {
  variant: PropTypes.oneOf(["filled", "outlined", "gradient", "text"]), // ต้องเป็น string และต้องส่งค่าเข้ามา
  onClick: PropTypes.func,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  className: PropTypes.string,
};

export default ButtonComponent;
