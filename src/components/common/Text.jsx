import { Typography } from "@material-tailwind/react";
import PropTypes from "prop-types";
import React from "react";

const TextComponent = ({ className, children, variant, ...rest }) => {
  return (
    <Typography
      className={`text-textPrimary ${className}`}
      variant={variant}
      {...rest}
    >
      {children}
    </Typography>
  );
};

TextComponent.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.string,
};

export default TextComponent;
