import { User } from "../../../prisma/generated/client";
import React from "react";
import { IconType } from "react-icons";
import Avatar from "../Avatar";
import ProductCategory from "./ProductCategory";
import { formatTime } from "@/helpers/dayjs";
interface ProductInfoProps {
  user: User;
  category:
    | {
        icon: IconType;
        label: string;
        description: string;
      }
    | undefined;
  createdAt: Date;
  description: string;
}
const ProductInfo = ({
  user,
  category,
  createdAt,
  description,
}: ProductInfoProps) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 text-xl font-semibold">
          <Avatar src={user?.image} />
          <p>{user?.name}</p>
        </div>
        <div>{formatTime(createdAt)}</div>
        <hr />
      </div>

      {category && (
        <ProductCategory
          icon={category.icon}
          label={category.label}
          description={category.description}
        />
      )}
      <hr />
      <div>{description}</div>
    </div>
  );
};

export default ProductInfo;
