import { Radio } from "@material-tailwind/react";
import PropTypes from "prop-types";
import React from "react";

const RadioComponent = ({ name, value, init, label, ...rest }) => {
  return <Radio name={name} value={value} label={label} {...rest} />;
};

RadioComponent.propTypes = {
  value: PropTypes.any,
  defaultChecked: PropTypes.bool,
  name: PropTypes.string,
  label: PropTypes.string,
};

export default RadioComponent;
