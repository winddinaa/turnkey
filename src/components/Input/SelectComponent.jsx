import PropTypes from "prop-types";
import Select from "react-select";
import makeAnimated from "react-select/animated";
const animatedComponents = makeAnimated();
import { twMerge } from "tailwind-merge"; // ใช้รวม classnames ให้สะอาดขึ้น

const SelectComponent = ({
  label = "Select Label",
  init = [],
  option = [],
  closeMenuOnSelect = true,
  onChange = () => {},
  placeholder = "select",
  isDisabled = false,
  value,
  className,
  ...rest
}) => {
  return (
    <>
      <Select
        classNames={{
          control: ({ isFocused }) => {
            return twMerge(
              "border rounded-md  transition-all",
              "border-gray-300 bg-white shadow-sm",
              isFocused && "!border-primary ring-2 ring-primary ",
              isDisabled && "bg-inputDisabled cursor-not-allowed ",
              className
            );
          },
          menu: () =>
            "bg-white shadow-lg border border-gray-200 !z-10 rounded-md",
          option: ({ isFocused, isSelected }) =>
            twMerge(
              "cursor-pointer px-4 py-2 text-gray-700",
              isFocused && "bg-primary text-white",
              isSelected && "bg-primary/90 text-white"
            ),
        }}
        placeholder={placeholder}
        closeMenuOnSelect={closeMenuOnSelect}
        components={animatedComponents}
        defaultValue={init}
        value={value}
        options={option}
        onChange={onChange}
        isDisabled={isDisabled}
        {...rest}
      />
    </>
  );
};

SelectComponent.propTypes = {
  icon: PropTypes.node,
  option: PropTypes.arrayOf(PropTypes.object),
  label: PropTypes.string,
  closeMenuOnSelect: PropTypes.bool,
  onChange: PropTypes.func,
  init: PropTypes.arrayOf(PropTypes.any),
  placeholder: PropTypes.string,
  isDisabled: PropTypes.bool,
  value: PropTypes.any,
  className: PropTypes.string,
};
export default SelectComponent;
