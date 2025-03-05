import { Checkbox } from "@material-tailwind/react";
import PropTypes from "prop-types";
import React from "react";

const CheckboxComponent = ({ init, label = "", className, ...rest }) => {
  return (
    <Checkbox
      defaultChecked={init}
      label={label}
      className={className}
      {...rest}
    />
  );
};

CheckboxComponent.propTypes = {
  label: PropTypes.string,
  init: PropTypes.bool,
  className: PropTypes.string,
};

export default CheckboxComponent;
