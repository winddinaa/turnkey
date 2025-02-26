import PropTypes from "prop-types";
import Select from "react-select";
import makeAnimated from "react-select/animated";
const animatedComponents = makeAnimated();

const SelectComponent = ({
  label = "Select Label",
  init = [],
  option = [],
  closeMenuOnSelect = true,
  onChange = () => {},
  placeholder = "select",
  isDisabled = false,
  value,
}) => {
  return (
    <>
      <Select
        placeholder={placeholder}
        closeMenuOnSelect={closeMenuOnSelect}
        components={animatedComponents}
        defaultValue={init}
        value={value}
        options={option}
        onChange={onChange}
        isDisabled={isDisabled}
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
};
export default SelectComponent;
