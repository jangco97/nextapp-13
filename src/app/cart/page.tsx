import Container from "@/components/Container";
import React from "react";
import getCurrentCarts from "../actions/getCurrentCarts";
import Link from "next/link";
import Image from "next/image";
import getCurrentUser from "../actions/getCurrentUser";
import HeartButton from "@/components/HeartButton";
const CartPage = async () => {
  const carts = await getCurrentCarts();
  const currentUser = await getCurrentUser();
  return (
    <Container>
      <div>
        <h1>Cart</h1>
        <div className="flex flex-col content-between ">
          {carts?.map((cart) => (
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
    </Container>
  );
};

export default CartPage;
