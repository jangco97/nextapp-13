import React from "react";
import { mainCategories } from "@/constants";
import CategoryIcon from "./CategoryIcon";
import Link from "next/link";
const CategoryCircle = ({ currentLabel }: { currentLabel: string | null }) => {
  return (
    <>
      <hr className="mb-5" />
      <div className="grid grid-cols-4 gap-5 mb-5 w-full">
        {mainCategories.map((item) => (
          <>
            {item.label === currentLabel &&
              item?.secondCategory?.map((subitem) => (
                <Link
                  key={subitem.label}
                  href={`/?category=${subitem.categoryId}&label=${item.label}&subLabel=${subitem.label}`}
                >
                  <div className="flex items-center justify-center  w-24 h-10 border-indigo-500/40 border-2 rounded-xl bg-slate-500 p-2 hover:bg-gray-500/50 cursor-pointer">
                    <div className=" text-xs font-bold text-white">
                      {subitem.label}
                    </div>
                  </div>
                </Link>
              ))}
          </>
        ))}
      </div>
      <hr className="mb-5"></hr>
      <div className="grid grid-cols-4 gap-5 w-full">
        {mainCategories.map((item) => (
          <>
            <Link
              key={item.label}
              href={`/?category=${item.categoryId}&label=${item.label}`}
            >
              <div className="flex flex-col items-center justify-center  w-20 h-20 border-indigo-500/40 border-2 rounded-full bg-slate-500 p-1 hover:bg-gray-500/50 cursor-pointer">
                <CategoryIcon label={item.label} />
                <div className="text-sm font-bold text-white">{item.label}</div>
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
