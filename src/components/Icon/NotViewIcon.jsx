import React from "react";
import PropTypes from "prop-types";
const NotViewIcon = ({ fill = "none" }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.5 16L17.025 12.604M12 17.5V14M4.5 16L6.969 12.612M3 8C6.6 16 17.4 16 21 8"
        stroke="#4F46E5"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

NotViewIcon.propTypes = {
  fill: PropTypes.string, // ต้องเป็น string และต้องส่งค่าเข้ามา
};

export default NotViewIcon;
