import React from "react";
import { Input } from "@material-tailwind/react";
import PropTypes from "prop-types";

const InputComponent = ({
  icon = <i className="fas fa-heart" />,
  className = "",
  label,
  placeholder = "input ",
}) => {
  return (
    <Input
      label={label ? label : undefined}
      className={`${
        !label ? "!border-t-blue-gray-200 focus:!border-t-gray-900" : ""
      } ${className}`}
      labelProps={
        !label
          ? {
              className: "before:content-none after:content-none",
            }
          : {}
      }
      placeholder={placeholder}
      icon={icon}
    />
  );
};

InputComponent.propTypes = {
  icon: PropTypes.node,
  className: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
};
export default InputComponent;
