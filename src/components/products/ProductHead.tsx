"use client";
import { User } from "../../../prisma/generated/client";
import React from "react";
import Heading from "../Heading";
import HeartButton from "../HeartButton";
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
}: ProductHeadProps) => {
  return (
    <>
      <Heading title={title} />
      {productId === currentUser?.id && (
        <div>
          <button onClick={editFunc}>수정하기</button>
          <button onClick={deleteFunc}>삭제하기</button>
        </div>
      )}
      <div className="w-full h-[60vh] rounded-xl relative overflow-hidden">
        <div>
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
