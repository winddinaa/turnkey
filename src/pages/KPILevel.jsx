import React from "react";
import SearchBarSubCat from "../components/SearchBarSubCat";
import Select from "react-select";
import DataTable_Subcat from "../components/DataTable_Subcat";
import { useState } from "react";
const SubCategory = () => {
    const headers = ["No.","Objective Name", "Status", "Action"];
    const data1 = [
    ];
  const options = [
    { value: "Active", label: "Active" },
    { value: "Inactive", label: "Inactive" },
  ];
  const [activeItem, setActiveItem] = useState("");
    return (
        <>
       <article className="bg-white w-full h-full">
      <div className="container mx-auto p-4">
        <h1 className="mb-1">KPIs Level List</h1>
        <p className="font-light text-xl">
          Manage the timeline in KPIs Level List for your organization's KPI.
        </p>
        <SearchBarSubCat />
        <Select
          className="basic-single w-44 mt-10 mb-10"
          classNamePrefix="select"
          defaultValue={""}
          name="status"
          options={options}
          placeholder="All Status"
        />
        <DataTable_Subcat headers={headers} data={data1} />
      </div>
    </article>
      </>
    )
};

export default SubCategory;