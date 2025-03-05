import React from "react";
import { Switch } from "@material-tailwind/react";
import PropTypes from "prop-types";

const SwitchComponent = ({ className, value, ...rest }) => {
  return (
    <Switch
      className={`checked:bg-primary active:bg-primary  ${className}`}
      defaultChecked={value}
      {...rest}
    />
  );
};

SwitchComponent.propTypes = {
  className: PropTypes.string,
};

export default SwitchComponent;
