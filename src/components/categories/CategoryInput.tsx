import React from "react";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
interface CategoryInputProps {
  label: string;
  categoryId: string;
  secondCategory: any;
  onClick: (a: string, b: string) => void;
}

const CategoryInput = ({ label, categoryId, secondCategory, onClick }: CategoryInputProps) => {
  return (
    <div className="flex gap-[300px] bg-gray-100 justify-center p-7 mb-10">
      <div>
        <Menu as="div" className="relative inline-block text-left">
          <div
            className={` p-4 flex flex-col gap-3 hover:border-orange-500 transition cursor-pointer 
             
          `}
          >
            <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
              {label}
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
            <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="flex flex-col ">
                {secondCategory &&
                  secondCategory.map((item: any) => (
                    <Menu.Item key={item.label}>
                      <div
                        className={`border-2 p-4 flex flex-col gap-3 hover:border-orange-500 transition cursor-pointer
                      `}
                        onClick={() => onClick(categoryId, item.categoryId)}
                      >
                        {item.label}
                      </div>
                    </Menu.Item>
                  ))}
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  );
};

export default CategoryInput;
