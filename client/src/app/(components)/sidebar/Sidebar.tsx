"use client";
import { LucideIcon, Menu } from "lucide-react";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/app/redux";
import { setIsSidebarCollapsed } from "@/app/state";
import { usePathname } from "next/navigation";

//icons
import { Layout } from "lucide-react";
import { Archive } from "lucide-react";
import { Clipboard } from "lucide-react";
import { User } from "lucide-react";
import { SlidersHorizontal } from "lucide-react";
import { CircleDollarSign } from "lucide-react";

function Sidebar() {
  const dispatch = useAppDispatch();
  const isSidebarCollapsed = useAppSelector((state) => state.global.isSidebarCollapsed);
  const toggleSidebar = () => {
    dispatch(setIsSidebarCollapsed(!isSidebarCollapsed));
  };

  const classNames = `fixed z-40 mt-8 bg-white shadow-md flex flex-col h-full overflow-hidden transition-all 
  duration-300 ${isSidebarCollapsed ? "w-0 md:w-25" : "w-72 md:w-64"}`;

  interface SidebarLinkProps {
    href: string;
    icon: LucideIcon;
    label: string;
    isCollapsed: boolean;
  }

  const SidebarLink = ({ href, icon: Icon, label, isCollapsed }: SidebarLinkProps) => {
    const pathname = usePathname();
    const isActive = pathname === href || (pathname === "/" && href === "/dashboard");

    return (
      <Link href={href}>
        <div
          className={`cursor-pointer flex items-center ${
            isCollapsed ? "justify-center py-4" : "justify-start px-8 py-4"
          }
        hover:text-blue-500 hover:bg-blue-100 gap-3 transition-colors ${
          isActive ? "bg-blue-200 text-white" : ""
        }`}
        >
          <Icon className="w-6 h-6 !text-gray-700" />

          <span className="text-lg">{label}</span>
        </div>
      </Link>
    );
  };

  return (
    <section className={classNames}>
      {/* top logo */}
      <div className="flex gap-3 justify-between items-center bordered border-2 border-black">
        <h1 className="font-bold text-xl pl-1 md:text-center">EDSTOCK</h1>
        <button
          className="px-3 py-3 rounded-full bg-gray-100 hover:bg-blue-100"
          onClick={() => toggleSidebar()}>
          <Menu className="w-6 h-6"></Menu>
        </button>
      </div>

      {/* links */}
      <div className="flex-grow mt-8">
        <SidebarLink href="/dashboard" icon={Layout} label="Dashboard" isCollapsed={isSidebarCollapsed} />
        <SidebarLink href="/inventory" icon={Archive} label="Inventory" isCollapsed={isSidebarCollapsed} />
        <SidebarLink href="/products" icon={Clipboard} label="Products" isCollapsed={isSidebarCollapsed} />
        <SidebarLink href="/users" icon={User} label="Users" isCollapsed={isSidebarCollapsed} />
        <SidebarLink href="/settings" icon={SlidersHorizontal} label="Settings" isCollapsed={isSidebarCollapsed} />
        <SidebarLink href="/expenses" icon={CircleDollarSign} label="Expenses" isCollapsed={isSidebarCollapsed} />
      </div>

      {/* FOOTER */}
      <div>
        <p className="text-center text-xs text-gray-500">&copy; 2024 Edstock</p>
      </div>
    </section>
  );
}

export default Sidebar;
