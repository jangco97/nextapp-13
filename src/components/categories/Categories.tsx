"use client";
import { useSearchParams } from "next/navigation";
import CategoryButton from "./CategoryButton";
import FilterButton from "../filters/FilterButton";
import PriceFilterButton from "../filters/PriceFilterButton";

export const mainCategories = [
  {
    label: "도서/문구",
    categoryId: "1",
    secondCategory: [
      {
        label: "학습/참고서",
        categoryId: "101",
      },
      {
        label: "수험서/자격증",
        categoryId: "102",
      },
      {
        label: "외국어",
        categoryId: "103",
      },
      {
        label: "컴퓨터/인터넷",
        categoryId: "104",
      },
      {
        label: "대학교재",
        categoryId: "105",
      },
      {
        label: "인터넷강의",
        categoryId: "106",
      },
    ],
  },
  {
    label: "리빙/생활",
    categoryId: "2",
    secondCategory: [
      {
        label: "주방용품",
        categoryId: "107",
      },
      {
        label: "식품",
        categoryId: "108",
      },
      {
        label: "욕실용품",
        categoryId: "109",
      },
      {
        label: "생활잡화",
        categoryId: "110",
      },
    ],
  },
  {
    label: "패션의류",
    categoryId: "3",
    secondCategory: [
      {
        label: "여성의류",
        categoryId: "111",
      },
      {
        label: "남성의류",
        categoryId: "112",
      },
      {
        label: "남녀공용",
        categoryId: "113",
      },
    ],
  },
  {
    label: "패션잡화",
    categoryId: "4",
    secondCategory: [
      {
        label: "여성신발",
        categoryId: "114",
      },
      {
        label: "남성신발",
        categoryId: "115",
      },
      {
        label: "여성시계",
        categoryId: "116",
      },
      {
        label: "남성시계",
        categoryId: "117",
      },
    ],
  },
  {
    label: "모바일/태블릿",
    categoryId: "5",
    secondCategory: [
      {
        label: "스마트폰",
        categoryId: "118",
      },
      {
        label: "태블릿",
        categoryId: "119",
      },
      {
        label: "액세서리",
        categoryId: "120",
      },
    ],
  },
  {
    label: "pc/노트북",
    categoryId: "6",
    secondCategory: [
      {
        label: "데스크탑",
        categoryId: "121",
      },
      {
        label: "노트북",
        categoryId: "122",
      },
      {
        label: "모니터",
        categoryId: "123",
      },
      {
        label: "주변기기",
        categoryId: "124",
      },
    ],
  },
  {
    label: "무료나눔",
    categoryId: "7",
  },
  {
    label: "기타",
    categoryId: "8",
  },
];

export const subCategories = [
  {
    label: "학습/참고서",
    categoryId: "101",
  },
  {
    label: "수험서/자격증",
    categoryId: "102",
  },
  {
    label: "외국어",
    categoryId: "103",
  },
  {
    label: "컴퓨터/인터넷",
    categoryId: "104",
  },
  {
    label: "대학교재",
    categoryId: "105",
  },
  {
    label: "인터넷강의",
    categoryId: "106",
  },
  {
    label: "주방용품",
    categoryId: "107",
  },
  {
    label: "식품",
    categoryId: "108",
  },
  {
    label: "욕실용품",
    categoryId: "109",
  },
  {
    label: "생활잡화",
    categoryId: "110",
  },
  {
    label: "여성의류",
    categoryId: "111",
  },
  {
    label: "남성의류",
    categoryId: "112",
  },
  {
    label: "남녀공용",
    categoryId: "113",
  },
  {
    label: "여성신발",
    categoryId: "114",
  },
  {
    label: "남성신발",
    categoryId: "115",
  },
  {
    label: "여성시계",
    categoryId: "116",
  },
  {
    label: "남성시계",
    categoryId: "117",
  },
  {
    label: "스마트폰",
    categoryId: "118",
  },
  {
    label: "태블릿",
    categoryId: "119",
  },
  {
    label: "액세서리",
    categoryId: "120",
  },
  {
    label: "데스크탑",
    categoryId: "121",
  },
  {
    label: "노트북",
    categoryId: "122",
  },
  {
    label: "모니터",
    categoryId: "123",
  },
  {
    label: "주변기기",
    categoryId: "124",
  },
];

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get("category");
  const label = params?.get("label");
  const subLabel = params?.get("subLabel");
  console.log(label);
  return (
    <div className="flex gap-[300px] bg-gray-100 justify-center p-7 mb-10">
      <div className="flex w-full justify-between items-center">
        <div className="flex justify-between">
          <div>{label}</div>
          <div>{subLabel && ">" + subLabel}</div>
        </div>
        <div>
          <div className="flex">
            <div className="hidden md:block">
              <CategoryButton />
            </div>
            <div className="hidden md:block">
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
    // <div className="flex flex-row items-center justify-between pt-4 overflow-x-auto">
    //   {mainCategories.map((item) => (
    //     <CategoryBox
    //       key={item.label}
    //       label={item.label}
    //       categoryId={item.categoryId}
    //       selected={category === item.categoryId.toString()}
    //     />
    //   ))}
    // </div>
  );
};

export default Categories;
