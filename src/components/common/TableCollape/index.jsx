import React from "react";
import TextComponent from "../Text";
import { Divider } from "@mui/material";
import PropTypes from "prop-types";
import { MinusIcon, PlusIcon } from "../../Icon";
import { CardBody, Collapse } from "@material-tailwind/react";
import { Etype } from "../../../constants/enum";
import { colors } from "../../../core/theme/theme";

const TableCollape = ({
  isCollaps = false,
  columns = [],
  rows = [],
  getCollapsOpenIndex,
}) => {
  const [open, setOpen] = React.useState(0);
  const handleCollape = (e, values) => {
    if (e + 1 === open) {
      getCollapsOpenIndex(values);
      setOpen(0);
    } else {
      setOpen(e + 1);
      getCollapsOpenIndex(values);
    }
  };

  return (
    <div className="flex flex-col  h-full w-full overflow-x-auto">
      <div className="flex flex-row sticky top-0 z-30 bg-localWhite">
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
                  handleCollape(index, itemRows);
                }}
              >
                <div className={`w-[50px] p-2`}>
                  {open === index + 1 ? (
                    <MinusIcon />
                  ) : (
                    <PlusIcon fill={colors.localBlack} />
                  )}
                </div>

                {Object.keys(itemRows)
                  .filter((itemfill) => itemfill !== "expandCollape")
                  .map((keyRow, indexRow) => {
                    switch (typeof itemRows[keyRow]) {
                      case Etype.func:
                        return (
                          <div
                            className={`flex-1 p-2`}
                            key={`colaps-row-in-${indexRow.toString()} `}
                            onClick={(e) => {
                              e.stopPropagation();
                            }}
                          >
                            {itemRows[keyRow](itemRows)}
                          </div>
                        );
                      case Etype.string:
                        return (
                          <div
                            className={`flex-1 p-2`}
                            key={`colaps-row-in-${indexRow.toString()} `}
                          >
                            <TextComponent variant="paragraph">
                              {itemRows[keyRow]}
                            </TextComponent>
                          </div>
                        );
                      default:
                        <div
                          className={`flex-1 p-2`}
                          key={`colaps-row-in-${indexRow.toString()} `}
                        >
                          {itemRows[keyRow]}
                        </div>;
                        break;
                    }
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
