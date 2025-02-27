import React from "react";
import {
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { sideMenu, sideMenuEmployee } from "./constant";
import { EPathPage } from "../../../constants/enum";

const SidebarEmployee = () => {
  const [roleMenuOpen, setRoleMenuOpen] = React.useState(100);
  const [open, setOpen] = React.useState(0);
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const handleRoleMenuOpen = (value) => {
    setRoleMenuOpen(roleMenuOpen === value ? 100 : value);
  };

  return (
    <List>
      {sideMenuEmployee.map((itemMenu, index) => {
        if (itemMenu.submenu.length > 0) {
          return (
            <Accordion
              open={open === itemMenu.keyOpen}
              key={`sidebar-main-${index.toString()}`}
            >
              <ListItem className="p-0" selected={open === itemMenu.keyOpen}>
                <AccordionHeader
                  onClick={() => handleOpen(itemMenu.keyOpen)}
                  className="border-b-0 p-3"
                >
                  <ListItemPrefix>
                    <itemMenu.icon />
                  </ListItemPrefix>
                  <Typography color="blue-gray" className="mr-auto font-normal">
                    {itemMenu.title}
                  </Typography>
                </AccordionHeader>
              </ListItem>
              <AccordionBody className="py-1">
                {itemMenu.submenu.map((itemSubmenu, secondIndex) => {
                  return (
                    <Link
                      key={`sidebar-${itemSubmenu.title}-${index.toString()}`}
                      to={`/${itemSubmenu.href}`}
                    >
                      <List className="p-0" key={secondIndex.toString()}>
                        <ListItem>{itemSubmenu.title}</ListItem>
                      </List>
                    </Link>
                  );
                })}
              </AccordionBody>
            </Accordion>
          );
        } else {
          return (
            <Link
              key={`sidebar-main-${index.toString()}`}
              to={`/${EPathPage.area}`}
            >
              <ListItem>
                <ListItemPrefix>
                  <itemMenu.icon />
                </ListItemPrefix>
                {itemMenu.title}
              </ListItem>
            </Link>
          );
        }
      })}
    </List>
  );
};

export default SidebarEmployee;
