import React, { useState } from "react";
import Select from "react-select";

const DataTable = ({ headers = [], data = [] }) => {
    console.log("Headers:", headers);
    console.log("Data:", data);
  const [selectedRows, setSelectedRows] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formValues, setFormValues] = useState({
    departmentName: "",
    departmentId: "",
    manager: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelectChange = (selectedOption) => {
    setFormValues((prev) => ({
      ...prev,
      manager: selectedOption,
    }));
  };

  const isFormValid =
    formValues.departmentName.trim() !== "" &&
    formValues.departmentId.trim() !== "" &&
    formValues.manager !== null;

  const handleSelectAll = (isChecked) => {
    if (isChecked) {
      setSelectedRows(data.map((_, index) => index)); // Select all row indices
    } else {
      setSelectedRows([]); // Deselect all
    }
  };

  const handleRowSelection = (index, isChecked) => {
    if (isChecked) {
      setSelectedRows((prev) => [...prev, index]);
    } else {
      setSelectedRows((prev) => prev.filter((i) => i !== index));
    }
  };

  const options = [
    { value: "Davis Macus", label: "Davis Macus" },
    { value: "Joshua John", label: "Joshua John" },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="bg-white table-auto w-full">
        <thead className="bg-gray-100">
          <tr>
            <th className="border-b border-gray-500 bg-white w-12 px-4 py-2">
              <input
                type="checkbox"
                onChange={(e) => handleSelectAll(e.target.checked)}
              />
            </th>
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
          {data.length === 0 ? (
            <tr>
              <td
                colSpan={headers.length + 1}
                className="text-center px-4 py-6 text-gray-500 text-xl font-semibold"
              >
                <p className="mt-10">No Category Available</p>
                <button
                  className="mt-10 button__style__table"
                  onClick={() => setIsModalOpen(true)}
                >
                  <i className="ri-add-fill"></i> Create Category
                </button>
              </td>
            </tr>
          ) : (
            data.map((row, rowIndex) => (
            
              <tr
                key={rowIndex}
                className={rowIndex % 2 === 0 ? "bg-white" : "bg-gray-50"}
              >
                <td className=" px-4 py-2">
                  <input
                    type="checkbox"
                    checked={selectedRows.includes(rowIndex)}
                    onChange={(e) =>
                      handleRowSelection(rowIndex, e.target.checked)
                    }
                  />
                </td>
                {row.map((cell, cellIndex) => (
                  <td
                    key={cellIndex}
                    className="px-4 py-2 text-gray-700"
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>

      {isModalOpen && (
        <div
          className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="bg-white p-6 rounded shadow-lg w-6/12 transition-transform transform scale-100 max-h-[500px] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-3xl font-semibold mb-4">Create Department</h2>
            <div className="mt-14">
              <label className="block text-xl mt-5 mb-5">Departments Name</label>
              <input
                type="text"
                name="departmentName"
                value={formValues.departmentName}
                onChange={handleInputChange}
                className="border-solid border border__color__input p-3 w-full rounded"
                placeholder="Enter Department Name"
              />
              <label className="block text-xl mt-5 mb-5">Departments ID</label>
              <input
                type="text"
                name="departmentId"
                value={formValues.departmentId}
                onChange={handleInputChange}
                className="border-solid border border__color__input p-3 w-full rounded"
                placeholder="Enter Department ID"
              />
              <label className="block text-xl mt-5 mb-5">Manager</label>
              <Select
                className="basic-single w-full mt-10 mb-10"
                classNamePrefix="select"
                value={formValues.manager}
                onChange={handleSelectChange}
                name="manager"
                options={options}
                placeholder="Choose Your Manager"
              />
            </div>
            <div className="flex justify-end aligns-end">
              <button
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 mr-4"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
              <button
                className={`px-4 py-2 rounded ${
                  isFormValid
                    ? "bg-blue-500 text-white hover:bg-blue-600"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
                disabled={!isFormValid}
              >
                Create Category
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DataTable;
