import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const LayOut = ({ children }) => {
  const location = useLocation();
  const sidebarRedux = useSelector((state) => state.sidebar);
  if (location.pathname.toLocaleLowerCase() === "/login") {
    return <>{children}</>;
  }
  return (
    <div className="flex h-full w-full">
      <div
        className={`w-full h-full max-w-[15vw] ${
          sidebarRedux.drawer ? "block" : "hidden"
        }`}
      >
        <Sidebar />
      </div>
      <div
        className={`w-full max-w-[${
          sidebarRedux.drawer ? "85vw" : "100vw"
        }] overflow-x-auto overflow-y-hidden `}
      >
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default LayOut;
