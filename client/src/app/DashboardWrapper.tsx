"use client";

import React, { useEffect } from "react";
import Navbar from "@/app/(components)/navbar/Navbar";
import Sidebar from "@/app/(components)/sidebar/Sidebar";
import StoreProvider, { useAppSelector } from "./redux";

export function DashboardLayout({children} : {children: React.ReactNode}) {
  return (
    <div className={`light flex bg-gray-50 text-gray-900 w-full min-h-screen`}>
        <Sidebar></Sidebar>
        <main className="flex flex-col w-full h-full py-7 px-9 bg-gray-50 md:pl-72">
        <Navbar></Navbar>
        {children}
        </main>
    </div>
  )
}

const DashboardWrapper = ({children}:{children: React.ReactNode})=> {
  return (
    <StoreProvider>
      <DashboardLayout>{children}</DashboardLayout>
    </StoreProvider>
  )
}

export default DashboardWrapper
