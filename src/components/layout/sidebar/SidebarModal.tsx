"use client";
import { SidebarContext } from "@/context/sidebaropen.context";
import React, { useContext } from "react";
import { mainCategories } from "@/constants";
import CategoryBox from "@/components/categories/CategoryBox";
import { useSearchParams } from "next/navigation";
import NavbarItem from "../NavbarItem";
import { useQuery } from "@tanstack/react-query";
import { User } from "prisma/generated/client";

const SidebarModal = ({
  session,
  currentUser,
}: {
  session: any;
  currentUser: any;
}) => {
  const { state } = useContext(SidebarContext);
  const params = useSearchParams();
  const category = params?.get("category");
  async function getUser() {
    const response = await fetch("/api/usercart");
    const data = await response.json();
    return data;
  }

  const { data } = useQuery<User>({
    queryKey: ["user", session?.user?.favoriteIds],
    queryFn: () => getUser(),
    staleTime: 5 * 1000,
  });
  const { data: chatData } = useQuery({
    queryKey: ["chat"],
    queryFn: () => fetch("/api/receivechat").then((res) => res.json()),
    staleTime: 0,
  });
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
            data={data}
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
