import {
  DeleteIcon,
  DotIcon,
  EditIcon,
  ViewIcon,
} from "../../../components/Icon";

export const EColumnsCategory = (onView, onEdit, onDelete) => [
  { field: "categoryId", headerName: "Category ID", flex: 1 },
  { field: "category_name", headerName: "Category name", flex: 1 },
  { field: "description", headerName: "Description", flex: 1 },
  { field: "area_name", headerName: "Area Name", flex: 1 },
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
    value: "as-001",
    label: "as-001",
  },
  {
    value: "as-002",
    label: "as-002",
  },
];

export const mockArea = [
  {
    value: "area1",
    label: "area1",
  },
  {
    value: "area2",
    label: "area2",
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

export const rows = Array.from({ length: 50 }, (_, i) => ({
  categoryId: i + 1,
  category_name: `category 00${i + 1}`,
  description: `description 00${i + 1}`,
  area_name: `area1`,
  status: `active`,
}));
