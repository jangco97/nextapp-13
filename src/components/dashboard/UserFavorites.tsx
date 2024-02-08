"use client";
import React, { Fragment, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import qs from "query-string";
import Link from "next/link";
import Image from "next/image";
import HeartButton from "@/components/products/HeartButton";
import { FaLocationDot } from "react-icons/fa6";
const UserFavorites = ({ carts, currentUser }: { carts: any; currentUser: any }) => {
  const [isAlive, setIsAlive] = useState(false);
  const router = useRouter();
  const params = useSearchParams();
  const currentQuery = qs.parse(params?.toString());
  useEffect(() => {
    if ("favorites" in currentQuery) {
      setIsAlive(true);
    }
    return () => {
      setIsAlive(false);
    };
  }, [currentQuery]);
  return (
    isAlive && (
      <div>
        <div className="flex flex-col content-between ">
          <hr className="mb-5" />
          <div className="grid grid-cols-4 gap-4 place-items-center text-gray">
            <p>이미지</p>
            <p className="flex">
              {" "}
              <FaLocationDot />
              주소
            </p>
            <p>상품이름</p>
            <p>가격</p>
          </div>
          <hr className="mt-5 mb-5" />
          {carts?.map((cart: any) => (
            <Fragment key={cart.id}>
              <div className="grid grid-cols-4 gap-4 place-items-center ">
                <div className="relative w-20 h-20 overflow-hidden aspect-square rounded-xl">
                  {" "}
                  <Image
                    src={cart.imageSrc[0]}
                    fill
                    sizes="auto"
                    className="object-cover w-full h-full trangition group-hover:scale-110 group-hover:ease-out duration-300"
                    alt="product"
                  />
                  {currentUser?.id !== cart.userId && (
                    <div className="absolute top-3 right-3">
                      <HeartButton productId={cart.id} currentUser={currentUser} />
                    </div>
                  )}
                </div>
                <div>{cart.address}</div>

                <Link href={`/products/${cart.id}`}>
                  {" "}
                  <h2 className=" text-blue-500">{cart.title}</h2>
                </Link>

                <p>{cart.price}</p>
              </div>
              <hr className="mb-5 mt-5" />
            </Fragment>
          ))}
        </div>
      </div>
    )
  );
};

export default UserFavorites;
