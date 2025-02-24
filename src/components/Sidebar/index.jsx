import { ChevronDown, ChevronUp, MoreVertical } from "lucide-react";
import profile from "../../assets//images/Profile.png";
import { createContext, useContext, useState, useEffect, useRef } from "react";
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { LogoIcon, ManageIcon } from "../Icon";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { sideMenu } from "./constant";
const SidebarContext = createContext();

export default function Sidebar({ children, acti }) {
  const [expanded, setExpanded] = useState(true);
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
  console.log("=> open", open);
  const [activeItem, setActiveItem] = useState(null);
  return (
    <>
      <aside className="flex min-h-screen">
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
                    key={index.toString()}
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
                          <List className="p-0" key={secondIndex.toString()}>
                            <ListItem>{itemSubmenu.title}</ListItem>
                          </List>
                        );
                      })}
                    </AccordionBody>
                  </Accordion>
                );
              } else {
                return (
                  <ListItem key={index.toString()}>
                    <ListItemPrefix>
                      <itemMenu.icon />
                    </ListItemPrefix>
                    {itemMenu.title}
                  </ListItem>
                );
              }
            })}
          </List>
          <SidebarContext.Provider value={{ expanded }}>
            <ul className="flex-1 px-3">
              {React.Children.map(children, (child) =>
                React.cloneElement(child, {
                  active: activeItem === child.props.text,
                  onClick: () => setActiveItem(child.props.text),
                })
              )}
            </ul>
          </SidebarContext.Provider>

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
    </>
  );
}

export function SidebarItem({ icon, text, alert, submenu, to }) {
  const { expanded } = useContext(SidebarContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const submenuRef = useRef();
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("");
  const active =
    activeItem === text || // Ensure clicking the button highlights "Performance"
    location.pathname === to ||
    submenu?.some((item) => location.pathname === item.to);
  useEffect(() => {
    function handleClickOutside(event) {
      if (submenuRef.current && !submenuRef.current.contains(event.target)) {
        setSubmenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className="relative" ref={submenuRef}>
      <li
        onClick={() => {
          if (submenu) {
            setSubmenuOpen((prev) => !prev); // Toggle submenu
          } else {
            navigate(to); // Navigate to the route if no submenu
          }
        }}
        className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${
          active
            ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
            : "hover:bg-indigo-50 text-gray-600"
        }`}
      >
        {icon}
        <span
          className={`overflow-hidden transition-all whitespace-nowrap ${
            expanded ? "w-auto ml-3" : "w-0"
          }`}
        >
          {text}
        </span>
        {submenu && open && (
          <span className="ml-auto">
            {submenuOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </span>
        )}
        {alert && (
          <div
            className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${
              expanded ? "" : "top-2"
            }`}
          ></div>
        )}

        {!expanded && (
          <div
            className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-indigo-100 text-indigo-800 text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}
          >
            {text}
          </div>
        )}
      </li>
      {/* Floating Submenu */}
      {submenu && submenuOpen && !expanded && (
        <ul
          className="absolute top-0 left-full ml-2 bg-white border shadow-md rounded-md z-50"
          style={{ minWidth: "200px" }}
        >
          {submenu.map((item, index) => (
            <li
              key={index}
              onClick={() => {
                setSubmenuOpen(false);
                navigate(item.to);
              }}
              className={`flex items-center py-2 px-3 font-medium cursor-pointer transition-colors ${
                location.pathname === item.to
                  ? "bg-indigo-100 text-indigo-800"
                  : "hover:bg-indigo-50 text-gray-600"
              }`}
            >
              {item.icon}
              <span className="ml-2">{item.text}</span>
            </li>
          ))}
        </ul>
      )}
      {/* Submenu Items */}
      {submenu && expanded && submenuOpen && (
        <ul className="ml-6">
          {submenu.map((item, index) => (
            <li
              key={index}
              onClick={() => navigate(item.to)}
              className={`relative flex items-center py-1 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors ${
                location.pathname === item.to
                  ? "bg-indigo-100 text-indigo-800"
                  : "hover:bg-indigo-50 text-gray-600"
              }`}
            >
              {item.icon}
              <span className="ml-2">{item.text}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
