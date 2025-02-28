import { Typography } from "@material-tailwind/react";
import PropTypes from "prop-types";
import React from "react";

const TextComponent = ({ className, children, ...rest }) => {
  return (
    <Typography className={`text-textPrimary ${className}`} {...rest}>
      {children}
    </Typography>
  );
};

Text.propTypes = { className: PropTypes.string };

export default TextComponent;
