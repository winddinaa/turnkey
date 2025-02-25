import React from "react";
import { Input } from "@material-tailwind/react";
import PropTypes from "prop-types";

const InputComponent = ({
  icon = <i className="fas fa-heart" />,
  className = "",
  label = "Input",
}) => {
  console.log("=> icon", icon);
  return <Input label="Input With Icon" icon={icon} />;
};

InputComponent.propTypes = {
  icon: PropTypes.node,
  className: PropTypes.string,
  label: PropTypes.string,
};
export default InputComponent;
