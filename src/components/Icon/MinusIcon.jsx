import PropTypes from "prop-types";
import React from "react";

const MinusIcon = ({ fill = "black" }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19 12.998H5V10.998H19V12.998Z" fill={fill} />
    </svg>
  );
};

MinusIcon.propTypes = {
  fill: PropTypes.string,
};
export default MinusIcon;
