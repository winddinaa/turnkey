import React from "react";
import PropTypes from "prop-types";
const LogoIcon = ({ fill = "none", width = "76", height = "29" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 76 29"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M61.8143 11.3814V6.83566H75.121V0.334229H65.521C59.361 0.334229 54.3743 5.27637 54.3477 11.3814V17.6185C54.3743 23.7235 59.361 28.6657 65.521 28.6657H75.121V22.1642H61.8143V11.3814Z"
        fill="#262C4D"
      />
      <path
        d="M45.7069 14.4999L50.7202 6.83566H54.3735V0.334229H52.8269H46.6135H39.8402V6.83566H42.3735L39.4935 11.2492H35.2002V6.83566H38.0002V0.334229H35.2002H27.7602H25.5202H24.3735H0.853516V6.83566H9.14685V28.6657H16.5868V6.83566H24.3735H25.5202H27.7602V22.1642H24.0268V28.6657H27.7602H35.2002H38.0002V22.1642H35.2002V17.7507H39.4935L42.3735 22.1642H39.8402V28.6657H46.6135H52.1869H54.3735V22.1642H50.7202L45.7069 14.4999Z"
        fill="#262C4D"
      />
    </svg>
  );
};

LogoIcon.propTypes = {
  fill: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
};

export default LogoIcon;
