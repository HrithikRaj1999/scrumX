import React from "react";
import { Menu, Moon, Search, Settings, Sun, User } from "lucide-react";
import Link from "next/link";
import useNavbar from "@/hooks/Navbar/useNavbar";
import SearchInputBox from "../Util/SearchInputBox";
import { useGetAuthUserQuery } from "@/state/api";
import { signOut } from "aws-amplify/auth";
import { current } from "@reduxjs/toolkit";
import Image from "next/image";

const Navbar = () => {
  const {
    isSidebarCollapsed,
    isDarkMode,
    handleThemeChange,
    handleToggleSidebar,
    handleSignOut,
  } = useNavbar();
  const { data: currentUser } = useGetAuthUserQuery({});

  if (!currentUser) return null;
  const currentUserDetails = currentUser?.userDetails;
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
        <div className="ml-2 mr-5 hidden min-h-[2em] w-[0.1rem] bg-gray-200 md:inline-block"></div>
        <div className="hidden items-center justify-between md:flex">
          <div className="align-center flex h-9 w-9 justify-center">
            {!!currentUserDetails?.profilePictureUrl ? (
              <Image
                src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${currentUserDetails?.profilePictureUrl}`}
                alt={currentUserDetails?.username || "User Profile Picture"}
                width={100}
                height={50}
                className="h-full rounded-full object-cover"
              />
            ) : (
              <User className="h-6 w-6 cursor-pointer self-center rounded-full dark:text-white" />
            )}
          </div>
          <span className="mx-3 text-gray-800 dark:text-white">
            {currentUserDetails?.username}
          </span>
          <button
            className="hidden rounded bg-blue-400 px-4 py-2 text-xs font-bold text-white hover:bg-blue-500 md:block"
            onClick={handleSignOut}
          >
            Sign out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
