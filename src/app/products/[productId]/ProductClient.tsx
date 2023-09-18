"use client";
import Button from "@/components/Button";
import Container from "@/components/Container";
import { categories } from "@/components/categories/Categories";
import ProductHead from "@/components/products/ProductHead";
import ProductInfo from "@/components/products/ProductInfo";
import { Product, User } from "@prisma/client";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import React from "react";
interface ProductClientProps {
  product: Product & { user: User }; //user 프로퍼티 안에 유저가 있음
  currentUser?: User | null;
}
const ProductClient = ({ product, currentUser }: ProductClientProps) => {
  const router = useRouter();

  const category = categories.find((item) => item.path === product.category);
  
  const KakaoMap = dynamic(() => import("../../../components/KakaoMap"), {
    ssr: false,
  });
  console.log(product)
  return (
    <Container>
      <div className="max-w-screen-lg mx-auto">
        <div className="flex flex-col gap-6">
          <ProductHead
            title={product.title}
            imageSrc={product.imageSrc}
            id={product.id}
            currentUser={currentUser}
          />
          <div className="grid grid-cols-1 mt-6 gap-5">
            <ProductInfo
              user={product.user}
              category={category}
              createdAt={product.createdAt}
              description={product.description}
            />
            <div className="order-first mb-10 mt-10 md:order-last md:col-span-3">
              <KakaoMap
                detailPage
                latitude={product.latitude}
                longitude={product.longitude}
              />
            </div>
          </div>
          {currentUser?.id !== product?.user?.id && 
            <div className="mt-10">
              <Button
                onClick={() =>
                  router.push(
                    `/chat?id=${product?.user?.id}&name=${product?.user?.name}&image=${product?.user?.image}`
                  )
                }
                label="이 유저와 채팅하기"
              />
            </div>
          }
        </div>
      </div>
    </Container>
  );
};

export default ProductClient;
