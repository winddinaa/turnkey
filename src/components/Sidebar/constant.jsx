import { ManageIcon, MeasurementIcon, PieIcon, ReportIcon } from "../Icon";
import SettingIcon from "../Icon/SettingIcon";

export const sideMenu = [
  {
    title: "Management",
    keyOpen: 1,
    icon: ManageIcon,
    submenu: [
      { title: "Area", href: "" },
      { title: "Category" },
      { title: "Department" },
      { title: "Employee" },
    ],
  },
  {
    title: "KPIs",
    keyOpen: 2,
    icon: ManageIcon,
    submenu: [],
  },
  {
    title: "KPI Management",
    keyOpen: 3,
    icon: PieIcon,
    submenu: [{ title: "KPIs Department" }, { title: "KPIs Employee" }],
  },
  {
    title: "Measurement",
    keyOpen: 4,
    icon: MeasurementIcon,
    submenu: [],
  },
  {
    title: "Report",
    keyOpen: 5,
    icon: ReportIcon,
    submenu: [],
  },

  {
    title: "Setting",
    keyOpen: 6,
    icon: SettingIcon,
    submenu: [],
  },
];
