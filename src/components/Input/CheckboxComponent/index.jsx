import PropTypes from "prop-types";
import React from "react";
import { StyledButton } from "./Checkbox.styled";

const CheckboxComponent = ({ init, label = "", className, ...rest }) => {
  return (
    <StyledButton
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
