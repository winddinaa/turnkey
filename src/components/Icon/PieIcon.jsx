import React from "react";
import PropTypes from "prop-types";
const PieIcon = ({ fill = "none" }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11 2V22C5.9 21.5 2 17.2 2 12C2 6.8 5.9 2.5 11 2ZM13 2V11H22C21.5 6.2 17.8 2.5 13 2ZM13 13V22C17.7 21.5 21.5 17.8 22 13H13Z"
        fill="#6C6C6C"
      />
    </svg>
  );
};

PieIcon.propTypes = {
  fill: PropTypes.string, // ต้องเป็น string และต้องส่งค่าเข้ามา
};

export default PieIcon;
