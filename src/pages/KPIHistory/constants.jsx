import { DeleteIcon, DotIcon, EditIcon, ViewIcon } from "../../components/Icon";

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
