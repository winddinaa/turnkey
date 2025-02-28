import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { useLocation } from "react-router-dom";

const LayOut = ({ children }) => {
  const location = useLocation();

  if (location.pathname.toLocaleLowerCase() === "/login") {
    return <>{children}</>;
  }
  return (
    <div className="flex h-full w-full">
      <Sidebar />
      <div className="w-full">
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default LayOut;
