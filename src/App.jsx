import { Route, Routes } from "react-router-dom";
import "./App.css";
import "./index.css";
import Dashboard from "./pages/Dashboard";
import Management from "./pages/Management";
import ManagementKPI from "./pages/ManagementKPI";
import Report from "./pages/Report";
import Setting from "./pages/Setting";
import AssignKPI from "./pages/Assign"; // Ensure this is imported
import TrackKPI from "./pages/Track"; // Ensure this is imported
import Performance from "./pages/Performance";
import Department from "./pages/Department";
import Department_2 from "./pages/Department_2";
import KPILevel from "./pages/KPILevel";
import Sub2 from "./pages/Sub2";
import Employee from "./pages/Employee";
import Employee_2 from "./pages/Employee_2";
import { EPathPage } from "./constants/enum";
import AreaPage from "./pages/Admin/Area";
import LayOut from "./components/Layout";
import WrapLayout from "./core/WrapLayout";
import KPIDepartmentPage from "./pages/Admin/KPIDepartment";
import KPIEmployeePage from "./pages/Admin/KPIEmployee";
import KPIHistoryPage from "./pages/Admin/KPIHistory";
import LoginPage from "./pages/Login";
function App() {
  const adminRoute = () => {
    return (
      <>
        <Route path="/admin-kpis-department" element={<KPIDepartmentPage />} />
        <Route path="/admin-kpis-employee" element={<KPIEmployeePage />} />
        <Route path="/admin-kpis-history" element={<KPIHistoryPage />} />
      </>
    );
  };

  return (
    <WrapLayout>
      <LayOut>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Management" element={<Management />} />
          <Route path={`/${EPathPage.area}`} element={<AreaPage />} />
          <Route path="/Employee" element={<Employee />} />
          <Route path="/Employee/2" element={<Employee_2 />} />
          <Route path="/KPILevel" element={<KPILevel />} />
          {adminRoute()}
          <Route path="/SubCategory/2" element={<Sub2 />} />
          <Route path="/Department" element={<Department />} />
          <Route path="/Department/2" element={<Department_2 />} />
          <Route path="/KPIManagement" element={<ManagementKPI />} />
          <Route path="/Assign" element={<AssignKPI />} />
          <Route path="/Track" element={<TrackKPI />} />
          <Route path="/Report" element={<Report />} />
          <Route path="/Settings" element={<Setting />} />
          <Route path="/Performance" element={<Performance />} />
        </Routes>
      </LayOut>
    </WrapLayout>
  );
}

export default App;
