import React from "react";
import PropTypes from "prop-types";
const ReportIcon = ({ fill = "none" }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.3445 2.31738H3.75V18.6824H17.25V8.04588M11.3445 2.31738L17.25 8.04588M11.3445 2.31738V8.04588H17.25M6.75 21.7499H20.25V11.2499M6 11.2499H15M6 7.49988H9M6 14.9999H15"
        stroke="#6C6C6C"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
};
ReportIcon.propTypes = {
  fill: PropTypes.string, // ต้องเป็น string และต้องส่งค่าเข้ามา
};

export default ReportIcon;
