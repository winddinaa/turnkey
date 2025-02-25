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
import { useState } from "react";
import Sub2 from "./pages/Sub2";
import Employee from "./pages/Employee";
import Employee_2 from "./pages/Employee_2";
import Sidebar from "./components/Layout/Sidebar";
import { EPathPage } from "./constants/enum";
import AreaPage from "./pages/Area";
import LayOut from "./components/Layout";
import WrapLayout from "./components/WrapLayout";
import KPIDepartmentPage from "./pages/KPIDepartment";
function App() {
  const [expanded, setExpanded] = useState(true);
  const [language, setLanguage] = useState("EN");

  const handleLanguageChange = (e) => {
    const newLang = e.target.value;
    setLanguage(newLang);
  };
  const [activeItem, setActiveItem] = useState("");
  return (
    <WrapLayout>
      <LayOut>
        <Routes>
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Management" element={<Management />} />
          <Route path={`/${EPathPage.area}`} element={<AreaPage />} />
          <Route path="/Employee" element={<Employee />} />
          <Route path="/Employee/2" element={<Employee_2 />} />
          <Route path="/KPILevel" element={<KPILevel />} />
          <Route path="/kpis-department" element={<KPIDepartmentPage />} />
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
