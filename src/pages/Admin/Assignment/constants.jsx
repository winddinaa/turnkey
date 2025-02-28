import {
  DeleteIcon,
  DotIcon,
  EditIcon,
  ViewIcon,
} from "../../../components/Icon";

export const EColumnsAssignment = (onView, onEdit, onDelete) => [
  { field: "assignmentId", headerName: "Assignment ID" },
  { field: "assignmenttypeId", headerName: "Assignment Type", flex: 1 },
  { field: "assignmentName", headerName: "Assignment Name", flex: 1 },
  { field: "description", headerName: "Description", flex: 1 },
  { field: "fiscalYear", headerName: "Fiscal Year", flex: 1 },
  { field: "startDate", headerName: "Start Evaluation Date", flex: 1 },
  { field: "endDate", headerName: "End Evaluation Date", flex: 1 },
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

export const mockAssignmentType = [
  {
    value: "kpis1",
    label: "KPIs 1",
  },
  {
    value: "kpi2",
    label: "KPI 2",
  },
];

export const mockFiscal = [
  {
    value: "2025",
    label: "2025",
  },
  {
    value: "2026",
    label: "2026",
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
  assignmentId: i + 1,
  assignmenttypeId: `Assignment Type${i + 1}`,
  assignmentName: `Assignment Name ${i + 1}`,
  description: `Description ${i + 1}`,
  fiscalYear: `Fiscal Year ${i + 1}`,
  startDate: new Date(),
  endDate: new Date(),
  status: "Reviewing",
}));
