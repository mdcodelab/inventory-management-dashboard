"use client";
import { Menu } from "lucide-react";
import { Bell } from "lucide-react";
import { Sun } from "lucide-react";
import { Moon } from "lucide-react";
import Image from "next/image";
import { Settings } from "lucide-react";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="flex justify-between items-center w-full mb-7">
      {/* left side*/}
      <div className="flex justify-between items-center gap-5">
        <button className="px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100" onClick={()=>{}}>
          <Menu></Menu>
        </button>
        <div className="relative">
          <input type="search" placeholder="Start type to search groups & products"
          className="w-50 pl-10 pr-4 py-2 md:w-80 border-2 border-gray-300 bg-white rounded-lg 
          focus:outline-none focus:border-blue-500"></input>
          <div className="absolute inset-y-0 pt-2 pl-3 flex item-center pointer-events-none">
            <Bell className="text-gray-500" size={20}></Bell></div>
        </div>
      </div>

      {/* left side*/}
      <div className="flex justify-between items-center gap-5">
        <div className="hidden md:flex justify-between items-center gap-5">
          <div>
            <button onClick={()=> {}}>
              <Sun className="cursor-pointer text-gray-500" size={24}></Sun>
            </button>
          </div>
          <div className="relative">
            <Bell className="cursor-pointer text-gray-500" size={24}></Bell>
            <span className="absolute -top-3 -right-2">3</span>
          </div>
          <hr className="w-0 h-7 border border-solid border-l border-gray-300 mx-3" />
          <div className="flex items-center gap-3 cursor-pointer">
          <Image src="/images/profile.jpeg" alt="profile" width={20} height={20} className="rounded-full"></Image>
            <span className="font-semibold">Ed Roh</span>
          </div>
        </div>
        <Link href="/settings"><Settings className="cursor-pointer text-gray-500" size={24}></Settings></Link>
      </div>
      

    </nav>
  )
}

export default Navbar
