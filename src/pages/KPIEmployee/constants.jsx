import { DeleteIcon, DotIcon, EditIcon, ViewIcon } from "../../components/Icon";

export const EColumnsKPIEmployee = () => [
  { field: "id", headerName: "No." },
  { field: "department", headerName: "Department Name", flex: 1 },
  { field: "kpis", headerName: "KPIs", flex: 1 },
  { field: "category", headerName: "Category Name", flex: 1 },
  { field: "area", headerName: "Area Name", flex: 1 },
  { field: "type", headerName: "Type", flex: 1 },
  {
    field: "status",
    headerName: "Status",
    renderCell: (params) => (
      <div className="flex items-center  gap-2 ">
        <DotIcon />
        <p>{params.row.status}</p>
      </div>
    ),
  },
];

export const EColumnEmployee = () => [
  { field: "id", headerName: "No." },
  { field: "employeeName", headerName: "Employee Name", flex: 1 },
  { field: "employeePosition", headerName: "Position", flex: 1 },
  { field: "Organization", headerName: "Organization Unit", flex: 1 },
  { field: "supervisor", headerName: "Direct Supervisor", flex: 1 },
  { field: "ImmediateManager", headerName: "Immediate Manager", flex: 1 },
];
