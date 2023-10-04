import Link from "next/link";
import React from "react";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import SecondCategoryBox from "./SecondCategoryBox";

interface CategoryBoxProps {
  label: string;
  categoryId: string;
  selected?: boolean;
  secondCategory?: any;
}
const CategoryBox = ({
  label,
  categoryId,
  selected,
  secondCategory,
}: CategoryBoxProps) => {
  return (
    //   <Link
    //     href={`/?category=${categoryId}`}
    //     className={`
    //   flex
    //   flex-col
    //   items-center
    //   justify-center
    //   gap-2
    //   p-3
    //   border-b-2
    //   hover:text-neutral-800
    //   transition
    //   cursor-pointer
    //   ${selected ? "border-b-neutral-800" : "border-transparent"}
    //   ${selected ? "text-neutral-800" : "text-neutral-500"}
    //  `}
    //   >
    <div className="relative">
      <Menu as="div" className="relative">
        <div className="flex w-full justify-between items-center pl-1 pr-1 ">
          <Link href={`/?category=${categoryId}&label=${label}`}>
            <div className=" cursor-pointer hover:bg-gray-500/20 p-3 rounded-md">
              {label}
            </div>
          </Link>
          <div>
            <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
              <ChevronDownIcon
                className="-mr-1 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </Menu.Button>
          </div>
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
          <Menu.Items className="absolute l-3 t-2 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1 flex flex-col pl-2 p-4">
              {secondCategory &&
                secondCategory.map((item: any) => (
                  <SecondCategoryBox
                    key={item.label}
                    label={item.label}
                    categoryId={item.categoryId}
                    parentLabel={label}
                  />
                ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
      <hr />
    </div>
  );
};

export default CategoryBox;
