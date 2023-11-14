import React from "react";
import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useSearchParams } from "next/navigation";
import qs from "query-string";
import Link from "next/link";
const PriceFilterButton = () => {
  const params = useSearchParams();

  let currentQuery = {};

  if (params) {
    currentQuery = qs.parse(params?.toString()); //{'category' : 'interior', 'page' : '2'}
  }
  const [price, setPrice] = useState("0");

  const setPriceHandler = (id: string) => {
    setPrice(id);
  };
  const allPirce = {
    ...currentQuery,
    minPrice: 0,
    maxPrice: 2000000000,
  };
  const lowerThan100T = {
    ...currentQuery,
    minPrice: 0,
    maxPrice: 100000,
  };
  const lowerThan300T = {
    ...currentQuery,
    minPrice: 100000,
    maxPrice: 300000,
  };
  const lowerThan500T = {
    ...currentQuery,
    minPrice: 300000,
    maxPrice: 500000,
  };
  const higherThan500T = {
    ...currentQuery,
    minPrice: 500000,
    maxPrice: 2000000000,
  };

  return (
    <Menu as="div" className="relative inline-block text-left ml-3">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          {"가격필터링"}
          <ChevronDownIcon
            className="-mr-1 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
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
            "absolute left-0 z-10 mt-2 p-4 w-64 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          }
        >
          <div className=" flex flex-col ">
            <Menu.Item>
              <div>
                <Link href={{ query: allPirce }}>
                  <input
                    checked={"0" === price}
                    onChange={() => setPriceHandler("0")}
                    type="radio"
                    id={"0T"}
                  />
                </Link>
                <label htmlFor={"0T"}>{"모든 가격"}</label>
              </div>
            </Menu.Item>
            <Menu.Item>
              <div>
                <Link href={{ query: lowerThan100T }}>
                  <input
                    checked={"1" === price}
                    onChange={() => setPriceHandler("1")}
                    type="radio"
                    id={"10T"}
                  />
                </Link>
                <label htmlFor={"10T"}>{"10만원 이하"}</label>
              </div>
            </Menu.Item>
            <Menu.Item>
              <div>
                <Link href={{ query: lowerThan300T }}>
                  <input
                    checked={"2" === price}
                    onChange={() => setPriceHandler("2")}
                    type="radio"
                    id={"30T"}
                  />
                </Link>
                <label htmlFor={"30T"}>{"10만원 이상 - 30만원 이하"}</label>
              </div>
            </Menu.Item>
            <Menu.Item>
              <div>
                <Link href={{ query: lowerThan500T }}>
                  <input
                    checked={"3" === price}
                    onChange={() => setPriceHandler("3")}
                    type="radio"
                    id={"50T"}
                  />
                </Link>
                <label htmlFor={"50T"}>{"30만원 이상 - 50만원 이하"}</label>
              </div>
            </Menu.Item>
            <Menu.Item>
              <div>
                <Link href={{ query: higherThan500T }}>
                  <input
                    checked={"4" === price}
                    onChange={() => setPriceHandler("4")}
                    type="radio"
                    id={"100T"}
                  />
                </Link>
                <label htmlFor={"100T"}>{"50만원 이상"}</label>
              </div>
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default PriceFilterButton;
