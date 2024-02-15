import { User } from "../../../prisma/generated/client";
import React from "react";
import Avatar from "../shared/Avatar";
import ProductCategory from "./ProductCategory";
import { formatTime } from "@/helpers/dayjs";
import Link from "next/link";
interface ProductInfoProps {
  user: User;
  category:
    | {
        label: string;
        categoryId: string;
      }
    | undefined;
  subCategory:
    | {
        label: string;
        categoryId: string;
      }
    | undefined;
  createdAt: Date;
  description: string;
  price?: number;
  address?: string | null;
  addressDetail?: string | null;
  currentUser?: User | null;
}
const ProductInfo = ({
  user,
  category,
  subCategory,
  createdAt,
  description,
  price,
  address,
  addressDetail,
  currentUser,
}: ProductInfoProps) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 text-xl font-semibold">
          <Avatar src={user?.image} />
          {currentUser?.id !== user?.id ? (
            <Link href={`/shop/${user?.id}?link=products`}>
              <p>{user?.name}</p>
            </Link>
          ) : (
            <p>{user?.name}</p>
          )}
        </div>
        <div>{formatTime(createdAt)}</div>
        <hr />
      </div>

      {category && <ProductCategory category={category} subCategory={subCategory} />}
      {price && <div>{price}원</div>}
      <hr />
      <div>{description}</div>
      <hr />
      <div>
        <span>{"주소:"}</span> <span className="text-red-400">{address}</span>
        {"  |  "}
        <span className="text-blue-400">{addressDetail}</span>
      </div>
    </div>
  );
};

export default ProductInfo;
