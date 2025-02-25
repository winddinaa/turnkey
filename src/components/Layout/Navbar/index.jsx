import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { MenuIcon } from "../../Icon";
import ButtonComponent from "../../common/Button";
import { setDrawerSidebar } from "../../../reduxs/sidebar/sidebarSlice";

const Navbar = () => {
  const dispath = useDispatch();
  const sidebarRedux = useSelector((state) => state.sidebar);
  return (
    <div className="flex justify-between w-full bg-localWhite p-5 ">
      <ButtonComponent
        variant="text"
        onClick={() => dispath(setDrawerSidebar(!sidebarRedux.drawer))}
      >
        <MenuIcon />
      </ButtonComponent>

      <div>Navbar</div>
    </div>
  );
};

export default Navbar;
