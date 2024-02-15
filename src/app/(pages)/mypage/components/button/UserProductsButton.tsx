"use client";

import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useSearchParams } from "next/navigation";
import qs from "query-string";
import Link from "next/link";
const UserProductsButton = () => {
  const params = useSearchParams();
  const [currentStatus, setCurrentStatus] = useState("전체");
  let currentQuery = {};
  if (params) {
    currentQuery = qs.parse(params?.toString());
  }
  const all = {
    ...currentQuery,
    status: "전체",
  };
  const selling = {
    ...currentQuery,
    status: "판매중",
  };
  const reservating = {
    ...currentQuery,
    status: "예약중",
  };
  const sold = {
    ...currentQuery,
    status: "판매완료",
  };
  return (
    <Menu as="div" className="relative inline-block text-left ml-3">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          {currentStatus}
          <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
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
            "absolute left-0 z-10 mt-2 w-40 text-center origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          }
        >
          <div className=" flex flex-col ">
            <Menu.Item>
              <Link prefetch={false} href={{ query: all }}>
                <div
                  onClick={() => setCurrentStatus("전체")}
                  className=" border-2 p-4 flex flex-col gap-3 hover:border-indigo-800 transition cursor-pointer"
                >
                  전체
                </div>
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link prefetch={false} href={{ query: selling }}>
                <div
                  onClick={() => setCurrentStatus("판매중")}
                  className=" border-2 p-4 flex flex-col gap-3 hover:border-indigo-800 transition cursor-pointer"
                >
                  판매중
                </div>
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link prefetch={false} href={{ query: reservating }}>
                <div
                  onClick={() => setCurrentStatus("예약중")}
                  className="border-2 p-4 flex flex-col gap-3 hover:border-indigo-800 transition cursor-pointer"
                >
                  예약중
                </div>
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link prefetch={false} href={{ query: sold }}>
                <div
                  onClick={() => setCurrentStatus("판매완료")}
                  className="border-2 p-4 flex flex-col gap-3 hover:border-indigo-800 transition cursor-pointer"
                >
                  판매완료
                </div>
              </Link>
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default UserProductsButton;
