import { FaBook } from "react-icons/fa";
import { CgSmartHomeRefrigerator } from "react-icons/cg";
import { IoShirtSharp } from "react-icons/io5";
import { GiConverseShoe } from "react-icons/gi";
import { ImMobile } from "react-icons/im";
import { MdOutlineComputer } from "react-icons/md";
import { GrStatusUnknown } from "react-icons/gr";
const CategoryIcon = ({ label }: { label: string }) => {
  if (label === "도서/문구")
    return <FaBook className="-mr-1 h-5 w-5 text-gray-800" aria-hidden="true" />;
  if (label === "리빙/생활")
    return <CgSmartHomeRefrigerator className="-mr-1 h-5 w-5 text-orange-400" aria-hidden="true" />;
  if (label === "패션의류")
    return <IoShirtSharp className="-mr-1 h-5 w-5 text-green-800" aria-hidden="true" />;
  if (label === "패션잡화")
    return <GiConverseShoe className="-mr-1 h-5 w-5 text-pink-400" aria-hidden="true" />;
  if (label === "모바일/태블릿")
    return <ImMobile className="-mr-1 h-5 w-5 text-indigo-400" aria-hidden="true" />;
  if (label === "pc/노트북")
    return <MdOutlineComputer className="-mr-1 h-5 w-5 text-blue-400" aria-hidden="true" />;

  if (label === "기타") return <GrStatusUnknown className="-mr-1 h-5 w-5 " aria-hidden="true" />;
};

export default CategoryIcon;
