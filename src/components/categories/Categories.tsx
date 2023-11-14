"use client";
import { useSearchParams } from "next/navigation";
import FilterButton from "../filters/FilterButton";
import PriceFilterButton from "../filters/PriceFilterButton";
import CategoryCircle from "./CategoryCircle";

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get("category");
  const label = params?.get("label");
  const subLabel = params?.get("subLabel");
  console.log(label);
  return (
    <div className=" bg-gray-100 pl-2 pr-3 pt-[90px] pb-[50px]">
      <div className="flex flex-col w-full ">
        <div className="flex justify-start mb-10">
          {label && (
            <div className=" bg-slate-400 rounded-md text-white p-1">
              {label}
            </div>
          )}
          {subLabel && (
            <div className=" bg-slate-400 rounded-md text-white p-1">
              {"> " + subLabel}
            </div>
          )}
        </div>
        <div>
          <div className="flex flex-col">
            <div>
              <CategoryCircle currentLabel={label} />
            </div>
            <div className="flex justify-evenly items-center h-full">
              <div className="">
                <PriceFilterButton />
              </div>
              <div>
                {" "}
                <FilterButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
