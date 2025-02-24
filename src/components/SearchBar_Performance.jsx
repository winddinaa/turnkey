import React from 'react'
import 'remixicon/fonts/remixicon.css'
const SearchBar = () => {
  return (
    <form className="relative mt-10">
        <div className="relative">
            <input type="search" placeholder='Search KPIs' className="w-full p-4 rounded-md style__search pl-10 " />
            <button className="bg-[#5175E9] flex items-center px-4 py-4 rounded-md text-white absolute right-0 top-1/2 transform -translate-y-1/2">
           <i class="ri-search-line "></i>
          </button>
        
        </div>
    </form>
  )
}

export default SearchBar