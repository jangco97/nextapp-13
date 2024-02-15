"use client";

import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { useRouter } from "next/navigation";
import axios from "axios";

export const ProductStatusButton = ({
  productId,
  currentStatus,
}: {
  productId: string;
  currentStatus: string;
}) => {
  const router = useRouter();
  const changeProductStatus = async (productId: string, status: string) => {
    const chnageMessage = await axios.patch(`/api/user`, {
      productId,
      status,
    });
    router.refresh();
    alert(chnageMessage.data.message);
  };
  const productDelete = async (productId: string) => {
    const deleteMessage = await axios.delete(`/api/products/${productId}`);
    alert(deleteMessage.data.message);
    router.refresh();
  };
  return (
    <Menu as="div" className="relative inline-block text-left z-5">
      <div>
        <Menu.Button className="inline-flex  justify-center gap-x-1 rounded-md bg-white px-1 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          {currentStatus}
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
            "absolute left-0 z-10 mt-2 text-sm w-40 text-center origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          }
        >
          <div className=" flex flex-col ">
            <Menu.Item>
              <div
                onClick={() => changeProductStatus(productId, "판매중")}
                className=" border-2 p-1 flex flex-col gap-3 hover:border-indigo-800 transition cursor-pointer"
              >
                판매중
              </div>
            </Menu.Item>
            <Menu.Item>
              <div
                onClick={() => changeProductStatus(productId, "예약중")}
                className=" border-2 p-1 flex flex-col gap-3 hover:border-indigo-800 transition cursor-pointer"
              >
                예약중
              </div>
            </Menu.Item>
            <Menu.Item>
              <div
                onClick={() => changeProductStatus(productId, "판매완료")}
                className="border-2 p-1 flex flex-col gap-3 hover:border-indigo-800 transition cursor-pointer"
              >
                판매완료
              </div>
            </Menu.Item>
            <Menu.Item>
              <div
                onClick={() => productDelete(productId)}
                className="border-2 p-1 flex flex-col gap-3 hover:border-indigo-800 transition cursor-pointer"
              >
                삭제
              </div>
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default ProductStatusButton;
