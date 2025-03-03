import isEmpty from "is-empty";
import { ESelectType } from "../constants/enum";
import { get } from "lodash";

export const convertStringToArray = (string) => {
  if (!string) return []; // กรณีค่าว่าง
  return string.includes(",") ? string.split(",") : [string];
};

export const filterValueSelect = (values, option, type) => {
  if (isEmpty(values) || isEmpty(option)) {
    return undefined;
  }
  if (type === ESelectType.multi) {
    return option.filter((itemFilter) => values.includes(itemFilter.label));
  }
  if (type === ESelectType.single) {
    option.find((itemFind) => itemFind.label === values);
  }
};

export const getFieldProps = (key, form, options = {}) => {
  return {
    name: key,
    value: get(form.values, key),
    error: get(form.errors, key),
    touched: get(form.touched, key),
    onChange: form.handleChange,
    onBlur: form.handleBlur,
    onReset: form.handleReset,
    setFieldValue: form.setFieldValue,
    setFieldTouched: form.setFieldTouched,
    setFieldError: form.setFieldError,
    ...options,
  };
};
