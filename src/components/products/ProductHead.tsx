"use client";
import { User } from "../../../prisma/generated/client";

import Heading from "../shared/Heading";
import HeartButton from "./HeartButton";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import ProductImage from "./ProductImage";
import Button from "../shared/Button";

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
        <div className="flex justify-end gap-4">
          <Button
            type="button"
            label="상품수정"
            onClick={editFunc}
            size="medium"
            rounded="rounded-md"
            width="w-32"
          />
          <Button
            type="button"
            label="삭제하기"
            bgColor="bg-rose-500"
            hover="hover:bg-rose-600"
            rounded="rounded-md"
            width="w-32"
            size="medium"
            onClick={deleteFunc}
          />
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
