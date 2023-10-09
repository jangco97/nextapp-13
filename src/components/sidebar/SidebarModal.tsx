"use client";
import { SidebarContext } from "@/context/sidebaropen.context";
import React, { useContext } from "react";
import { mainCategories } from "../categories/Categories";
import CategoryBox from "../categories/CategoryBox";
import { useSearchParams } from "next/navigation";
import NavbarItem from "../NavbarItem";

const SidebarModal = ({ session }: { session: any }) => {
  const { state } = useContext(SidebarContext);
  const params = useSearchParams();
  const category = params?.get("category");

  return (
    <div
      className={`fixed top-[75px] h-[calc(100vh-75px)] w-[208.3px] bg-gray-200 transition-transform duration-300 ease-in-out z-20 overflow-auto ${
        state.isSidebarOpen ? "" : "-translate-x-full"
      }`}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="py-1 flex flex-col ">
        <div className="block md:hidden">
          <NavbarItem session={session} />
        </div>
        {mainCategories.map((item) => (
          <CategoryBox
            key={item.label}
            label={item.label}
            categoryId={item.categoryId}
            secondCategory={item.secondCategory}
            selected={category === item.categoryId.toString()}
          />
        ))}
      </div>
    </div>
  );
};

export default SidebarModal;
