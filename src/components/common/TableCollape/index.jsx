import React from "react";
import TextComponent from "../Text";

const TableCollape = () => {
  let mockDataCol = [
    "Assign ID",
    "Start  Evaluation Date",
    "End  Evaluation Date",
    "Type",
    "Status",
    "action",
  ];
  let mockDatarows = ["Header1", "Header2", "Header3", "Header4", "Header5"];
  const rows = Array.from({ length: 10 }, (_, i) => ({
    Header1: i + 1,
    Header2: `Header2${i + 1}`,
    Header3: `Header3 ${i + 1}`,
    Header4: `Header4 ${i + 1}`,
    Header5: `Header5 ${i + 1}`,
  }));

  return (
    <div className="flex flex-col bg-red-500 h-full w-full">
      <div className="flex flex-row flex-1">
        {mockDataCol.map((item) => {
          return (
            <div className={`flex-1`}>
              <TextComponent >{item}</TextComponent>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TableCollape;
