"use client";
import { User } from "../../../prisma/generated/client";
import React from "react";
import Heading from "../shared/Heading";
import HeartButton from "./HeartButton";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import ProductImage from "./ProductImage";

interface ProductHeadProps {
  title: string;
  imageSrc: string[];
  id: string;
  productId: string;
  editFunc: () => void;
  deleteFunc: () => void;
  currentUser?: User | null;
  productUserId: string;
  status?: string | null;
}
const ProductHead = ({
  title,
  imageSrc,
  id,
  productId,
  editFunc,
  deleteFunc,
  currentUser,
  productUserId,
  status,
}: ProductHeadProps) => {
  return (
    <>
      <Heading title={title} subtitle={status!} />
      {productId === currentUser?.id && (
        <div className="flex justify-evenly">
          <button
            className=" w-4/12 p-2 mr-5 rounded-lg mt-10 bg-gray-500 hover:bg-indigo-600/50 text-gray-100 text-center"
            onClick={editFunc}
          >
            수정하기
          </button>
          <button
            className=" w-4/12 p-2 mr-5 rounded-lg mt-10 bg-gray-500 hover:bg-indigo-600/50 text-gray-100 text-center"
            onClick={deleteFunc}
          >
            삭제하기
          </button>
        </div>
      )}
      <div className="h-[80vh] md:h-[50vh] rounded-xl w-full relative overflow-hidden place-content-center">
        <div className="flex justify-center mt-5">
          <ProductImage imageSrc={imageSrc} />
        </div>
        {currentUser?.id !== productUserId && (
          <div className="absolute top-3 right-3">
            <HeartButton productId={id} currentUser={currentUser} />
          </div>
        )}
      </div>
    </>
  );
};

export default ProductHead;
