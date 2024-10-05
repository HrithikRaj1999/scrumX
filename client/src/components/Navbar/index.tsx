import React from "react";
import { Menu, Moon, Search, Settings, Sun } from "lucide-react";
import Link from "next/link";
import useNavbar from "@/hooks/Navbar/useNavbar";
import SearchInputBox from "../Util/SearchInputBox";

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
        <SearchInputBox />
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
        <div className="ml-2 mr-5 min-h-[2em] w-[0.1rem] bg-gray-200 hidden md:inline-block">
          {" "}
        </div>
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
      </div>
    </div>
  );
};

export default Navbar;
