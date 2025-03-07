import PropTypes from "prop-types";
import React from "react";

const PersonalIcon = ({ fill = "#6685FF" }) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 2.25C10.2375 2.25 11.25 3.2625 11.25 4.5C11.25 5.7375 10.2375 6.75 9 6.75C7.7625 6.75 6.75 5.7375 6.75 4.5C6.75 3.2625 7.7625 2.25 9 2.25ZM9 13.5C12.0375 13.5 15.525 14.9513 15.75 15.75H2.25C2.50875 14.94 5.97375 13.5 9 13.5ZM9 0C6.51375 0 4.5 2.01375 4.5 4.5C4.5 6.98625 6.51375 9 9 9C11.4862 9 13.5 6.98625 13.5 4.5C13.5 2.01375 11.4862 0 9 0ZM9 11.25C5.99625 11.25 0 12.7575 0 15.75V18H18V15.75C18 12.7575 12.0037 11.25 9 11.25Z"
        fill={fill}
      />
    </svg>
  );
};

PersonalIcon.propTypes = {
  fill: PropTypes.string, // ต้องเป็น string และต้องส่งค่าเข้ามา
};

export default PersonalIcon;
