import React from "react";
import PropTypes from "prop-types";
const MeasurementIcon = ({ fill = "none" }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <mask
        id="mask0_2149_1352"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="24"
        height="24"
      >
        <rect width="24" height="24" fill="url(#pattern0_2149_1352)" />
      </mask>
      <g mask="url(#mask0_2149_1352)">
        <rect width="24" height="24" fill="#6C6C6C" />
      </g>
      <defs>
        <pattern
          id="pattern0_2149_1352"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_2149_1352" transform="scale(0.015625)" />
        </pattern>
        <image
          id="image0_2149_1352"
          width="64"
          height="64"
          preserveAspectRatio="none"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

MeasurementIcon.propTypes = {
  fill: PropTypes.string, // ต้องเป็น string และต้องส่งค่าเข้ามา
};

export default MeasurementIcon;
