import { DatePicker } from "antd";
import PropTypes from "prop-types";
import React from "react";
const { RangePicker } = DatePicker;

const DatePickerComponent = ({ onChange, disabled = false, ...rest }) => {
  return (
    <RangePicker
      onChange={onChange}
      disabled={disabled}
      className="border-blue-gray-200 focus:border-primary hover:border-primary active:border-tertiary"
      {...rest}
    />
  );
};

DatePickerComponent.propTypes = {
  onChange: PropTypes.func,
  disable: PropTypes.bool,
};

export default DatePickerComponent;
