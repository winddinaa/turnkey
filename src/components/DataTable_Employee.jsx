import React, { useState } from "react";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
const DataTable_Employee = ({ headers = [], data = [] }) => {
    console.log("Headers:", headers);
    console.log("Data:", data);
  const [selectedRows, setSelectedRows] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const goToDetailWithState = () => {
    navigate('/Employee/2', {state: { from: 'Employee_2'}});
  }

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
                <p className="mt-10" onClick={goToDetailWithState}>No Employee Available</p>
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
    </div>
  );
};

export default DataTable_Employee;