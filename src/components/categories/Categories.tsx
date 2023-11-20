"use client";
import { useSearchParams } from "next/navigation";
import FilterButton from "../filters/FilterButton";
import PriceFilterButton from "../filters/PriceFilterButton";
import CategoryCircle from "./CategoryCircle";
import AreaFilter from "../areafilter/AreaFilter";
import LocationComponent from "../myposition/LocationComponent";
const Categories = () => {
  const params = useSearchParams();
  const category = params?.get("category");
  const label = params?.get("label");
  const subLabel = params?.get("subLabel");
  console.log(label);
  return (
    <div className=" bg-gray-100 pl-2 pr-3 pt-[90px] pb-[50px]">
      <div className="flex flex-col w-full ">
        <div className="flex justify-center mb-10 ">
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
          <div className="flex flex-col ">
            <div>
              <CategoryCircle currentLabel={label} />
            </div>
            <div className=" flex flex-col gap-3 items-center w-full h-full">
              <div className="grid grid-cols-2 gap-3 place-items-center">
                <div>
                  <PriceFilterButton />
                </div>
                <div>
                  {" "}
                  <FilterButton />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 place-items-center">
                <AreaFilter />
              </div>
              <div>
                <LocationComponent />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
