"use client";
import { useAppDispatch, useAppSelector } from "@/app/redux";
import { setIsSidebarCollapsed } from "@/state";
import { useGetProjectQuery } from "@/state/api";
import {
  AlertCircle,
  AlertOctagon,
  AlertTriangle,
  Briefcase,
  BriefcaseIcon,
  ChevronDown,
  ChevronUp,
  Home,
  Layers3,
  LockIcon,
  LucideIcon,
  Menu,
  Search,
  Settings,
  ShieldAlert,
  User,
  Users,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const SideBar = () => {
  const [showProjects, setShowProjects] = useState(true);
  const [showPriority, setShowPriority] = useState(true);
  const handleShowProjects = () => setShowProjects((prev) => !prev);
  const handleShowPriority = () => setShowPriority((prev) => !prev);
  const { data: projects } = useGetProjectQuery();
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed
  );
  const handleToggleSidebar = () =>
    dispatch(setIsSidebarCollapsed(!isSidebarCollapsed));
  const dispatch = useAppDispatch();
  const SideBarClassNames = `fixed flex flex-col h-[100%] justify-between shadow-xl
  transition-all duration-300 h-full z-40 dark:bg-black overflow-y-auti bg-white
  w-64  ${isSidebarCollapsed ? "w-0 hidden" : "  w-64"}
  `;
  return (
    <div className={SideBarClassNames}>
      <div className="flex h-[100%] w-full flex-col justify-start">
        {/*Logo*/}
        <div className="z-50 flex min-h-[56px] w-64 items-center justify-between bg-white px-6 pt-3 dark:bg-black">
          <div className="text-xl font-bold text-gray-800 dark:text-white">
            ScrumX
          </div>
          {isSidebarCollapsed ? null : (
            <button className="py-3" onClick={handleToggleSidebar}>
              <X className="h-8 w-8 cursor-pointer text-gray-800 hover:text-black dark:text-white" />
            </button>
          )}
        </div>

        {/*team*/}
        <div className="flex items-center gap-5 border-y-[1.5px] border-gray-200 px-8 py-7 dark:border-gray-700">
          <Image
            src="https://img.freepik.com/free-vector/gradient-logo-with-abstract-shape_23-2148216799.jpg?w=900&t=st=1727705722~exp=1727706322~hmac=1c4131bf2f5fe635a1f41a0f9ce34c5bf0705a0d63abb718a56d5fe44f679825"
            alt="Logo"
            width={30}
            height={30}
          />
          <div>
            <h3 className="text-lg font-bold tracking-light dark:text-gray-200">
              EngOps Teams
            </h3>
            <div className="mt-1 flex items-start gap-2">
              <LockIcon className="mt-[0.1rem] h-3 w-3 text-black dark:text-gray-100" />
              <span className="text-xs dark:text-gray-100"> Private</span>
            </div>
          </div>
        </div>

        {/*Navbar Links*/}
        <nav className="z-10 w-full">
          <SideBarLinks href="/" icon={Home} label="Home" />
          <SideBarLinks href="/timeline" icon={Briefcase} label="Timeline" />
          <SideBarLinks href="/search" icon={Search} label="Search" />
          <SideBarLinks href="/settings" icon={Settings} label="Settings" />
          <SideBarLinks href="/users" icon={User} label="Users" />
          <SideBarLinks href="/teams" icon={Users} label="Team" />
        </nav>

        {/*Project section */}
        <button
          onClick={handleShowProjects}
          className="flex w-full items-center justify-between px-8 py-3 text-black dark:text-gray-200"
        >
          <span>Projects </span>
          {!showProjects ? (
            <ChevronDown className="h-8 w-8" />
          ) : (
            <ChevronUp className="h-8 w-8" />
          )}
        </button>
        {showProjects
          ? projects?.map((project) => (
              <SideBarLinks
                key={project.id}
                icon={BriefcaseIcon}
                label={project.name}
                href={`/projects/${project.id}`}
              />
            ))
          : null}
        {/**Priority */}
        <button
          onClick={handleShowPriority}
          className="flex w-full items-center justify-between px-8 py-3 text-black dark:text-gray-200"
        >
          <span>Priority </span>
          {!showPriority ? (
            <ChevronDown className="h-8 w-8" />
          ) : (
            <ChevronUp className="h-8 w-8" />
          )}
        </button>
        {showPriority ? (
          <>
            <SideBarLinks
              icon={AlertCircle}
              label="Urgent"
              href="/priority/urgent"
            />
            <SideBarLinks
              icon={ShieldAlert}
              label="High"
              href="/priority/high"
            />
            <SideBarLinks
              icon={AlertTriangle}
              label="Medium"
              href="/priority/medium"
            />
            <SideBarLinks
              icon={AlertOctagon}
              label="Low"
              href="/priority/low"
            />
            <SideBarLinks
              icon={Layers3}
              label="Backlog"
              href="/priority/backlog"
            />
          </>
        ) : null}
      </div>
    </div>
  );
};
interface SideBarLinkProps {
  href: string;
  icon: LucideIcon;
  label: string;
  isCollapsed?: boolean;
}
const SideBarLinks = ({
  href,
  icon: Icon,
  label,
}: // isCollapsed,
SideBarLinkProps) => {
  const pathname = usePathname();
  const isActive =
    pathname === href || (pathname === "/" && href === "/dashboard");

  return (
    <Link href={href} className="w-full">
      <div
        className={`relative flex cursor-pointer items-center gap-3 transition-colors hover:bg-gray-100 dark:hover:bg-gray-700
        ${
          isActive ? "bg-gray-100 text-white dark:bg-gray-600" : ""
        } justify-start px-8 py-3 `}
      >
        {isActive ? (
          <div className="absolute left-0 top-0 h-[100%] w-[6px] bg-blue-600 dark:bg-blue-300"></div>
        ) : null}
        <Icon className="h-6 w-6 text-black dark:text-gray-100" />
        <span className="font-medim text-black dark:text-gray-100">
          {label}
        </span>
      </div>
    </Link>
  );
};

export default SideBar;
