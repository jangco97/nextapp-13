"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import qs from "query-string";
import Link from "next/link";
import CartPage from "@/app/cart/page";
import Image from "next/image";
import HeartButton from "@/components/HeartButton";
import { User } from "prisma/generated/client";
const UserFavorites = ({
  carts,
  currentUser,
}: {
  carts: any;
  currentUser: any;
}) => {
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
        <h1>Cart</h1>
        <div className="flex flex-col content-between ">
          {carts?.map((cart: any) => (
            <>
              <div key={cart.id} className=" flex justify-around items-center">
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
                      <HeartButton
                        productId={cart.id}
                        currentUser={currentUser}
                      />
                    </div>
                  )}
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <Link href={`/products/${cart.id}`}>
                    {" "}
                    <h2>{cart.title}</h2>
                  </Link>

                  <p>{cart.price}</p>
                </div>
              </div>
              <hr />
            </>
          ))}
        </div>
      </div>
    )
  );
};

export default UserFavorites;
