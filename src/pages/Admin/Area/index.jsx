import React, { useState } from "react";
import SearchBar from "../../../components/SearchBar";
import Select from "react-select";
import DataTable from "../../../components/DataTable";
import "remixicon/fonts/remixicon.css";
import Switch from "../../../components/Switch";
function AreaPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [isModalOpen3, setIsModalOpen3] = useState(false);
  const [isModalOpen4, setIsModalOpen4] = useState(false);
  const handleSelectChange = (selectedOption) => {
    setFormValues((prev) => ({
      ...prev,
      manager: selectedOption,
    }));
  };

  const headers = ["No.", "Category Name", "Objective", "Status", "Action"];
  const data = [
    [
      1,
      "Project Timeline",
      0,
      <button className="bg-active">
        <i className="ri-circle-fill bg-circle-active"></i> Active
      </button>,
      <div className="flex flex-row gap-3">
        <i
          className="ri-eye-line eye__style cursor-pointer"
          onClick={() => setIsModalOpen2(true)}
        ></i>
        <i
          className="ri-pencil-line pencil__style cursor-pointer"
          onClick={() => setIsModalOpen3(true)}
        ></i>
        <i
          className="ri-delete-bin-5-line bin__style cursor-pointer"
          onClick={() => setIsModalOpen4(true)}
        ></i>
      </div>,
    ],
    [
      2,
      "Budget Variance",
      0,
      <button className="bg-active">
        <i className="ri-circle-fill bg-circle-active"></i> Active
      </button>,
      <div className="flex flex-row gap-3">
        <i className="ri-eye-line eye__style"></i>
        <i className="ri-pencil-line pencil__style"></i>
        <i className="ri-delete-bin-5-line bin__style"></i>
      </div>,
    ],
    [
      3,
      "Scope Creep",
      0,
      <button className="bg-active">
        <i className="ri-circle-fill bg-circle-active"></i> Active
      </button>,
      <div className="flex flex-row gap-3">
        <i className="ri-eye-line eye__style"></i>
        <i className="ri-pencil-line pencil__style"></i>
        <i className="ri-delete-bin-5-line bin__style"></i>
      </div>,
    ],
    [
      4,
      "Task Completion Rate",
      0,
      <button className="bg-active">
        <i className="ri-circle-fill bg-circle-inactive"></i> Inactive
      </button>,
      <div className="flex flex-row gap-3">
        <i className="ri-eye-line eye__style"></i>
        <i className="ri-pencil-line pencil__style"></i>
        <i className="ri-delete-bin-5-line bin__style"></i>
      </div>,
    ],
    [
      5,
      "Task Completion Rate",
      0,
      <button className="bg-active">
        <i className="ri-circle-fill bg-circle-inactive"></i> Inactive
      </button>,
      <div className="flex flex-row gap-3">
        <i className="ri-eye-line eye__style"></i>
        <i className="ri-pencil-line pencil__style"></i>
        <i className="ri-delete-bin-5-line bin__style"></i>
      </div>,
    ],
    [
      6,
      "Task Completion Rate",
      0,
      <button className="bg-active">
        <i className="ri-circle-fill bg-circle-inactive"></i> Inactive
      </button>,
      <div className="flex flex-row gap-3">
        <i className="ri-eye-line eye__style"></i>
        <i className="ri-pencil-line pencil__style"></i>
        <i className="ri-delete-bin-5-line bin__style"></i>
      </div>,
    ],
  ];
  const options = [
    { value: "Active", label: "Active" },
    { value: "Inactive", label: "Inactive" },
  ];

  const itemsPerPageOptions = [5, 10, 20, 50, 100];
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(itemsPerPageOptions[0]); // Default to 5 items per page

  // Calculate total pages
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Get current page data
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentPageData = data.slice(startIndex, startIndex + itemsPerPage);

  // Handle page change
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };
  const [activeTab, setActiveTab] = useState("detail");
  const [activeTab2, setActiveTab2] = useState("detail");
  const [formValues, setFormValues] = useState({
    departmentName: "Budget Variance",
  });
  const [formValues2, setFormValues2] = useState({
    departmentName2: "Project Management",
    weight2: 70,
  });
  const [selectedRadio2, setSelectedRadio2] = useState(true);
  const isFormValid2 =
    formValues2.departmentName2 !== "" &&
    formValues.weight2 !== "" &&
    selectedRadio2 !== false;
  const [selectedRadio, setSelectedRadio] = useState(true); // Track selected radio button

  // Check if the form is valid
  const isFormValid = formValues.departmentName.trim() !== "";

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleRadioChange = (e) => {
    setSelectedRadio(e.target.value);
  };
  const handleRadioChange2 = (e) => {
    setSelectedRadio2(e.target.value);
  };
  return (
    <article className="bg-white w-full h-full">
      <div className="container mx-auto p-4">
        <h1 className="mb-1">Area Level List</h1>
        <p className="font-light text-xl">
          Manage the area level list for your organization's departments KPI.
        </p>
        <SearchBar />
        <div className="flex flex-row justify-between">
          <div className="w-8/12 flex gap-5">
            <Select
              className="basic-single w-5/12 mt-10 mb-10"
              classNamePrefix="select"
              defaultValue={""}
              name="status"
              options={options}
              placeholder="Select Area Level List"
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

          <div className="flex justify-end items-start ">
            <button
              className="mt-10 button__style__table__subcat text-xl"
              onClick={() => setIsModalOpen(true)}
            >
              <i className="ri-add-fill"></i> Create Area Level List
            </button>
          </div>
        </div>

        <DataTable headers={headers} data={currentPageData} />
        <div className="flex flex-row justify-start items-center">
          <p className="w-40">Total {totalPages} Pages</p>
          <Select
            className="basic-single w-24 mt-10 mb-10"
            classNamePrefix="select"
            defaultValue={""}
            name="page"
            options={itemsPerPageOptions.map((value) => ({
              value,
              label: value,
            }))}
            placeholder={itemsPerPage}
            onChange={(e) => setItemsPerPage(Number(e.value))}
          />
          <div className="w-full">
            <div className="flex flex-row gap-3 justify-center">
              <i
                className="ri-skip-left-line arrow__size"
                onClick={() => handlePageChange(1)}
              ></i>
              <i
                className="ri-arrow-left-s-line arrow__size"
                onClick={() => handlePageChange(currentPage - 1)}
              ></i>
              {Array.from({ length: totalPages }, (_, i) => (
                <p
                  key={i}
                  className={`number__size ${
                    currentPage === i + 1 ? "active" : ""
                  }`}
                  onClick={() => handlePageChange(i + 1)}
                >
                  {i + 1}
                </p>
              ))}
              <i
                className="ri-arrow-right-s-line arrow__size"
                onClick={() => handlePageChange(currentPage + 1)}
              ></i>
              <i
                className="ri-skip-right-line arrow__size"
                onClick={() => handlePageChange(totalPages)}
              ></i>
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="bg-white p-6 rounded shadow-lg w-6/12 transition-transform transform scale-100"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-3xl font-semibold mb-4">
              Create Area Level List
            </h2>

            <article id="detail">
              <div className="mt-14">
                <label className="block text-xl mt-5 mb-5">
                  Area Level List Name
                </label>
                <input
                  type="text"
                  name="departmentName"
                  value={formValues.departmentName}
                  onChange={handleInputChange}
                  className="border-solid border border__color__input p-3 w-full rounded"
                  placeholder="Enter Category Name"
                />
              </div>
              <div className="text-xl mt-5 mb-5">Status</div>
              <Switch />
            </article>

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
                Create Area Level List
              </button>
            </div>
          </div>
        </div>
      )}
      {isModalOpen2 && (
        <div
          className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300"
          onClick={() => setIsModalOpen2(false)}
        >
          <div
            className="bg-white p-6 rounded shadow-lg w-6/12 transition-transform transform scale-100"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-3xl font-semibold mb-4">
              View Area Level List
            </h2>
            <label className="block text-xl mt-5 mb-5">
              Area Level List Name
            </label>
            <input
              type="text"
              name="departmentName"
              value="Area Level List Name"
              className="border-solid border border__color__input p-3 w-full rounded mb-5"
              placeholder="Enter Category Name"
              disabled
            />

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
      {isModalOpen3 && (
        <div
          className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300"
          onClick={() => setIsModalOpen3(false)}
        >
          <div
            className="bg-white p-6 rounded shadow-lg w-6/12 transition-transform transform scale-100"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-3xl font-semibold mb-4">
              Edit Area Level List
            </h2>

            {activeTab2 === "detail" && (
              <article id="detail">
                <div className="mt-14">
                  <label className="block text-xl mt-5 mb-5">
                    Area Level List Name
                  </label>
                  <input
                    type="text"
                    name="departmentName"
                    value={formValues.departmentName}
                    onChange={handleInputChange}
                    className="border-solid border border__color__input p-3 w-full rounded"
                    placeholder="Enter Category Name"
                  />
                </div>
                <div className="text-xl mt-5 mb-5">Status</div>
                <Switch />
              </article>
            )}
            {activeTab2 === "format" && (
              <article id="format">
                <div className="mt-6">
                  <p className="text-xl font-normal">
                    Please select your prefereed calculation method.
                  </p>
                  <div className="flex items-center mb-4 mt-10">
                    <input
                      id="default-radio-1"
                      type="radio"
                      value=""
                      name="default-radio"
                      className="w-4 h-4 text-blue-600 "
                      onChange={handleRadioChange2}
                    />
                    <label
                      htmlFor="default-radio-1"
                      className="ms-2 text-lg font-normal text-gray-900 dark:text-gray-300"
                    >
                      Standard: All KPIs have equal weight in the evaluation.
                    </label>
                  </div>
                  <div className="flex items-center mb-4">
                    <input
                      checked
                      id="default-radio-2"
                      type="radio"
                      value=""
                      name="default-radio"
                      onChange={handleRadioChange2}
                      className="w-4 h-4 text-blue-600"
                    />
                    <label
                      htmlFor="default-radio-2"
                      className="ms-2 text-lg font-normal text-gray-900 dark:text-gray-300"
                    >
                      Custom: Customize KPI Weights to Suit Your Needs.
                    </label>
                  </div>
                  <div className="flex items-center mb-3">
                    <label className="text-xl font-light w-28">Weights:</label>
                    <input
                      type="text"
                      name="weight"
                      value={formValues2.weight2}
                      onChange={handleInputChange}
                      className="border-solid border border__color__input p-3 w-full rounded"
                      placeholder=""
                    />
                  </div>
                  <p className="text-red-500 text-base font-light">
                    *Ensure the Total Weight Doesn't Exceed 100%
                  </p>
                </div>
              </article>
            )}

            <div className="flex justify-end aligns-end">
              <button
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 mr-4"
                onClick={() => setIsModalOpen3(false)}
              >
                Cancel
              </button>
              <button
                className={`px-4 py-2 rounded ${
                  isFormValid2
                    ? "bg-blue-500 text-white hover:bg-blue-600"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
                disabled={!isFormValid2}
              >
                Update
              </button>
            </div>
          </div>
        </div>
      )}
      {isModalOpen4 && (
        <div
          className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300"
          onClick={() => setIsModalOpen4(false)}
        >
          <div
            className="bg-white p-6 rounded shadow-lg w-6/12 transition-transform transform scale-100"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-3xl font-semibold mb-4">
              Delete Area Level List!!
            </h2>
            <hr className="mb-10" />
            <p className="text-xl font-semibold mb-5">Notification</p>
            <p className="mb-10">
              Are you sure you want to delete this area level list? This action
              cannot be done.
            </p>
            <div className="flex justify-end aligns-end">
              <button
                className="px-4 py-2 bg-white text-black rounded"
                onClick={() => setIsModalOpen4(false)}
              >
                Cancel
              </button>
              <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 mr-4">
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </article>
  );
}

export default AreaPage;
