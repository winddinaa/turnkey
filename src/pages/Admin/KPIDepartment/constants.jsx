import isEmpty from "is-empty";
import { DataGridComponent } from "../../../components/common";
import {
  DeleteIcon,
  EditIcon,
  PersonalIcon,
  ViewIcon,
} from "../../../components/Icon";
import { colors } from "../../../core/theme/theme";

export const init = {
  items: [{ department: {}, area: {}, category: [], kpis: [] }],
};

export const empRows = Array.from({ length: 50 }, (_, i) => ({
  id: `Emp${i + 1}`,
  employee_name: `employee${i + 1}`,
  positon: `positon ${i + 1}`,
  org: `org ${i + 1}`,
  supervisor: `supervisor ${i + 1}`,
  employee: `${i + 1}`,
  imdManager: `imdManager${i + 1}`,
}));

export const EColumnsEmployee = [
  { field: "id", headerName: "No." },
  { field: "employee_name", headerName: "Employee Name", flex: 1 },
  { field: "positon", headerName: "Positon", flex: 1 },
  { field: "org", headerName: "Organization Unit", flex: 1 },
  { field: "supervisor", headerName: "Direct Supervisor", flex: 1 },
  { field: "imdManager", headerName: "Immediate Manager", flex: 1 },
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

export const EColumnsEmpInKPIs = (redux, onDelete) => [
  { field: "id", headerName: "No." },
  { field: "employee_name", headerName: "Employee Name", flex: 1 },
  { field: "positon", headerName: "Positon", flex: 1 },
  { field: "org", headerName: "Organization Unit", flex: 1 },
  { field: "supervisor", headerName: "Direct Supervisor", flex: 1 },
  { field: "imdManager", headerName: "Immediate Manager", flex: 1 },
  {
    field: "action",
    headerName: "Action",
    flex: 1,
    sortable: false,
    disableColumnMenu: true,
    renderCell: (params) => (
      <div className="flex items-center  gap-2 h-[100%]">
        <span
          className="cursor-pointer"
          title="Delete"
          onClick={(e) => {
            e.stopPropagation();
            onDelete(params.row);
          }}
        >
          {console.log(
            "=>",
            redux.empSelectforDelete.find((item) => item === params.row.id)
          )}
          <DeleteIcon
            fill={
              isEmpty(
                redux.empSelectforDelete.find((item) => item === params.row.id)
              )
                ? colors.defaultIcon
                : colors.localError
            }
          />
        </span>
      </div>
    ),
  },
];

export const headerDraft = [
  "Assign ID",
  "Start  Evaluation Date",
  "End  Evaluation Date",
  "Type",
  "Status",
];

export const headerAssignment = [
  "Assign ID",
  "Start  Evaluation Date",
  "End  Evaluation Date",
  "Type",
  "Status",
  "Action",
];

export const EColumnsKPIDepartment = (onView, onEdit, onDelete, onOpenEmp) => [
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
        <span
          className="cursor-pointer"
          title="View department"
          onClick={(e) => {
            e.stopPropagation();
            onView(params.row);
          }}
        >
          <ViewIcon />
        </span>
        <span
          className="cursor-pointer"
          title="Employee"
          onClick={(e) => {
            e.stopPropagation();
            onOpenEmp(params.row);
          }}
        >
          <PersonalIcon />
        </span>

        <span
          className="cursor-pointer"
          title="Edit"
          onClick={(e) => {
            e.stopPropagation();
            onEdit(params.row);
          }}
        >
          <EditIcon />
        </span>
        <span
          className="cursor-pointer"
          title="Delete"
          onClick={(e) => {
            e.stopPropagation();
            onDelete(params.row);
          }}
        >
          <DeleteIcon />
        </span>
      </div>
    ), // ใช้ค่าที่เห็นได้ชัด
  },
];

export const EColumnsKPIDepartmentDraft = [
  { field: "id", headerName: "No." },
  { field: "department", headerName: "Department Name", flex: 1 },
  { field: "area", headerName: "Area Name", flex: 1 },
  { field: "categories", headerName: "Category Name", flex: 1 },
  { field: "kpis", headerName: "KPIs", flex: 1 },
  { field: "employee", headerName: "Employee", flex: 1 },
];

export const mockDraftDepartment = () => {
  return Array.from({ length: 9 }, (_, i) => ({
    assignId: `as-00${i + 1}`,
    start: `2025-08-01`,
    end: `2025-12-31`,
    type: `type ${i + 1}`,
    rows: { rows },
    status: `active`,
    expandCollape: (
      <div className="w-full h-[60vh]">
        <DataGridComponent
          rows={rows}
          getRowId={(row) => {
            return row.id;
          }}
          columns={EColumnsKPIDepartmentDraft}
        />
      </div>
    ),
  }));
};

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
