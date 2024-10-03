import React from "react";
import { Menu, Moon, Search, Settings, Sun } from "lucide-react";
import Link from "next/link";
import useNavbar from "@/hooks/useNavbar";

const Navbar = () => {
  const {
    isSidebarCollapsed,
    isDarkMode,
    handleThemeChange,
    handleToggleSidebar,
  } = useNavbar();
  return (
    <div className="flex transition-all duration-300 items-center justify-between bg-white dark:bg-black px-4 py-3 ">
      {/* searchbar */}
      <div className="flex items-center gap-8">
        {isSidebarCollapsed ? (
          <Menu
            className="h-8 w-8 dark:text-white"
            onClick={handleToggleSidebar}
          />
        ) : null}
        <div className="relative flex h-min w-[200px]">
          <Search className="absolute left-[4px] top-1/2 mr-2 h-5 w-5 -translate-y-1/2 transform cursor-pointer dark:text-white"></Search>
          <input
            className=" w-full p-2 pl-8 text-sm text-gray-700 bg-gray-100  dark:bg-gray-400 border-none rounded-md placeholder:gray-600 focus:ouline-none dark:text-white dark:placeholder-white"
            type="search"
            placeholder="Search..."
          />
        </div>
      </div>

      <div className="flex items-center">
        <button
          onClick={handleThemeChange}
          className={
            isDarkMode
              ? `rounded p-2 dark:hover:bg-gray-700`
              : `rounded p-2 hover:bg-gray-100`
          }
        >
          {isDarkMode ? (
            <Sun className="h-6 w-6 cursor-pointer dark:text-white " />
          ) : (
            <Moon className="h-6 w-6 cursor-pointer dark:text-white" />
          )}
        </button>
        <Link
          href="/settings"
          className={
            isDarkMode
              ? `h-min w-min rounded p-2 dark:hover:bg-gray-700`
              : `h-min w-min rounded p-2 hover:bg-gray-100`
          }
        >
          <Settings className="h-6 w-6 cursor-pointer text-black dark:text-white" />
        </Link>
        <div className="ml-2 mr-5 min-h-[2em] w-[0.1rem] bg-gray-200 hidden md:inline-block">
          {" "}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
