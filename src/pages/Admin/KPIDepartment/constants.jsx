import {
  DeleteIcon,
  DotIcon,
  EditIcon,
  ViewIcon,
} from "../../../components/Icon";

export const init = {
  items: [{ department: {}, area: {}, category: [], kpis: [] }],
};
export const EColumnsKPIDepartment = (onView, onEdit, onDelete) => [
  { field: "id", headerName: "No." },
  { field: "department", headerName: "Department Name", flex: 1 },
  { field: "area", headerName: "Area Name", flex: 1 },
  { field: "categories", headerName: "Category Name", flex: 1 },
  { field: "kpis", headerName: "KPIs", flex: 1 },
  { field: "employee", headerName: "Employee", flex: 1 },
  {
    field: "action",
    headerName: "Action",
    flex: 1,
    sortable: false,
    disableColumnMenu: true,
    renderCell: (params) => (
      <div className="flex items-center  gap-2 h-[100%]">
        <span className="cursor-pointer" onClick={() => onView(params.row)}>
          <ViewIcon />
        </span>
        <span className="cursor-pointer" onClick={() => onEdit(params.row)}>
          <EditIcon />
        </span>
        <span className="cursor-pointer" onClick={() => onDelete(params.row)}>
          <DeleteIcon />
        </span>
      </div>
    ), // ใช้ค่าที่เห็นได้ชัด
  },
];

export const mockKPI = [
  {
    value: "kpis1",
    label: "KPIs 1",
  },
  {
    value: "kpi2",
    label: "KPI 2",
  },
];

export const mockCategory = [
  {
    value: "category1",
    label: "Category 1",
  },
  {
    value: "category2",
    label: "Category 2",
  },
];

export const mockArea = [
  {
    value: "area1",
    label: "Area 1",
  },
  {
    value: "area2",
    label: "Area 2",
  },
];

export const mockStatus = [
  {
    value: "active",
    label: "active",
  },
  {
    value: "inactive",
    label: "inactive",
  },
];

export const rows = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  department: `Department${i + 1}`,
  kpis: `KPIs ${i + 1}`,
  categories: `Category ${i + 1}`,
  area: `Area ${i + 1}`,
  employee: `${i + 1}`,
  status: "active",
}));
