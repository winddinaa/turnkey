import React from "react";
import PropTypes from "prop-types";

const DotIcon = ({ fill = "none" }) => {
  return (
    <svg
      width="7"
      height="6"
      viewBox="0 0 7 6"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="3.5" cy="3" r="3" fill="#3AA94F" />
    </svg>
  );
};

DotIcon.propTypes = {
  fill: PropTypes.string, // ต้องเป็น string และต้องส่งค่าเข้ามา
};

export default DotIcon;
