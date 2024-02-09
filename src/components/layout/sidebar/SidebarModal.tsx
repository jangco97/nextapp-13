"use client";
import { SidebarContext } from "@/context/sidebaropen.context";
import React, { useContext } from "react";
import { mainCategories } from "@/constants";
import CategoryBox from "@/components/categories/CategoryBox";
import { useSearchParams } from "next/navigation";
import NavbarItem from "../NavbarItem";
import { receivechat } from "@/queries";
import { useGetCart } from "@/queries";

const SidebarModal = ({ currentUser }: { currentUser: any }) => {
  const { state } = useContext(SidebarContext);
  const params = useSearchParams();
  const category = params?.get("category");
  const { data } = useGetCart(currentUser?.id as string);

  const { data: chatData } = receivechat(currentUser?.id as string);
  return (
    <div
      className={`fixed top-[75px] h-[calc(100vh-75px)] w-[208.3px]  bg-gradient-to-r from-gray-400 via-gray-300 to-gray-200/90 transition-transform duration-300 ease-in-out z-20 overflow-auto ${
        state.isSidebarOpen ? "" : "-translate-x-full"
      }`}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="py-1 flex flex-col ">
        <div className="block md:hidden">
          <NavbarItem
            currentUser={currentUser}
            favoriteIdsCount={data?.favoriteIdsCount}
            chatData={chatData}
          />
        </div>
        {mainCategories.map((item: any) => (
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
