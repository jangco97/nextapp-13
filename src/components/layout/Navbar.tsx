"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useContext, useState } from "react";
import Link from "next/link";
import { SidebarContext } from "@/context/sidebaropen.context";
import NavbarItem from "./NavbarItem";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { FieldValues, useForm } from "react-hook-form";
import qs from "query-string";
import { receivechat } from "@/queries";
import { useGetCart } from "@/queries";

interface NavbarProps {
  currentUser: any;
}

const Navbar = ({ currentUser }: NavbarProps) => {
  const { state, dispatch } = useContext(SidebarContext);
  const router = useRouter();
  const params = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  let currentQuery = {};
  if (params) {
    currentQuery = qs.parse(params?.toString()); //{'category' : 'interior', 'page' : '2'}
  }

  // 로그인 상태에 따라 상태 업데이트

  const {
    register,
    watch,
    formState: { errors },
    reset,
  } = useForm<FieldValues>({
    defaultValues: {
      search: "",
    },
  });
  const search = watch("search");
  const updatedQuery = {
    ...currentQuery,
    search: search,
  };
  const { data } = useGetCart(currentUser?.id as string);
  const { data: chatData } = receivechat(currentUser?.id as string);
  const handleSearch = () => {
    setIsLoading(true);
    router.push(qs.stringifyUrl({ url: "/", query: updatedQuery }));
    setIsLoading(false);
  };
  return (
    <nav className="fixed right-0 left-0  flex items-center justify-between px-3 h-[75px] z-10  bg-indigo-800/70 text-white">
      <div className="flex">
        <button
          className="mt-[5px] cursor-pointer, p-[15px] mr-[20px] w-[45px] h-[45px] hover:bg-[#f0f0f0] rounded-full hover:opacity-50"
          onClick={() => dispatch({ type: "TOGGLE_SIDEBAR" })}
        >
          <svg className="hamburger" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
          </svg>
        </button>
        <div className="flex items-center justify-start h-14 text-sm md:text-lg">
          <Link href={"/"}>줄건중고</Link>
        </div>
      </div>
      <div>
        <form className="flex items-center">
          <input
            id="search"
            {...register("search", { required: true })}
            className="p-[5px] md:p-[10px] h-[40px] border-s-gray-50 text-sm bg-gray-400/50"
            placeholder="Search"
            disabled={isLoading}
          />

          <button
            className="hover:bg-gray-800 bg-gray-500  border-s-gray-50 cursor-pointer h-[40px] w-[40px] rounded-r-full flex justify-center items-center disabled:cursor-not-allowed disabled:bg-gray-500/50 disabled:text-gray-500/50 disabled:hover:bg-gray-500/50 disabled:hover:text-gray-500/50"
            onClick={handleSearch}
            disabled={isLoading}
          >
            <HiMagnifyingGlass className="text-md" />
          </button>
        </form>
      </div>
      <div className="hidden md:block">
        <NavbarItem
          currentUser={currentUser}
          favoriteIdsCount={data?.favoriteIdsCount}
          chatCount={chatData?.unreadMessageCount}
        />
      </div>
    </nav>
  );
};

export default Navbar;
