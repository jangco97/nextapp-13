"use client";

import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import CategoryBox from "./CategoryBox";
import { mainCategories } from "@/constants";
import { useSearchParams } from "next/navigation";
const CategoryButton = () => {
  const params = useSearchParams();
  const category = params?.get("category");
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          카테고리
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
            "absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          }
        >
          <div className="py-1 flex flex-col ">
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
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default CategoryButton;
