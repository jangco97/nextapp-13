import React from "react";
import { mainCategories } from "@/constants";
import CategoryIcon from "./CategoryIcon";
import Link from "next/link";
const CategoryCircle = ({ currentLabel }: { currentLabel: string | null }) => {
  return (
    <>
      <div className="grid grid-cols-4 gap-5 mb-5">
        {mainCategories.map((item) => (
          <>
            {item.label === currentLabel &&
              item?.secondCategory?.map((subitem) => (
                <Link
                  key={subitem.label}
                  href={`/?category=${subitem.categoryId}&label=${item.label}&subLabel=${subitem.label}`}
                >
                  <div className="flex items-center justify-center  w-24 h-10  rounded-md bg-gradient-to-r from-blue-400  via-indigo-400 to-indigo-500 p-2 hover:bg-gray-500/50 cursor-pointer">
                    <span className="block text-xs text-white px-4 py-2 font-semibold rounded-md ">
                      {subitem.label}
                    </span>
                  </div>
                </Link>
              ))}
          </>
        ))}
      </div>
      <div className="grid grid-cols-4 gap-5 w-full">
        {mainCategories.map((item) => (
          <>
            <Link
              key={item.label}
              href={`/?category=${item.categoryId}&label=${item.label}`}
            >
              <div className="flex flex-col items-center justify-center w-24 h-24 bg-gradient-to-r from-indigo-300 via-indigo-400 to-indigo-500 p-2 border-2 rounded-full hover:bg-gray-500/50 cursor-pointer">
                <div className="flex flex-col items-center justify-center text-sm  text-white  font-semibold rounded-full">
                  <CategoryIcon label={item.label} />
                  {item.label}
                </div>
              </div>
            </Link>
          </>
        ))}
      </div>
      <hr className="mt-5 mb-5"></hr>
    </>
  );
};

export default CategoryCircle;
