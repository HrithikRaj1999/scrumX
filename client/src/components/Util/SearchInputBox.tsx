import { Search } from "lucide-react";
import React from "react";

// interface props {
//   color: string;
// }
const SearchInputBox = () => {
  return (
    <div className="relative flex h-min w-[200px]">
      <Search className="absolute left-[4px] top-1/2 mr-2 h-5 w-5 -translate-y-1/2 transform cursor-pointer dark:text-white"></Search>
      <input
        className={`w-full p-2 pl-8 text-sm text-black bg-slate-100 dark:bg-gray-400 border-none rounded-md placeholder:gray-600 focus:ouline-none dark:text-white dark:placeholder-white`} 
        type="search"
        placeholder="Search..."
      />
    </div>
  );
};

export default SearchInputBox;
