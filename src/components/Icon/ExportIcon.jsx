import PropTypes from "prop-types";
import React from "react";

const ExportIcon = ({ fill = "black", height = "24", width = "24" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 13 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.33334 1.66638V2.99973H1.33334V11.6664H10.6667V7.66638H12V12.9997H0V1.66638H5.33334ZM9.80475 0.52832L12.9428 3.66638L9.80475 6.80448L8.86194 5.86166L10.3902 4.33304H8.66666C7.60153 4.33304 6.73091 5.16566 6.67006 6.21554L6.66666 6.33304V9.66638H5.33334V6.33307C5.33334 4.54057 6.74822 3.07851 8.52209 3.00279L8.66666 2.99973L10.3901 2.9997L8.86194 1.47113L9.80475 0.52832Z"
        fill={fill}
      />
    </svg>
  );
};

ExportIcon.propTypes = {
  fill: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
};
export default ExportIcon;
