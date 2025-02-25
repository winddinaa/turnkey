import { Typography } from "@material-tailwind/react";
import { DeleteIcon, DotIcon, EditIcon, ViewIcon } from "../../components/Icon";

export const EColumnsKPIDepartment = [
  { field: "id", headerName: "No." },
  { field: "department", headerName: "Department Name", flex: 1 },
  { field: "kpis", headerName: "KPIs", flex: 1 },
  { field: "category", headerName: "Category Name", flex: 1 },
  { field: "area", headerName: "Area Name", flex: 1 },
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
  { field: "type", headerName: "Type", flex: 1 },
  {
    field: "action",
    headerName: "Action",
    flex: 1,
    sortable: false,
    disableColumnMenu: true,
    renderCell: (params) => (
      <div className="flex items-center  gap-2 h-[100%]">
        <ViewIcon />
        <EditIcon />
        <DeleteIcon />
      </div>
    ), // ใช้ค่าที่เห็นได้ชัด
  },
];
