"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import qs from "query-string";
import Link from "next/link";
import { fromNow } from "@/helpers/dayjs";
import Image from "next/image";
import FilterButton from "@/components/filterbutton/FilterButton";
import UserProductsButton from "./button/UserProductsButton";
import ProductStatusButton from "./button/ProductStatusButton";
import NothingComponents from "../NothingComponents";
// 바로 수정을 할 수 있도록 수정 버튼이 있어야 한다.

const UserProducts = ({
  userProducts,
  isGuest,
}: {
  userProducts: any;
  isGuest: boolean;
}) => {
  const [isAlive, setIsAlive] = useState(false);

  const router = useRouter();
  const params = useSearchParams();
  const currentQuery = qs.parse(params?.toString());

  useEffect(() => {
    if ("products" in currentQuery) {
      setIsAlive(true);
    }
    return () => {
      setIsAlive(false);
    };
  }, [currentQuery]);

  return (
    isAlive && (
      <div className="mb-20">
        <div className="w-full flex justify-evenly">
          <UserProductsButton />
          <FilterButton />
        </div>
        {userProducts?.length === 0 && (
          <NothingComponents title="등록하신 상품" pageType="reservation" />
        )}
        <div className="grid  gap-8 pt-12 pb-10 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gird-cols-5 2xl:grid-cols-6">
          {userProducts?.map((product: any) => (
            <div key={product.id}>
              <div className="col-span-1">
                <div
                  className={`flex flex-col w-full gap-2 border-2 rounded-xl p-2 hover:border-indigo-800/70 hover:shadow-lg duration-300`}
                >
                  <div className="relative w-full overflow-hidden aspect-square ">
                    {" "}
                    <Image
                      onClick={() => router.push(`/products/${product.id}`)}
                      src={product.imageSrc[0]}
                      fill
                      sizes="auto"
                      className=" cursor-pointer group object-cover w-full h-full  group-hover:scale-110 group-hover:ease-out duration-300 rounded-xl"
                      alt="product"
                    />
                    {product.status === "예약중" ||
                    product.status === "판매완료" ? (
                      <div className="absolute text-lg font-bold top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 flex justify-center items-center text-indigo-800 border-2 rounded-full border-indigo-800">
                        {product.status}
                      </div>
                    ) : null}
                  </div>
                  <div className="gap-4 flex flex-col">
                    <div className="text-sm  font-semibold h-10 overflow-hidden">
                      {product.title}
                    </div>
                    {/* <div className="font-light text-neutral-500">{}</div> */}
                    <div className="flex flex-row justify-between items-center gap-1">
                      <div>
                        {product.price} <span className="font-light">원</span>
                      </div>
                      <div>{fromNow(product.createdAt)}</div>
                    </div>
                    <hr />

                    <div className="w-full flex justify-evenly">
                      {" "}
                      {isGuest === true ? null : (
                        <ProductStatusButton
                          productId={product.id}
                          currentStatus={product.status}
                        />
                      )}
                      {isGuest === true ? null : (
                        <button
                          className="text-center w-20 border-2 text-white bg-indigo-400 rounded-xl p-2 hover:bg-indigo-500 duration-300"
                          onClick={() =>
                            router.push(`/products/${product.id}/edit`)
                          }
                        >
                          수정
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  );
};

export default UserProducts;
