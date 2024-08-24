"use client";
import { Menu } from "lucide-react";
import Link from "next/link";

function Sidebar() {
  return (
    <section className="mt-7">
      {/* top logo */}
      <div className="flex gap-3 justify-between md:justify-normal items-center bordered border-2 border-black">
        <h1 className="font-bold text-xl pl-1">EDSTOCK</h1>
        <button className="md:hidden px-3 py-3 rounded-full bg-gray-100 hover:bg-blue-100" onClick={()=> {}}>
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
