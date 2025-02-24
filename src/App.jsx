import {
  LayoutDashboard,
  SquareChartGantt,
  ChartPie,
  ClipboardPlus,
  Settings,
  Circle,
  Globe,
} from "lucide-react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import Management from "./pages/Management";
import ManagementKPI from "./pages/ManagementKPI";
import Report from "./pages/Report";
import Setting from "./pages/Setting";
import AssignKPI from "./pages/Assign"; // Ensure this is imported
import TrackKPI from "./pages/Track"; // Ensure this is imported
import Performance from "./pages/Performance";
import Department from "./pages/Department";
import AreaLevel from "./pages/AreaLevel";
import Department_2 from "./pages/Department_2";
import KPILevel from "./pages/KPILevel";
import { useState } from "react";
import Sub2 from "./pages/Sub2";
import Employee from "./pages/Employee";
import Employee_2 from "./pages/Employee_2";
import SearchBar_Performance from "./components/SearchBar_Performance";
import Sidebar from "./components/Sidebar";
function App() {
  const [expanded, setExpanded] = useState(true);
  const [language, setLanguage] = useState("EN");

  const handleLanguageChange = (e) => {
    const newLang = e.target.value;
    setLanguage(newLang);
  };
  const [activeItem, setActiveItem] = useState("");
  return (
    <>
      <div className="flex">
        <Sidebar expanded={expanded} setExpaned={setExpanded}>
          {/* <SidebarItem icon={<SquareChartGantt size={20} />} text="Management" to="/Management"
          submenu = {[
              { text: "Department", to: "/Department", icon: <Circle size={10} /> },
              { text: "Employee", to: "/Employee", icon: <Circle size={10} /> },
              { text: "Area Level", to: "/AreaLevel", icon: <Circle size={10} /> },
              { text: "KPIs Level", to: "/KPILevel", icon: <Circle size={10} /> },
          ]} />
          <SidebarItem
            icon={<ChartPie size={20} />}
            text="KPI Management"
            to="/KPIManagement"
            submenu={[
              { text: "Track KPIs", to: "/Track", icon: <Circle size={10} /> },
              { text: "Performance", to: "/Performance", icon: <Circle size={10} /> },
            ]}
          />
          <SidebarItem icon={<Globe size={20} />} text="Language" to="#" 
          submenu={[
            {
              text: (
                <div onClick={(e) => e.stopPropagation()} style={{ pointerEvents: 'auto' }}>
                <select value={language} onChange={handleLanguageChange} style={{ pointerEvents: 'auto' }}>
                  <option value="EN">English</option>
                  <option value="TH">Thai</option>
                </select>
              </div>
              ),
            },
          ]} /> */}
        </Sidebar>
        <div className="flex-1 p-4">
          <Routes>
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/Management" element={<Management />} />
            <Route path="/AreaLevel" element={<AreaLevel />} />
            <Route path="/Employee" element={<Employee />} />
            <Route path="/Employee/2" element={<Employee_2 />} />
            <Route path="/KPILevel" element={<KPILevel />} />
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
        </div>
      </div>
    </>
  );
}

export default App;
