import {
  DeleteIcon,
  DotIcon,
  EditIcon,
  ViewIcon,
} from "../../../components/Icon";

export const EColumnsArea = (onView, onEdit, onDelete) => [
  { field: "areaId", headerName: "Area ID", flex: 1 },
  { field: "area_name", headerName: "Area name", flex: 1 },
  {
    field: "status",
    headerName: "Status",
    flex: 1,
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
    value: "as-001",
    label: "as-001",
  },
  {
    value: "as-002",
    label: "as-002",
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
  areaId: i + 1,
  area_name: `area 00${i + 1}`,
  description: `description 00${i + 1}`,
  status: `active`,
}));
