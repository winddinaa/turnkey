import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const LayOut = ({ children }) => {
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
