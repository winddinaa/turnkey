import { EPathPageAdmin } from "../../../constants/enum";
import { ManageIcon, MeasurementIcon, PieIcon, ReportIcon } from "../../Icon";
import SettingIcon from "../../Icon/SettingIcon";

export const sideMenu = [
  {
    title: "Management",
    keyOpen: 1,
    icon: ManageIcon,
    submenu: [
      { title: "Area", href: EPathPageAdmin.area },
      { title: "Category", href: EPathPageAdmin.category },
      { title: "KPIs", href: EPathPageAdmin.kpis },
      { title: "Assignment", href: EPathPageAdmin.assignMent },
      { title: "Department", href: EPathPageAdmin.dept },
      { title: "Employee", href: EPathPageAdmin.emp },
    ],
  },
  {
    title: "KPIs",
    keyOpen: 3,
    icon: PieIcon,
    submenu: [
      { title: "Assign KPIs", href: EPathPageAdmin.assignKPIs },
      { title: "KPIs report", href: EPathPageAdmin.assignKPIsReport },
    ],
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

export const sideMenuEmployee = [
  {
    title: "Dashboard",
    keyOpen: 4,
    icon: MeasurementIcon,
    submenu: [],
  },
  {
    title: "Individual KPIs Report",
    keyOpen: 5,
    icon: ReportIcon,
    submenu: [],
  },

  {
    title: "Team KPIs Report",
    keyOpen: 6,
    icon: SettingIcon,
    submenu: [],
  },

  {
    title: "Measurement",
    keyOpen: 6,
    icon: SettingIcon,
    submenu: [],
  },

  {
    title: "Assign KPI",
    keyOpen: 6,
    icon: SettingIcon,
    submenu: [],
  },
];
