"use client";
import React from "react";
import { Fragment, useState, useEffect } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useSearchParams } from "next/navigation";
import qs from "query-string";
import Link from "next/link";
import { regions } from "@/regions";
const AreaFilter = () => {
  const params = useSearchParams();
  const [sido, setSido] = useState("시/도");
  const [sigugun, setSigugun] = useState("시/군/구");
  const [sigugunList, setSigugunList] = useState<any[]>([]);
  let currentQuery = {};
  if (params) {
    currentQuery = qs.parse(params?.toString()); //{'category' : 'interior', 'page' : '2'}
  }

  useEffect(() => {
    const List: any = regions.filter((item) => item.label === sido);
    console.log(List[0]?.sigugun);
    setSigugunList(List[0]?.sigugun);
  }, [sido]);
  return (
    <>
      <Menu as="span" className="relative inline-block text-left ml-3">
        <span>
          <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2  text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
            {sido}
            <ChevronDownIcon
              className="-mr-1 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </Menu.Button>
        </span>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items
            className={
              "absolute right-0 z-10 mt-2 w-48 text-center origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            }
          >
            <div className=" flex flex-col ">
              <Menu.Item>
                <div className="grid grid-cols-4">
                  {regions.map((item) => (
                    <Link
                      key={item.categoryId}
                      href={{ query: { ...currentQuery, sido: item.label } }}
                    >
                      <div
                        onClick={() => setSido(item.label)}
                        className=" border-2 p-4 text-xs flex flex-col gap-3 hover:border-indigo-800  transition cursor-pointer"
                      >
                        {item.label}
                      </div>
                    </Link>
                  ))}
                </div>
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
      <Menu as="span" className="relative inline-block text-left ml-3">
        <span>
          <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
            {sigugun}
            <ChevronDownIcon
              className="-mr-1 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </Menu.Button>
        </span>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items
            className={
              "absolute right-0 z-10 mt-2 w-96 text-center origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            }
          >
            <Menu.Item>
              <div className="grid grid-cols-4 gap-y-2 gap-x-1">
                {sigugunList?.map((item2) => (
                  <Link
                    key={item2}
                    href={{ query: { ...currentQuery, sigugun: item2 } }}
                  >
                    <span
                      onClick={() => setSigugun(item2)}
                      className=" border-2 text-xs  hover:border-indigo-800 transition cursor-pointer"
                    >
                      {item2}
                    </span>
                  </Link>
                ))}
              </div>
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  );
};

export default AreaFilter;
