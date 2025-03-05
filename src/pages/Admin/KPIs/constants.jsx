import {
  DeleteIcon,
  DotIcon,
  EditIcon,
  ViewIcon,
} from "../../../components/Icon";

export const EColumnsKPIs = (onView, onEdit, onDelete) => [
  { field: "kpisId", headerName: "KPIs ID", flex: 1 },
  { field: "kpis_name", headerName: "KPIs name", flex: 1 },
  { field: "area_name", headerName: "Area Name", flex: 1 },
  { field: "category_name", headerName: "Category name", flex: 1 },
  { field: "description", headerName: "Description", flex: 1 },
  { field: "target", headerName: "Target", flex: 1 },
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

export const mockCategory = [
  {
    value: "category1",
    label: "category1",
  },
  {
    value: "category2",
    label: "category2",
  },
];

export const mockKPIs = [
  {
    value: "kpis1",
    label: "KPIs 1",
  },
  {
    value: "kpis2",
    label: "KPIs 2",
  },
];

export const rows = Array.from({ length: 50 }, (_, i) => ({
  kpisId: i + 1,
  kpis_name: `kpis 00${i + 1}`,
  category_name: `category1`,
  target: `target 00${i + 1}`,
  description: `description 00${i + 1}`,
  area_name: `area1`,
  status: `active`,
}));
