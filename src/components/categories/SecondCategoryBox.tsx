import Link from "next/link";

import { Menu } from "@headlessui/react";
const SecondCategoryBox = ({ label, categoryId, parentLabel }: any) => {
  return (
    <Menu.Item>
      <div className="">
        <Link
          prefetch={false}
          href={`/?category=${categoryId}&label=${parentLabel}&subLabel=${label}`}
        >
          <div className="text-sm text-gray-600 hover:text-gray-800 hover:bg-gray-500/20 mt-1">
            {label}
          </div>
        </Link>
      </div>
    </Menu.Item>
  );
};

export default SecondCategoryBox;
