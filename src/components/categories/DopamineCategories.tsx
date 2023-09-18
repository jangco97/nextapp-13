"use client"
import {IoGameController} from "react-icons/io5"
import {MdCasino} from "react-icons/md"
import {LuCigarette} from "react-icons/lu"
import {BiSolidDrink} from "react-icons/bi"
import {AiFillYoutube} from "react-icons/ai"
import {TiSortAlphabetically} from "react-icons/ti"
import { useSearchParams } from "next/navigation";
import DopamineCategoryBox from "./DopamineCategoryBox"
export const dopaminecategories = [
    {
        label: '전체',
        path: 'all',
        icon: TiSortAlphabetically,
        description: '전체'
    },
    {
        label: '게임',
        path: 'game',
        icon: IoGameController,
        description: '게임중독'
    },
    {
        label: '도박',
        path: 'gambling',
        icon: MdCasino,
        description: '도박중독'
    },
    {
        label: '흡연',
        path: 'cigarette',
        icon: LuCigarette,
        description: '흡연중독'
    },
    {
        label: '알코올',
        path: 'drink',
        icon: BiSolidDrink,
        description: '알코올중독'
    },
    {
        label: '영상물',
        path: 'video',
        icon: AiFillYoutube,
        description: '영상물중독'
    },
]

const DopamineCategories = () => {
    const params = useSearchParams();
    const category = params?.get("category");
    return (
      <div className="flex bg-blue-50 p-5 mb-10 flex-row items-center justify-between pt-4 overflow-x-auto">
        {dopaminecategories.map((item) => (
          <DopamineCategoryBox
            key={item.label}
            label={item.label}
            path={item.path}
            icon={item.icon}
            selected={category === item.path}
          />
        ))}
      </div>
    );
  };
  
  export default DopamineCategories;