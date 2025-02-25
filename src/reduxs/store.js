import { configureStore } from "@reduxjs/toolkit";
import screenSizeReducer from "./screenSize/screenSizeSlice";
import sideBarReducer from "./sidebar/sidebarSlice";
import kpiDeptReducer from "./kpiDepartment/kpiDepartmentSlice";

export const store = configureStore({
  reducer: {
    screenSize: screenSizeReducer,
    sidebar: sideBarReducer,
    kpiDept: kpiDeptReducer,
  },
});
