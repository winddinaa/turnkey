import isEmpty from "is-empty";
import { ESelectType } from "../constants/enum";

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
    console.log("=> option", option);
    console.log("=> values", values);
    option.find((itemFind) => itemFind.label === values);
  }
};
