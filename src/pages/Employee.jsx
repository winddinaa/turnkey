import React, { useState } from "react";
import DataTable_Employee from "../components/DataTable_Employee";
import SearchBar from "../components/SearchBar";
import Select from "react-select";
function Employee() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const headers = [
    "No.",
    "Employee Name",
    "Position",
    "Department",
    "Status",
    "Action",
  ];
  const data1 = [];
  const options = [
    { value: "Active", label: "Active" },
    { value: "Inactive", label: "Inactive" },
  ];
  const options2 = [
    { value: "All Department", label: "All Department" },
    { value: "Marketing", label: "Marketing" },
    { value: "Sale", label: "Sale" },
    { value: "Finance", label: "Finance" },
    { value: "IT", label: "IT" },
  ];
  return (
    <article className="bg-white w-full h-full">
      <div className="container mx-auto p-4">
        <h1 className="mb-1">Employee Management</h1>
        <p className="font-light text-xl">
          View the employee within your organization.
        </p>
        <SearchBar />
        <div className="flex flex-row justify-between">
          <div className="w-8/12 flex gap-5">
            <Select
              className="basic-single w-5/12 mt-10 mb-10"
              classNamePrefix="select"
              defaultValue={""}
              name="status"
              options={options2}
              placeholder="All Department"
            />
            <Select
              className="basic-single w-44 mt-10 mb-10"
              classNamePrefix="select"
              defaultValue={""}
              name="status"
              options={options}
              placeholder="All Status"
            />
          </div>
        </div>

        <DataTable_Employee headers={headers} data={data1} />
      </div>
    </article>
  );
}

export default Employee;
