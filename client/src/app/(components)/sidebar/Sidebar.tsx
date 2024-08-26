"use client";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/app/redux";
import { setIsSidebarCollapsed } from "@/app/state";

function Sidebar() {
  const dispatch=useAppDispatch();
  const isSidebarCollapsed = useAppSelector((state)=> state.global.isSidebarCollapsed);
  const toggleSidebar = ()=> {
    dispatch(setIsSidebarCollapsed(!isSidebarCollapsed))
  }

  const classNames=`fixed z-40 mt-8 bg-white shadow-md flex flex-col h-full overflow-hidden transition-all 
  duration-300 ${!isSidebarCollapsed ? "w-0 md:w-25": "w-72 md:w-64"} bordered border-2 border-red-500`;

  return (
    <section className={classNames}>
      {/* top logo */}
      <div className="flex gap-3 py-2 justify-between md:justify-normal items-center bordered border-2 border-black">
        <h1 className="font-bold text-xl pl-1 md:text-center">EDSTOCK</h1>
        <button className="md:hidden px-3 py-3 rounded-full bg-gray-100 hover:bg-blue-100" 
        onClick={()=> toggleSidebar()}>
      <Menu className="w-6 h-6"></Menu></button>
    </div>

     {/* links*/}
     <div className="flex-grow mt-8">

    </div>

{/* FOOTER */}
<div>
        <p className="text-center text-xs text-gray-500">&copy; 2024 Edstock</p>
      </div>
    </section>
  )
}

export default Sidebar
