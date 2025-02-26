import React from "react";
import { Switch } from "@material-tailwind/react";

const SwitchComponent = () => {
  return (
    <Switch className="checked:bg-primary active:bg-primary disabled:bg-localLightGrey" />
  );
};

export default SwitchComponent;
