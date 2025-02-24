import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import Select from "react-select";
import DataTable from "../components/DataTable";
import "remixicon/fonts/remixicon.css";
import Switch from "../components/Switch";
function Sub2() {
  const [newCriteria, setNewCriteria] = useState("");
  const [rows, setRows] = useState([{ id: 1, value: "" }]);
  const addNewRow2 = () => {
    const newId = rows.length > 0 ? rows[rows.length - 1].id + 1 : 6; // Start new IDs after the static rows
    setRows([...rows, { id: newId, value: newCriteria }]);
    setNewCriteria(""); // Clear the input field after adding
  };
  const addNewRow = () => {
    const newId = rows.length > 0 ? rows[rows.length - 1].id + 1 : 6; // Start new IDs after the static rows
    setRows([...rows, { id: newId, value: newCriteria }]);
    setNewCriteria(""); // Clear the input field after adding
  };
  const handleMatrixInputChange = (e, id) => {
    const { value } = e.target;
    setRows((prevRows) =>
      prevRows.map((row) => (row.id === id ? { ...row, value } : row))
    );
  };
 
    const [selectedRows, setSelectedRows] = useState([]);
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
  
    const headers = ["No.", "Objective Name", "Status", "Action"];
    const data = [
      [
        1,
        "Project Timeline",
        <button className="bg-active">
          <i class="ri-circle-fill bg-circle-active"></i> Active
        </button>,
        <div class="flex flex-row gap-3">
          <i class="ri-eye-line eye__style cursor-pointer" onClick={() => setIsModalOpen2(true)}></i>
          <i class="ri-pencil-line pencil__style cursor-pointer"  onClick={() => setIsModalOpen3(true)}></i>
          <i class="ri-delete-bin-5-line bin__style cursor-pointer" onClick={() => setIsModalOpen4(true)}></i>
        </div>,
      ],
      [
        2,
        "Budget Variance",
        <button className="bg-active">
          <i class="ri-circle-fill bg-circle-active"></i> Active
        </button>,
        <div class="flex flex-row gap-3">
          <i class="ri-eye-line eye__style"></i>
          <i class="ri-pencil-line pencil__style"></i>
          <i class="ri-delete-bin-5-line bin__style"></i>
        </div>,
      ],
      [
        3,
        "Scope Creep",
        <button className="bg-active">
          <i class="ri-circle-fill bg-circle-active"></i> Active
        </button>,
        <div class="flex flex-row gap-3">
          <i class="ri-eye-line eye__style"></i>
          <i class="ri-pencil-line pencil__style"></i>
          <i class="ri-delete-bin-5-line bin__style"></i>
        </div>,
      ],
      [
        4,
        "Task Completion Rate",
        <button className="bg-active">
          <i class="ri-circle-fill bg-circle-inactive"></i> Inactive
        </button>,
        <div class="flex flex-row gap-3">
          <i class="ri-eye-line eye__style"></i>
          <i class="ri-pencil-line pencil__style"></i>
          <i class="ri-delete-bin-5-line bin__style"></i>
        </div>,
      ],
      [
        5,
        "Task Completion Rate",
        <button className="bg-active">
          <i class="ri-circle-fill bg-circle-inactive"></i> Inactive
        </button>,
        <div class="flex flex-row gap-3">
          <i class="ri-eye-line eye__style"></i>
          <i class="ri-pencil-line pencil__style"></i>
          <i class="ri-delete-bin-5-line bin__style"></i>
        </div>,
      ],
      [
        6,
        "Task Completion Rate",
        <button className="bg-active">
          <i class="ri-circle-fill bg-circle-inactive"></i> Inactive
        </button>,
        <div class="flex flex-row gap-3">
          <i class="ri-eye-line eye__style"></i>
          <i class="ri-pencil-line pencil__style"></i>
          <i class="ri-delete-bin-5-line bin__style"></i>
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
      departmentName: "Project Timeline",
      departmentId: "result",
      targets: "30",
    });
    // const [formValues2, setFormValues2] = useState({
    //   departmentName: "Project Management",
    //   departmentId: "Grow the follower base across all social media platforms",
    //   targets: "Increase followers by 15% per quarter"
    // });
    const [selectedRadio2, setSelectedRadio2] = useState(true);
   
   
    // Check if the form is valid
    const isFormValid =
      formValues.departmentName !== "" &&
      formValues.departmentId !== "" &&
      formValues.targets !== "" 
     
  
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues((prevValues) => ({
          ...prevValues,
          [name]: value, // Update the specific field dynamically
        }));
      };
  
    const handleRadioChange = (e) => {
      setSelectedRadio(e.target.value);
    };
    
  return (
    <article className="bg-white w-full h-full">
    <div className="container mx-auto p-4">
      <h1 className="mb-1">KPIs Level List</h1>
      <p className="font-light text-xl">
        Manage the timeline in kpis level list for your organization's KPI
      </p>
      <SearchBar />
      <div className="flex flex-row justify-between">
        <div className="w-8/12 flex gap-5">
         
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
            <i className="ri-add-fill"></i> Create KPIs Level List
          </button>
        </div>
      </div>

      <DataTable headers={headers} data={currentPageData} />
      <div className="flex flex-row justify-start items-center">
        <p class="w-40">Total {totalPages} Pages</p>
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
              class="ri-skip-left-line arrow__size"
              onClick={() => handlePageChange(1)}
            ></i>
            <i
              class="ri-arrow-left-s-line arrow__size"
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
              class="ri-arrow-right-s-line arrow__size"
              onClick={() => handlePageChange(currentPage + 1)}
            ></i>
            <i
              class="ri-skip-right-line arrow__size"
              onClick={() => handlePageChange(totalPages)}
            ></i>
          </div>
        </div>
      </div>
    </div>
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
               onChange={handleInputChange}handleMatrixInputChange
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
               onClick={addNewRow2}
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
     {isModalOpen2 && (
      <div
        className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300"
        onClick={() => setIsModalOpen2(false)}
      >
        <div
          className="bg-white p-6 rounded shadow-lg w-6/12 transition-transform transform scale-100 max-h-[500px] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <h2 className="text-3xl font-semibold mb-4">View KPIs Level List</h2>
          <label className="block text-xl mt-5 mb-5">
                 Objective Name
          </label>
          <input
            type="text"
            name="departmentName"
            value="Project Timeline"
            className="border-solid border border__color__input p-3 w-full rounded"
            disabled
          />
           <label className="block text-xl mt-5 mb-5">
                 Desired results
          </label>
          <input
            type="text"
            name="departmentId"
            value="Grow the follower base across all social media platforms"
            className="border-solid border border__color__input p-3 w-full rounded"
            disabled
          />
          <div className="mt-5"></div>
          <hr className="mt-5" />
          <label className="block text-xl mt-5 mb-5">
                 Targets
          </label>
          <input
            type="text"
            name="targets"
            value="Increase followers by 15% per quarter"
            className="border-solid border border__color__input p-3 w-full rounded"
            disabled
          />
          <label className="block text-xl mt-5 mb-5">
                 Status
          </label>
          <div className="mt-5"></div>
          <Switch />
          <div className="mt-10 px-16">
          <div className="flex flex-row gap-20">
              <p>No.</p>
              <p>Evaluation Criteria </p>
            </div>
            </div>
          <div className="mt-10 px-16">
          <div className="flex flex-row gap-20">
            <div className="flex flex-row gap-20">
              <p>0</p>
              <p> &lt; 59% agreement</p>
            </div>
          </div>
          </div>
          <hr className="mt-5 mb-5"/>
          <div className="mt-10 px-16">
            <div className="flex flex-row gap-20">
              <p>1</p>
              <p> 60 - 69% agreement</p>
            </div>
          </div>
          <hr className="mt-5 mb-5"/>
          <div className="mt-10 px-16">
            <div className="flex flex-row gap-20">
              <p>2</p>
              <p>70 - 79% agreement</p>
            </div>
          </div>
          <hr className="mt-5 mb-5"/>
          <div className="mt-10 px-16">
            <div className="flex flex-row gap-20">
              <p>3</p>
              <p> 80 - 89% agreement</p>
            </div>
          </div>
          <hr className="mt-5 mb-5"/>
          <div className="mt-10 px-16">
            <div className="flex flex-row gap-20">
              <p>4</p>
              <p> 90 - 99% agreement</p>
            </div>
          </div>
          <hr className="mt-5 mb-5"/>
          <div className="mt-10 px-16">
            <div className="flex flex-row gap-20">
              <p>5</p>
              <p> 100% agreement</p>
            </div>
          </div>
          <hr className="mt-5 mb-5"/>
        
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
             value= {formValues.departmentId}
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
               onClick={addNewRow2}
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
           onClick={() => setIsModalOpen3(false)}
         >
           Cancel
         </button>
         <button
           className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 cursor-pointer"
               
           
           disabled={!isFormValid}
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
          <h2 className="text-3xl font-semibold mb-4">Delete KPIs Level List!!</h2>
          <hr className="mb-10"/>
          <p className="text-xl font-semibold mb-5">Notification</p>
          <p className="mb-10">Are you sure you want to delete this kpis level list? This action cannot be done.</p>
          <div className="flex justify-end aligns-end">
            <button
              className="px-4 py-2 bg-white text-black rounded"
              onClick={() => setIsModalOpen4(false)}
            >
              Cancel
            </button>
            <button
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 mr-4" 
            >
              Delete
            </button>
          </div>
        </div>
      </div>
     )}
  </article>
  )
}

export default Sub2