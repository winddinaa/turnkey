import { DataGridComponent } from "../../../components/common";
import TextComponent from "../../../components/common/Text";
import { ViewIcon } from "../../../components/Icon";

export const EColumnsHistory = () => [
  { field: "id", headerName: "History id" },
  { field: "department", headerName: "Department Name", flex: 1 },
  { field: "category", headerName: "Category Name", flex: 1 },
  { field: "area", headerName: "Area Name", flex: 1 },
  { field: "type", headerName: "Type", flex: 1 },
  {
    field: "action",
    headerName: "Action",
    sortable: false,
    disableColumnMenu: true,
    align: "center",
    renderCell: (params) => (
      <div className="flex items-center  gap-2 h-[100%]">
        <span className="cursor-pointer" onClick={() => onView(params.row)}>
          <ViewIcon />
        </span>
      </div>
    ), // ใช้ค่าที่เห็นได้ชัด
  },
];

const rows = Array.from({ length: 50 }, (_, i) => ({
  kpis_id: `${i + 1}`,
  area: `Area ${i + 1}`,
  category: `Category ${i + 1}`,
  kpis: `KPIs ${i + 1}`,
  employee_count: 50,
  type: `Type${i + 1}`,
  status: `Status${i + 1}`,
  department: `department${i + 1}`,
}));

export const EColumnsReport = (onView) => [
  { field: "kpis_id", headerName: "KPIs ID" },
  { field: "area", headerName: "Area Name", flex: 1 },
  { field: "category", headerName: "Category Name", flex: 1 },
  { field: "kpis_name", headerName: "KPIs Name", flex: 1 },
  { field: "employee_count", headerName: "Employee count", flex: 1 },
  {
    field: "action",
    headerName: "Action",
    sortable: false,
    disableColumnMenu: true,
    align: "center",
    renderCell: (params) => (
      <div className="flex items-center  gap-2 h-[100%]">
        <span className="cursor-pointer" onClick={() => onView(params.row)}>
          <ViewIcon />
        </span>
      </div>
    ), // ใช้ค่าที่เห็นได้ชัด
  },
];

export const Eyears = [
  {
    value: "2025",
    label: "2025",
  },
  {
    value: "2026",
    label: "2026",
  },
];

export const data = (onEmployee) => [
  {
    label: "Department1(12)",
    value: "department1",
    desc: (
      <DataGridComponent
        getRowId={(row) => row.kpis_id}
        columns={EColumnsReport(onEmployee)}
        rows={rows}
      />
    ),
  },
  {
    label: "Department2(20)",
    value: "department2",
    desc: (
      <DataGridComponent
        getRowId={(row) => row.kpis_id}
        columns={EColumnsReport(onEmployee)}
        rows={rows}
      />
    ),
  },
];

export const headerAssignment = [
  "Assign ID",
  "Start  Evaluation Date",
  "End  Evaluation Date",
  "Type",
  "Status",
];

export const empRows = Array.from({ length: 50 }, (_, i) => ({
  id: `Emp${i + 1}`,
  employee_name: `employee${i + 1}`,
  positon: `positon ${i + 1}`,
  org: `org ${i + 1}`,
  supervisor: `supervisor ${i + 1}`,
  employee: `${i + 1}`,
  imdManager: `imdManager${i + 1}`,
}));

export const EColumnsEmpInKPIs = (redux, onDelete) => [
  { field: "id", headerName: "No." },
  { field: "employee_name", headerName: "Employee Name", flex: 1 },
  { field: "positon", headerName: "Positon", flex: 1 },
  { field: "org", headerName: "Organization Unit", flex: 1 },
  { field: "supervisor", headerName: "Direct Supervisor", flex: 1 },
  { field: "imdManager", headerName: "Immediate Manager", flex: 1 },
];
