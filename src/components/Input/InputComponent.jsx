import React from "react";
import { Input } from "@material-tailwind/react";
import PropTypes from "prop-types";

const InputComponent = ({
  icon = <i className="fas fa-heart" />,
  className = "",
  label,
  placeholder = "input ",
  variant = "outlined",
  onChange,
  disabled = false,
  ...rest
}) => {
  return (
    <Input
      label={label ? label : undefined}
      className={`${
        !label
          ? "!border-t-blue-gray-200 focus:!border-primary rounded-md border "
          : ""
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
      variant={variant}
      onChange={onChange}
      disabled={disabled}
      {...rest}
    />
  );
};

InputComponent.propTypes = {
  icon: PropTypes.node,
  className: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  variant: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
};
export default InputComponent;
