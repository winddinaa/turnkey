import {
  DeleteIcon,
  DotIcon,
  EditIcon,
  ViewIcon,
} from "../../../components/Icon";

export const EColumnsEmployee = (onView, onEdit, onDelete) => [
  { field: "employeeId", headerName: "Employee ID", flex: 1 },
  { field: "employee_code", headerName: "Employee Code", flex: 1 },
  { field: "employee_name", headerName: "Employee name", flex: 1 },
  { field: "roleId", headerName: "Role", flex: 1 },
  { field: "department", headerName: "Department", flex: 1 },
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

export const mockDepartment = [
  {
    value: "department1",
    label: "department1",
  },
  {
    value: "department2",
    label: "department2",
  },
];

export const mockRole = [
  {
    value: "admin",
    label: "admin",
  },
  {
    value: "employee",
    label: "employee",
  },
];

export const mockPosition = [
  {
    value: "tester",
    label: "Tester",
  },
  {
    value: "programer",
    label: "Programer",
  },
];

export const rows = Array.from({ length: 50 }, (_, i) => ({
  employeeId: i + 1,
  employee_code: `code 00${i + 1}`,
  firstname: `fistname${i + 1}`,
  lastname: `lastname${i + 1}`,
  employee_name: `fistname${i + 1} lastname${i + 1}`,
  department: `department1`,
  position: `tester`,
  roleId: `admin`,
  status: `active`,
  phonnumber: `06233895${i > 9 ? i + 1 : "0" + i + 1}`,
  email: `example${i + 1}@gmail.com`,
}));
