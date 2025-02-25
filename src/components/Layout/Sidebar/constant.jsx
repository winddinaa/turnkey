import { EPathPage } from "../../../constants/enum";
import { ManageIcon, MeasurementIcon, PieIcon, ReportIcon } from "../../Icon";
import SettingIcon from "../../Icon/SettingIcon";

export const sideMenu = [
  {
    title: "Management",
    keyOpen: 1,
    icon: ManageIcon,
    submenu: [
      { title: "Area", href: EPathPage.area },
      { title: "Category", href: "" },
      { title: "KPIs", href: "" },
      { title: "Department", href: "" },
      { title: "Employee", href: "" },
    ],
  },
  {
    title: "Assign KPIs",
    keyOpen: 3,
    icon: PieIcon,
    submenu: [
      { title: "KPIs Department", href: "kpis-department" },
      { title: "KPIs Employee", href: "kpis-employee" },
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
