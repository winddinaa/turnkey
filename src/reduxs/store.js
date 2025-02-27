import { configureStore } from "@reduxjs/toolkit";
import screenSizeReducer from "./screenSize/screenSizeSlice";
import sideBarReducer from "./sidebar/sidebarSlice";
import kpiDeptReducer from "./kpiDepartment/kpiDepartmentSlice";
import kpiEmpReducer from "./kpiEmployee/kpiEmployeeSlice";
import authReducer from "./auth/authSlice";

export const store = configureStore({
  reducer: {
    screenSize: screenSizeReducer,
    sidebar: sideBarReducer,
    kpiDept: kpiDeptReducer,
    kpiEmp: kpiEmpReducer,
    auth: authReducer,
  },
});
