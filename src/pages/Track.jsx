import SearhBar_Performance from "../components/SearchBar_Performance";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
const Track = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault(); // Prevent form from reloading the page
    if (searchTerm.trim() !== "") {
      navigate(`/performance?query=${searchTerm}`); // Redirect with query
    } else {
      navigate("/performance"); // Redirect without search query
    }
  };
  const [isOpen, setIsOpen] = useState(false);

  const handleExport = (type) => {
    console.log(`Exporting as ${type}`); // Replace with export logic
    setIsOpen(false);
  };
  return (
    <article className="bg-white w-full h-full" onSubmit={handleSearch}>
      <div className="container mx-auto p-4">
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-col flex-grow-0">
            <h1 className="mb-1">Choose a Deadline for the selected KPIs</h1>
            <p className="font-light text-xl">
              Set clear, measurable target for each KPI to track employee
              performance.
            </p>
          </div>

          <div className="relative inline-block">
            <button
              className="bg-[#3AA94F] flex items-center px-4 py-4 rounded-md text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              Export File &nbsp;<i class="ri-arrow-down-s-line"></i>
            </button>
            {isOpen && (
              <ul className="absolute mt-2 w-40 bg-white border rounded-md shadow-lg">
                <li
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleExport("CSV")}
                >
                  Export as CSV
                </li>
                <li
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleExport("Excel")}
                >
                  Export as Excel
                </li>
              </ul>
            )}
          </div>
          <input
            type="date"
            name="date"
            id="date"
            className="border-solid border border__color__input p-3 rounded"
          />
          <p>to</p>
          <input
            type="date"
            name="date"
            id="date"
            className="border-solid border border__color__input p-3 rounded"
          />
          <button className="bg-[#5175E9] flex items-center px-4 py-4 rounded-md text-white">
            Search <i class="ri-search-line ms-2"></i>
          </button>
        </div>

        <div className="flex flex-row gap-6 basis-auto mt-14">
          <div className=" w-96 h-44 bg-[#E6F6F2] rounded-xl">
            <div className="flex flex-col gap-6 px-4 py-10">
              <p className="text-3xl">All KPIs</p>
              <p className="text-3xl">50</p>
            </div>
          </div>
          <div className="w-96 h-44 bg-[#3AA94F] rounded-xl">
            <div className="flex flex-col gap-6 px-4 py-10">
              <p className="text-3xl text-white">Completed KPIs</p>
              <p className="text-3xl text-white">30</p>
            </div>
          </div>
          <div className=" w-96 h-44 bg-[#B9B4ED] rounded-xl">
            <div className="flex flex-col gap-6 px-4 py-10">
              <p className="text-3xl text-white">On Track KPIs</p>
              <p className="text-3xl text-white">3</p>
            </div>
          </div>
          <div className="w-96 h-44 bg-[#EDB4B5] rounded-xl">
            <div className="flex flex-col gap-6 px-4 py-10">
              <p className="text-3xl text-white">Off Track KPIs</p>
              <p className="text-3xl text-white">4</p>
            </div>
          </div>
          <div className=" w-96 h-44 bg-[#E3E3E3] rounded-xl">
            <div className="flex flex-col gap-6 px-4 py-10">
              <p className="text-3xl text-[#6C6C6C]">Not Started KPIs</p>
              <p className="text-3xl">5</p>
            </div>
          </div>
        </div>
        <form className="relative mt-10">
          <div className="relative">
            <input
              type="search"
              placeholder="Search KPIs"
              className="w-full p-4 rounded-md style__search pl-10 "
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              type="submit"
              className="bg-[#5175E9] flex items-center px-4 py-4 rounded-md text-white absolute right-0 top-1/2 transform -translate-y-1/2"
            >
              <i class="ri-search-line "></i>
            </button>
          </div>
        </form>
        <div className="flex justify-start">
          <div className="notStart mt-5 p-4 rounded-lg">Not Started</div>
        </div>
        <table className="table-auto w-full border-collapse mt-10">
          <thead>
            <tr className="border-b border-gray-300">
              <th className=" w-1/5 py-2 px-4 text-left font-normal text-[#6C6C6C] text-lg">
                KPIs Name
              </th>
              <th className=" w-1/5 py-2 px-4 text-left font-normal text-[#6C6C6C] text-lg">
                Employee Name
              </th>
              <th className=" w-1/5 py-2 px-4 text-left font-normal text-[#6C6C6C] text-lg">
                KPIs Target
              </th>
              <th className=" w-1/5 py-2 px-4 text-left font-normal text-[#6C6C6C] text-lg">
                Progress
              </th>
              <th className=" w-1/5 py-2 px-4 text-left font-normal text-[#6C6C6C] text-lg">
                Deadline
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="w-1/5 py-5 px-4 text-[#6C6C6C] ">
                Schedule Performance Index
              </td>
              <td className="w-1/5 py-2 px-4 text-[#6C6C6C]">
                Kristi Christiansen
              </td>
              <td className="w-1/5 py-2 px-4 text-[#6C6C6C]">
                85% Engagement Rate
              </td>
              <td className="w-1/5 py-2 px-4 text-[#6C6C6C]">Not Start</td>
              <td className="w-1/5 py-2 px-4 text-[#6C6C6C]">2024/07/04</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td
                className="w-1/5 py-5 px-4 text-[#6C6C6C] truncate"
                title="Behavior and Attitude towards others"
              >
                Behavior and Attitude towar...
              </td>
              <td className="w-1/5 py-2 px-4 text-[#6C6C6C]">Lynn Brown</td>
              <td className="w-1/5 py-2 px-4 text-[#6C6C6C]">3 new market</td>
              <td className="w-1/5 py-2 px-4 text-[#6C6C6C]">Not Start</td>
              <td className="w-1/5 py-2 px-4 text-[#6C6C6C]">2024/09/30</td>
            </tr>
          </tbody>
        </table>
        <div className="flex justify-start">
          <div className="offTrack mt-10 p-4 rounded-lg">Off Track</div>
        </div>
        <table className="table-auto w-full border-collapse mt-10">
          <thead>
            <tr className="border-b border-gray-300">
              <th className="w-1/5 py-2 px-4 text-left font-normal text-[#6C6C6C] text-lg">
                KPIs Name
              </th>
              <th className="w-1/5 py-2 px-4 text-left font-normal text-[#6C6C6C] text-lg">
                Employee Name
              </th>
              <th className="w-1/5 py-2 px-4 text-left font-normal text-[#6C6C6C] text-lg">
                KPIs Target
              </th>
              <th className="w-1/5 py-2 px-4 text-left font-normal text-[#6C6C6C] text-lg">
                Progress
              </th>
              <th className="w-1/5 py-2 px-4 text-left font-normal text-[#6C6C6C] text-lg">
                Deadline
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="w-1/5 py-5 px-4 text-[#6C6C6C] ">
                First Contact Resolution rate
              </td>
              <td className="w-1/5 py-2 px-4 text-[#6C6C6C]">
                Rosemarie Hirthe
              </td>
              <td className="w-1/5 py-2 px-4 text-[#6C6C6C]">15% Increase</td>
              <td className="w-1/5 py-2 px-4 text-[#6C6C6C]">7%</td>
              <td className="w-1/5 py-2 px-4 text-[#6C6C6C]">2024/07/04</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td
                className="py-5 px-4 text-[#6C6C6C] truncate"
                title="Demonstrate Leadership with client"
              >
                Demonstrate Leadership with cli...
              </td>
              <td className="py-2 px-4 text-[#6C6C6C]">Georgia Russel</td>
              <td className="py-2 px-4 text-[#6C6C6C]">10 new customer</td>
              <td className="py-2 px-4 text-[#6C6C6C]">3 new customer</td>
              <td className="py-2 px-4 text-[#6C6C6C]">2024/06/09</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-5 px-4 text-[#6C6C6C]">
                Project Milestone Achievement
              </td>
              <td className="py-2 px-4 text-[#6C6C6C]">Lucille Robel</td>
              <td className="py-2 px-4 text-[#6C6C6C]">$500,000 increase</td>
              <td className="py-2 px-4 text-[#6C6C6C]">$150,000 increase</td>
              <td className="py-2 px-4 text-[#6C6C6C]">2024/03/14</td>
            </tr>
          </tbody>
        </table>
        <div className="flex justify-start">
          <div className="onTrack mt-10 p-4 rounded-lg">On Track</div>
        </div>
        <table className="table-auto w-full border-collapse mt-10">
          <thead>
            <tr className="border-b border-gray-300">
              <th className=" w-1/5 py-2 px-4 text-left font-normal text-[#6C6C6C] text-lg">
                KPIs Name
              </th>
              <th className=" w-1/5 py-2 px-4 text-left font-normal text-[#6C6C6C] text-lg">
                Employee Name
              </th>
              <th className=" w-1/5 py-2 px-4 text-left font-normal text-[#6C6C6C] text-lg">
                KPIs Target
              </th>
              <th className=" w-1/5 py-2 px-4 text-left font-normal text-[#6C6C6C] text-lg">
                Progress
              </th>
              <th className=" w-1/5 py-2 px-4 text-left font-normal text-[#6C6C6C] text-lg">
                Deadline
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-5 px-4 text-[#6C6C6C] ">
                Customer effort score
              </td>
              <td className="py-2 px-4 text-[#6C6C6C]">Janie Wunsch</td>
              <td className="py-2 px-4 text-[#6C6C6C]">3 new market</td>
              <td className="py-2 px-4 text-[#6C6C6C]">1 new market</td>
              <td className="py-2 px-4 text-[#6C6C6C]">2022/07/04</td>
            </tr>
          </tbody>
        </table>
        <div className="flex justify-start">
          <div className="completed mt-10 p-4 rounded-lg">Completed</div>
        </div>
        <table className="table-auto w-full border-collapse mt-10 ">
          <thead>
            <tr className="border-b border-gray-300">
              <th className="w-1/5 py-2 px-4 text-left font-normal text-[#6C6C6C] text-lg">
                KPIs Name
              </th>
              <th className="w-1/5 py-2 px-4 text-left font-normal text-[#6C6C6C] text-lg">
                Employee Name
              </th>
              <th className="w-1/5 py-2 px-4 text-left font-normal text-[#6C6C6C] text-lg">
                KPIs Target
              </th>
              <th className="w-1/5 py-2 px-4 text-left font-normal text-[#6C6C6C] text-lg">
                Progress
              </th>
              <th className="w-1/5 py-2 px-4 text-left font-normal text-[#6C6C6C] text-lg">
                Deadline
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-5 px-4 text-[#6C6C6C] ">
                Schedule Performance Index
              </td>
              <td className="py-2 px-4 text-[#6C6C6C]">Rick Harris</td>
              <td className="py-2 px-4 text-[#6C6C6C]">5% Cost Reduction</td>
              <td className="py-2 px-4 text-[#6C6C6C]">5% Cost Reduction</td>
              <td className="py-2 px-4 text-[#6C6C6C]">2022/01/04</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td
                className="py-5 px-4 text-[#6C6C6C] truncate"
                title="Exhibits thought leadership around new ideas, strategies and opportunity"
              >
                Exhibits thought leadership...
              </td>
              <td className="py-2 px-4 text-[#6C6C6C]">Gregg Olson</td>
              <td className="py-2 px-4 text-[#6C6C6C]">5% Increase</td>
              <td className="py-2 px-4 text-[#6C6C6C]">5% Increase</td>
              <td className="py-2 px-4 text-[#6C6C6C]">2021/12/15</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-5 px-4 text-[#6C6C6C]">
                Always be ready to help{" "}
              </td>
              <td className="py-2 px-4 text-[#6C6C6C]">Kerry Emmerich</td>
              <td className="py-2 px-4 text-[#6C6C6C]">$50,000 increase</td>
              <td className="py-2 px-4 text-[#6C6C6C]">$50,000 increase</td>
              <td className="py-2 px-4 text-[#6C6C6C]">2021/09/24</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-5 px-4 text-[#6C6C6C]">
                On-time completion rate{" "}
              </td>
              <td className="py-2 px-4 text-[#6C6C6C]">Kay Fisher</td>
              <td className="py-2 px-4 text-[#6C6C6C]">10 Follower Increase</td>
              <td className="py-2 px-4 text-[#6C6C6C]">
                $10 Follower Increase
              </td>
              <td className="py-2 px-4 text-[#6C6C6C]">2021/02/04</td>
            </tr>
          </tbody>
        </table>
      </div>
    </article>
  );
};

export default Track;
