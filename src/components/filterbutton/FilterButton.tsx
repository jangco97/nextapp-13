"use client";

import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { useSearchParams } from "next/navigation";
import qs from "query-string";
import Link from "next/link";
export const FilterButton = () => {
  const params = useSearchParams();
  const [currentSort, setCurrentSort] = useState("최신순");
  let currentQuery = {};
  if (params) {
    currentQuery = qs.parse(params?.toString()); //{'category' : 'interior', 'page' : '2'}
  }
  const descSort = {
    ...currentQuery,
    sort: "DATE_DESC",
  };
  const lowPriceSort = {
    ...currentQuery,
    sort: "PRICE_ASC",
  };
  const highPriceSort = {
    ...currentQuery,
    sort: "PRICE_DESC",
  };

  return (
    <Menu as="div" className="relative inline-block text-left ml-3">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          {currentSort}
        </Menu.Button>
      </div>

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
            "absolute right-0 z-10 mt-2 w-40 text-center origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          }
        >
          <div className=" flex flex-col ">
            <Menu.Item>
              <Link prefetch={false} href={{ query: descSort }}>
                <div
                  onClick={() => setCurrentSort("최신순")}
                  className=" border-2 p-4 flex flex-col gap-3 hover:border-indigo-800 transition cursor-pointer"
                >
                  최신순
                </div>
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link prefetch={false} href={{ query: lowPriceSort }}>
                <div
                  onClick={() => setCurrentSort("낮은가격순")}
                  className=" border-2 p-4 flex flex-col gap-3 hover:border-indigo-800 transition cursor-pointer"
                >
                  낮은가격순
                </div>
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link prefetch={false} href={{ query: highPriceSort }}>
                <div
                  onClick={() => setCurrentSort("높은가격순")}
                  className="border-2 p-4 flex flex-col gap-3 hover:border-indigo-800 transition cursor-pointer"
                >
                  높은가격순
                </div>
              </Link>
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default FilterButton;
