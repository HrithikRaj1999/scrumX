"use client";
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import SideBar from "@/components/Sidebar";
import StoreProvider, { useAppSelector } from "../../app/redux";

function DashboardLayout({ children }: { children: React.ReactNode }) {
  const isSideBarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed
  );
  
  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <div className="flex min-h-screen w-full bg-gray-50 text-gray-900">
      <SideBar />
      <main
        className={`flex w-full flex-col bg-gray-50 dark:bg-black ${
          isSideBarCollapsed ? "" : `md:pl-64`
        }`}
      >
        <Navbar />
        {children}
      </main>
    </div>
  );
}

export default function DashboardWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StoreProvider>
      <DashboardLayout>{children}</DashboardLayout>
    </StoreProvider>
  );
}
