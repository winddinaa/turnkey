import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import Select from "react-select";
import DataTable from "../components/DataTable";
import "remixicon/fonts/remixicon.css";
import Switch from "../components/Switch";
import Modal from "react-modal";
import Kristi from "../assets/images/Kristi.png"
import Call from "../assets/images/Call.png"
import Mail from "../assets/images/Mail.png"
import Address from "../assets/images/address.png"
function Employee_2() {
  const [selectedDepartment, setSelectedDepartment] = useState("All");
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const headers = [
    "No.",
    "Employee Name",
    "Employee ID",
    "Position",
    "Department",
    "Status",
    "Action",
  ];

  const data = [
    [
      1,
      "Kristi Christiansen",
      "00001",
      "Full Stack Developer",
      "IT",
      <Switch />,
      <div className="flex flex-row gap-3">
        <i
          className="ri-eye-line eye__style cursor-pointer"
          onClick={() => setIsModalOpen2(true)}
        ></i>
      </div>,
    ],
    [
      2,
      "Lynn Brown",
      "00002",
      "Full Stack Developer",
      "Sales",
      <Switch />,
      <div className="flex flex-row gap-3">
        <i
          className="ri-eye-line eye__style cursor-pointer"
          onClick={() => setIsModalOpen2(true)}
        ></i>
      </div>,
    ],
  ];
  const options = [
    { value: "Active", label: "Active" },
    { value: "Inactive", label: "Inactive" },
  ];
  const options2 = [
    { value: "All", label: "All Department" },
    { value: "Marketing", label: "Marketing" },
    { value: "Sales", label: "Sales" },
    { value: "Finance", label: "Finance" },
    { value: "IT", label: "IT" },
  ];

  const filteredData = React.useMemo(() => {
    if (selectedDepartment === "All") {
      return data;
    }
    const departmentIndex = headers.indexOf("Department");
    return data.filter((row) => row[departmentIndex] === selectedDepartment);
  }, [data, selectedDepartment, headers]);

  const handleDepartmentChange = (selectedOption) => {
    setSelectedDepartment(selectedOption.value);
  };

  return (
    <article className="bg-white w-full h-full">
      <div className="container mx-auto p-4">
        <h1 className="mb-1">Employee Management</h1>
        <p className="font-light text-xl">
          View the employees within your organization
        </p>
        <SearchBar />
        <div className="flex flex-row justify-between">
          <div className="w-8/12 flex gap-5">
            <Select
              className="basic-single w-54 mt-10 mb-10"
              classNamePrefix="select"
              name="department"
              options={options2}
              placeholder="All Department"
              onChange={handleDepartmentChange}
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
        <div className="overflow-x-auto">
          <table className="bg-white table-auto w-full">
            <thead className="bg-gray-100">
              <tr>

                {headers.map((header, index) => (
                  <th
                    key={index}
                    className="border-b border-gray-500 bg-white px-4 py-2 text-left text-gray-600"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filteredData.length === 0 ? (
                <tr>
                  <td
                    colSpan={headers.length + 1}
                    className="text-center px-4 py-6 text-gray-500 text-xl font-semibold"
                  >
                    No Employees Found
                  </td>
                </tr>
              ) : (
                filteredData.map((row, rowIndex) => (
                  <tr
                    key={rowIndex}
                    className={rowIndex % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    {row.map((cell, cellIndex) => (
                      <td key={cellIndex} className="px-4 py-2 text-gray-700">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        {isModalOpen2 && (
        <div
          className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300"
          onClick={() => setIsModalOpen2(false)}
        >
          <div
            className="bg-white p-6 rounded shadow-lg w-6/12 transition-transform transform scale-100"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-3xl font-semibold mb-4">View Employee</h2>
            <hr className="mt-5 mb-5"/>
            <div className="flex flex-row justify-start gap-3">
                <div>
                    <img src={Kristi} alt="Kristi" width="100%" />
                </div>
                
                <div className="flex flex-col ">
                    <p className="text-xl">Kristi Christiansen</p>
                    <p className="text-[#6C6C6C] font-light">Full Stack Developer (IT)</p>
                </div>
            </div>
            <div className="flex flex-row justify-start gap-3 mt-7">
                <div>
                    <img src={Call} alt="call" />
                </div>
                <p className="text-[#6C6C6C] font-light text-xl padding_0">(+66) 67 4759 548</p>
            </div>
            <div className="flex flex-row justify-start gap-3 mt-7">
                <div>
                    <img src={Mail} alt="mail" className="mt-1" />
                </div>
                <p className="text-[#6C6C6C] font-light text-xl padding_0">Kristi_Christiansen@gmail.com</p>
            </div>
            <div className="flex flex-row justify-start gap-3 mt-7">
                <div>
                    <img src={Address} alt="address" className="mt-1" />
                </div>
                <p className="text-[#6C6C6C] font-light text-xl padding_0">73958 Larch Close, New Norbert 35047</p>
            </div>
            <div className="flex justify-end aligns-end">
              <button
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 mr-4"
                onClick={() => setIsModalOpen2(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
      </div>
    </article>
  );
}

export default Employee_2;
