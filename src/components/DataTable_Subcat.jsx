import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import Switch from "./Switch";

const DataTable_Subcat = ({ headers = [], data = [] }) => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("detail");
  const [formValues, setFormValues] = useState({
    departmentName: "",
    departmentId: "",
    targets: "",
    manager: null,
  });
  const [rows, setRows] = useState([{ id: 1, value: "" }]);
  const navigate = useNavigate();

  // Navigation Function
  const goToDetailWithState2 = () => {
    navigate('/SubCategory/2', { state: { from: 'Sub2' } });
  };

  // Handle Input Change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Add New Row in Matrix
  const addNewRow = () => {
    const newId = rows.length > 0 ? rows[rows.length - 1].id + 1 : 1;
    setRows([...rows, { id: newId, value: "" }]);
  };

  // Handle Matrix Input Change
  const handleMatrixInputChange = (e, id) => {
    const { value } = e.target;
    setRows((prevRows) =>
      prevRows.map((row) => (row.id === id ? { ...row, value } : row))
    );
  };

  // Handle Select All
  const handleSelectAll = (isChecked) => {
    if (isChecked) {
      setSelectedRows(data.map((_, index) => index));
    } else {
      setSelectedRows([]);
    }
  };

  // Handle Row Selection
  const handleRowSelection = (index, isChecked) => {
    if (isChecked) {
      setSelectedRows((prev) => [...prev, index]);
    } else {
      setSelectedRows((prev) => prev.filter((i) => i !== index));
    }
  };

  const isFormValid =
    formValues.departmentName.trim() !== "" &&
    formValues.departmentId.trim() !== "" &&
    formValues.targets.trim() !== "";

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
                <p className="mt-10">No KPIs Level List Available</p>
                <button
                  className="mt-10 button__style__table__subcat"
                  onClick={() => setIsModalOpen(true)}
                >
                  <i className="ri-add-fill"></i> Create KPIs Level List
                </button>
              </td>
            </tr>
          ) : (
            data.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className={rowIndex % 2 === 0 ? "bg-white" : "bg-gray-50"}
              >
                <td className="px-4 py-2">
                  <input
                    type="checkbox"
                    checked={selectedRows.includes(rowIndex)}
                    onChange={(e) =>
                      handleRowSelection(rowIndex, e.target.checked)
                    }
                  />
                </td>
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

      {isModalOpen && (
        <div
          className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="bg-white p-6 rounded shadow-lg w-6/12 max-h-[500px] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-3xl font-semibold mb-4">Create KPIs Level List</h2>
            <div className="flex gap-10">
              <p
                className={`text-xl cursor-pointer ${
                  activeTab === "detail" ? "font-bold text-blue-500 underline" : ""
                }`}
                onClick={() => setActiveTab("detail")}
              >
                Detail
              </p>
              <p
                className={`text-xl cursor-pointer ${
                  activeTab === "matrix" ? "font-bold text-blue-500 underline" : ""
                }`}
                onClick={() => setActiveTab("matrix")}
              >
                Matrix
              </p>
            </div>
            {activeTab === "detail" && (
              <div className="mt-4">
                <label className="block text-xl mt-5 mb-5">
                  Objective Name
                </label>
                <input
                  type="text"
                  name="departmentName"
                  value={formValues.departmentName}
                  onChange={handleInputChange}
                  className="border p-3 w-full rounded"
                  placeholder="Enter Objective Name"
                />
                <label className="block text-xl mt-5 mb-5">
                  Desired results
                </label>
                <input
                  type="text"
                  name="departmentId"
                  value={formValues.departmentId}
                  onChange={handleInputChange}
                  className="border p-3 w-full rounded"
                  placeholder="Enter desired results"
                />
                <label className="block text-xl mt-5 mb-5">Targets</label>
                <input
                  type="text"
                  name="targets"
                  value={formValues.targets}
                  onChange={handleInputChange}
                  className="border p-3 w-full rounded"
                  placeholder="Enter targets"
                />
                <label className="block text-xl mt-5 mb-5">Status</label>
                <Switch />
              </div>
            )}
            {activeTab === "matrix" && (
              <div className="mt-6">
                <button
                  className="text-lg font-normal text__purple"
                  onClick={addNewRow}
                >
                  <i className="ri-add-fill mr-2"></i> Add New Matrics
                </button>
                <table className="bg-white table-auto w-full mt-5">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="text-xl">No.</th>
                      <th className="text-left text-xl">Evaluation Criteria</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map((row) => (
                      <tr key={row.id}>
                        <td className="text-center p-4">{row.id}</td>
                        <td>
                          <input
                            type="text"
                            value={row.value}
                            onChange={(e) => handleMatrixInputChange(e, row.id)}
                            className="w-full border-0 focus:outline-none focus:ring-0"
                            placeholder="Enter your criteria"
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
            <div className="flex justify-end">
              <button
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 mr-4"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
              <button
                onClick={goToDetailWithState2}
                className={`px-4 py-2 rounded ${
                  isFormValid
                    ? "bg-blue-500 text-white hover:bg-blue-600"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
                disabled={!isFormValid}
              >
                Create KPIs Level List
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DataTable_Subcat;
