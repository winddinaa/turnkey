import { MoreVertical } from "lucide-react";
import profile from "../../../assets//images/Profile.png";
import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import {
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { useSelector } from "react-redux";
import { sideMenu } from "./constant";
import { EPathPage } from "../../../constants/enum";
import { LogoIcon } from "../../Icon";

export default function Sidebar() {
  const [expanded, setExpanded] = useState(true);
  const [open, setOpen] = React.useState(0);
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const sidebarRedux = useSelector((state) => state.sidebar);
  return (
    <aside
      className={`${sidebarRedux.drawer ? "flex" : "hidden"} min-h-screen`}
    >
      <nav className="min-h-screen flex flex-col bg-white border-r shadow-sm">
        <div className="p-4 pe-8 pb-2 flex justify-between items-center">
          <LogoIcon />
        </div>
        <List>
          {sideMenu.map((itemMenu, index) => {
            if (itemMenu.submenu.length > 0) {
              return (
                <Accordion
                  open={open === itemMenu.keyOpen}
                  key={`sidebar-main-${index.toString()}`}
                >
                  <ListItem
                    className="p-0"
                    selected={open === itemMenu.keyOpen}
                  >
                    <AccordionHeader
                      onClick={() => handleOpen(itemMenu.keyOpen)}
                      className="border-b-0 p-3"
                    >
                      <ListItemPrefix>
                        <itemMenu.icon />
                      </ListItemPrefix>
                      <Typography
                        color="blue-gray"
                        className="mr-auto font-normal"
                      >
                        {itemMenu.title}
                      </Typography>
                    </AccordionHeader>
                  </ListItem>
                  <AccordionBody className="py-1">
                    {itemMenu.submenu.map((itemSubmenu, secondIndex) => {
                      return (
                        <Link
                          key={`sidebar-${
                            itemSubmenu.title
                          }-${index.toString()}`}
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
        <ul className="flex-1 px-3"></ul>

        <div className="border-t flex p-3">
          <img src={profile} className="w-10 h-10 rounded-md" />
          <div
            className={`flex justify-between items-center overflow-hidden transition-all ${
              expanded ? "w-52 ml-3" : "w-0"
            } `}
          >
            <div className={`${expanded ? "" : "mt__top___3"}`}>
              <h4 className="font-semibold">Welcome back</h4>
              <span className="text-xs text-gray-600">Colin DuBuque</span>
            </div>
            <MoreVertical size={20} />
          </div>
        </div>
      </nav>
    </aside>
  );
}
