import React from "react";
import PropTypes from "prop-types";

const Container = ({ className = "", children }) => {
  return <div className={`${className} p-10`}>{children}</div>;
};

Container.propTypes = {
  className: PropTypes.string, // ต้องเป็น string และต้องส่งค่าเข้ามา
};

export default Container;
