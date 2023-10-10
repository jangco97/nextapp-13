"use client";

import Container from "@/components/Container";
import {
  mainCategories,
  subCategories,
} from "@/components/categories/Categories";
import ProductHead from "@/components/products/ProductHead";
import ProductInfo from "@/components/products/ProductInfo";
import { Product, User } from "../../../../prisma/generated/client";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import React from "react";
import axios from "axios";
import Button from "@/components/Button";

interface ProductClientProps {
  product: Product & { user: User }; //user 프로퍼티 안에 유저가 있음
  currentUser?: User | null;
}
const ProductClient = ({ product, currentUser }: ProductClientProps) => {
  const router = useRouter();
  const category = mainCategories.find(
    (item) => item.categoryId === product.categories[0]
  );
  const subCategory = subCategories.find(
    (item) => item.categoryId === product.categories[1]
  );
  const KakaoMap = dynamic(() => import("../../../components/KakaoMap"), {
    ssr: false,
  });
  const editRoute = () => {
    router.push(`/products/${product.id}/edit`);
  };
  const deleteFunc = async () => {
    await axios.delete(`/api/products/${product.id}`);
    router.push(`/`);
  };
  console.log(product);
  return (
    <Container>
      <div className=" mx-auto mt-16 mb-60">
        <div className="flex flex-col gap-6">
          <ProductHead
            productUserId={product.userId}
            title={product.title}
            imageSrc={product.imageSrc}
            id={product.id}
            currentUser={currentUser}
            productId={product.user.id}
            editFunc={editRoute}
            deleteFunc={deleteFunc}
          />
          <div className="grid grid-cols-1 mt-6 gap-5">
            <ProductInfo
              user={product.user}
              category={category}
              subCategory={subCategory}
              createdAt={product.createdAt}
              description={product.description}
              price={product.price}
              address={product.address}
              addressDetail={product.addressDetail}
            />

            <div className="order-first mb-10 mt-10 md:order-last md:col-span-3">
              {product.latitude && product.longitude && (
                <KakaoMap
                  address={product.address || ""}
                  detailPage
                  latitude={product.latitude}
                  longitude={product.longitude}
                />
              )}
            </div>
          </div>

          {currentUser?.id !== product?.user?.id && (
            <div className="mt-10 ">
              <Button
                onClick={() =>
                  router.push(
                    `/chat?id=${product?.user?.id}&name=${product?.user?.name}&image=${product?.user?.image}`
                  )
                }
                label="이 유저와 채팅하기"
              />
            </div>
          )}
        </div>
      </div>
    </Container>
  );
};

export default ProductClient;
