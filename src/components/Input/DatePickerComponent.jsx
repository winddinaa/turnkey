import { DatePicker } from "antd";
import PropTypes from "prop-types";
import React from "react";
const { RangePicker } = DatePicker;

const DatePickerComponent = ({ onChange, ...rest }) => {
  return (
    <RangePicker
      onChange={onChange}
      {...rest}
      className="border-primary focus:ring-2 focus:ring-primary hover:border-primary active:border-tertiary"
    />
  );
};

DatePickerComponent.propTypes = {
  onChange: PropTypes.func,
};

export default DatePickerComponent;
