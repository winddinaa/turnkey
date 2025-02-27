import { MoreVertical } from "lucide-react";
import profile from "../../../assets//images/Profile.png";
import { useState } from "react";
import React from "react";

import { useSelector } from "react-redux";
import { LogoIcon } from "../../Icon";
import SidebarAdmin from "./SideBarAdmin";
import { ERoles } from "../../../constants/enum";
import SidebarEmployee from "./SidebarEmployee";

export default function Sidebar() {
  const [expanded, setExpanded] = useState(true);

  const sidebarRedux = useSelector((state) => state.sidebar);
  const authRedux = useSelector((state) => state.auth);
  return (
    <aside
      className={`${sidebarRedux.drawer ? "block" : "hidden"} min-h-screen`}
    >
      <nav className="min-h-screen flex flex-col bg-white border-r shadow-sm">
        <div className="p-4 pe-8 pb-2 flex justify-between items-center">
          <LogoIcon />
        </div>
        {authRedux.permission.includes(ERoles.admin) ? (
          <SidebarAdmin />
        ) : (
          <SidebarEmployee />
        )}

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
