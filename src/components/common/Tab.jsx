import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import PropTypes from "prop-types";

const TabComponent = ({ data }) => {
  return (
    <Tabs value="department1">
      <TabsHeader className="overflow-auto">
        {data.map(({ label, value }, index) => (
          <Tab key={`tab-index-${index.toString()}`} value={value}>
            <div className="flex items-center gap-2">{label}</div>
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody className="h-[60vh] border border-localLightGrey p-2 rounded-r-md rounded-t-md rounded-b-md ">
        {data.map(({ value, desc }) => (
          <TabPanel key={value} value={value}>
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
};

TabComponent.propTypes = {
  data: PropTypes.array,
};

export default TabComponent;
