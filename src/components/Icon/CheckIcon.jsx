import PropTypes from "prop-types";
import React from "react";

const CheckIcon = ({ fill = "#3AA94F" }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 33 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 12L12 21L30 3"
        stroke={fill}
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

CheckIcon.propTypes = {
  fill: PropTypes.string, // ต้องเป็น string และต้องส่งค่าเข้ามา
};

export default CheckIcon;
