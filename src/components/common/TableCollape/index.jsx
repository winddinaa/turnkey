import React from "react";
import TextComponent from "../Text";
import { Divider } from "@mui/material";
import PropTypes from "prop-types";
import { MinusIcon, PlusIcon } from "../../Icon";
import { theme } from "../../../core/theme/theme";
import { Card, CardBody, Collapse } from "@material-tailwind/react";

const TableCollape = ({
  isCollaps = false,
  columns = [],
  rows = [],
  onRowData,
}) => {
  const [open, setOpen] = React.useState(0);

  const handleCollape = (e) => {
    if (e + 1 === open) {
      setOpen(0);
    } else {
      setOpen(e + 1);
    }
  };

  return (
    <div className="flex flex-col  h-full w-full overflow-x-auto">
      <div className="flex flex-row sticky top-0 z-10 bg-localWhite">
        {isCollaps && <div className={`w-[50px] px-2`}></div>}
        {columns.map((item, index) => {
          return (
            <div
              className={`flex-1 bg-localWhite p-2`}
              key={`colaps-header-${index.toString()}`}
            >
              <TextComponent variant="h6">{item}</TextComponent>
            </div>
          );
        })}
      </div>
      <Divider />
      <div className="flex flex-col ">
        {rows.map((itemRows, index) => {
          return (
            <div key={`colaps-row-${index.toString()}`}>
              <div
                className="flex flex-row cursor-pointer "
                onClick={() => {
                  handleCollape(index);
                }}
              >
                {isCollaps && (
                  <div className={`w-[50px] p-2`}>
                    {open === index + 1 ? (
                      <MinusIcon />
                    ) : (
                      <PlusIcon fill={theme.extend.colors.localBlack} />
                    )}
                  </div>
                )}
                {Object.keys(itemRows)
                  .filter((itemfill) => itemfill !== "expandCollape")
                  .map((keyRow, indexRow) => {
                    if (
                      itemRows[keyRow] &&
                      React.isValidElement(itemRows[keyRow]) &&
                      itemRows[keyRow].props &&
                      itemRows[keyRow].props.onClick
                    ) {
                      return (
                        <div
                          className={`flex-1 p-2`}
                          key={`colaps-row-in-${indexRow.toString()} `}
                        >
                          {React.cloneElement(itemRows[keyRow], {
                            ...itemRows[keyRow].props, // ก๊อปปี้ props ที่มีอยู่แล้ว
                            rowData: itemRows, // เพิ่ม prop ใหม่ที่ต้องการ
                            onClick: (e) => {
                              e.stopPropagation();
                              onRowData(itemRows);
                            },
                          })}
                        </div>
                      );
                    }
                    return (
                      <div
                        className={`flex-1 p-2`}
                        key={`colaps-row-in-${indexRow.toString()} `}
                      >
                        {typeof itemRows[keyRow] === "string" ? (
                          <TextComponent variant="h6">
                            {itemRows[keyRow]}
                          </TextComponent>
                        ) : (
                          itemRows[keyRow]
                        )}
                      </div>
                    );
                  })}
              </div>
              <Collapse open={open === index + 1}>
                <CardBody className={`${isCollaps ? "ml-[50px]" : ""} p-2`}>
                  {itemRows.expandCollape ? itemRows.expandCollape : ""}
                </CardBody>
              </Collapse>
              <Divider />
            </div>
          );
        })}
      </div>
    </div>
  );
};

TableCollape.propTypes = {
  isCollaps: PropTypes.bool,
  columns: PropTypes.array.isRequired,
  rows: PropTypes.array.isRequired,
};

export default TableCollape;
