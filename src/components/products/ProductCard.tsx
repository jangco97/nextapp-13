"use client";
import { Product, User } from "../../../prisma/generated/client";
import Image from "next/image";
import React, { use } from "react";
import { useRouter } from "next/navigation";
import HeartButton from "./HeartButton";
import { fromNow } from "@/helpers/dayjs";
import { useSession } from "next-auth/react";
import { FaLocationDot } from "react-icons/fa6";
import { textReduce } from "@/helpers/textreduce";
interface ProductCardProps {
  currentUser?: User | null;
  data: Product;
  status: string | null;
}
const ProductCard = ({ currentUser, data, status }: ProductCardProps) => {
  const router = useRouter();
  const session = useSession();

  return (
    <div
      onClick={() => router.push(`/products/${data.id}`)}
      className="col-span-1 cursor-pointer group"
    >
      <div
        className={`flex flex-col w-full  gap-2 border-2 rounded-xl p-2 hover:border-indigo-800/70 hover:shadow-lg duration-300 ${
          status === "예약중" || status === "판매완료" ? "opacity-60" : ""
        }`}
      >
        <div className="relative w-full overflow-hidden aspect-square ">
          {" "}
          <Image
            src={data.imageSrc[0]}
            fill
            sizes="auto"
            className="object-cover w-full h-full  group-hover:scale-110 group-hover:ease-out duration-300 rounded-xl"
            alt="product"
          />
          {status === "예약중" || status === "판매완료" ? (
            <div className="absolute text-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 flex justify-center items-center text-indigo-500  border-2 rounded-full border-indigo-500">
              {status}
            </div>
          ) : null}
          {currentUser?.id !== data.userId && (
            <div className="absolute top-3 right-3">
              <HeartButton productId={data.id} currentUser={currentUser} />
            </div>
          )}
        </div>
        <div className="gap-4 flex flex-col">
          <div className="text-sm  font-semibold h-10 overflow-hidden">
            {data.title}
          </div>
          {/* <div className="font-light text-neutral-500">{}</div> */}
          <div className="flex">
            <FaLocationDot className="text-indigo-500/70" />
            {textReduce(data?.address)}
          </div>
          <div className="flex flex-row justify-between items-center gap-1">
            <div>
              {data.price} <span className="font-light">원</span>
            </div>
            <div className="text-xs">{fromNow(data.createdAt)}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
