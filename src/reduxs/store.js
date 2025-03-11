import { configureStore } from "@reduxjs/toolkit";
import screenSizeReducer from "./screenSize/screenSizeSlice";
import sideBarReducer from "./sidebar/sidebarSlice";
import kpiDeptReducer from "./kpiDepartment/kpiDepartmentSlice";
import authReducer from "./auth/authSlice";
import assignReducer from "./assignment/assignmentSlice";
import areaReducer from "./area/areaSlice";
import categoryReducer from "./category/categorySlice";
import kpisReducer from "./kpis/kpisSlice";
import deptReducer from "./department/departmentSlice";
import empReducer from "./employee/employeeSlice";
import kpisAssignReportReducer from "./kpisAssignReport/kpiAssignReport";
import evaReducer from "./evaluation/evaluationSlice";

export const store = configureStore({
  reducer: {
    screenSize: screenSizeReducer,
    sidebar: sideBarReducer,
    kpiDept: kpiDeptReducer,
    auth: authReducer,
    assign: assignReducer,
    area: areaReducer,
    category: categoryReducer,
    kpis: kpisReducer,
    dept: deptReducer,
    emp: empReducer,
    kpisAssignReport: kpisAssignReportReducer,
    eva: evaReducer,
  },
});
