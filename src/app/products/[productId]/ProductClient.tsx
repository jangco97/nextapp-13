"use client";
import Container from "@/components/Container";
import { mainCategories, subCategories } from "@/constants";
import ProductHead from "@/components/products/ProductHead";
import ProductInfo from "@/components/products/ProductInfo";
import { Product, User } from "../../../../prisma/generated/client";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";
import axios from "axios";
import Button from "@/components/Button";
import useSWRMutation from "swr/mutation";

interface ProductClientProps {
  product: Product & { user: User }; //user 프로퍼티 안에 유저가 있음
  currentUser?: User | null;
}
const ProductClient = ({ product, currentUser }: ProductClientProps) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
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
    const deleteMessage = await axios.delete(`/api/products/${product.id}`);
    alert(deleteMessage.data.message);
    router.push(`/`);
  };
  async function sendRequest(
    url: string,
    {
      arg,
    }: {
      arg: {
        text: string;
        image: string;
        receiverId: string;
        senderId: string;
        messageType: string;
        productId: string;
      };
    }
  ) {
    return fetch(url, {
      method: "POST",
      body: JSON.stringify(arg),
    }).then((res) => res.json());
  }
  const { trigger } = useSWRMutation("/api/chat", sendRequest);
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    if (!currentUser) return;
    try {
      trigger({
        text: product.title,
        image: product.imageSrc[0],
        receiverId: product.userId,
        senderId: currentUser?.id,
        messageType: "reservation",
        productId: product?.id,
      });
      alert("예약이 완료되었습니다.");
      router.push(`/chat/${product.userId}`);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };
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
            status={product.status}
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
              currentUser={currentUser}
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
          <div className="">
            {currentUser?.id !== product?.user?.id &&
              currentUser?.id &&
              product.status === "판매중" && (
                <form onSubmit={handleSubmit}>
                  <div className="mt-10 ">
                    <Button label="상품 예약하기" disabled={isLoading} />
                  </div>
                </form>
              )}
            {currentUser?.id !== product?.user?.id && currentUser?.id && (
              <div className="mt-10 ">
                <Button
                  onClick={() => router.push(`/chat/${product?.user?.id}`)}
                  label="이 유저와 채팅하기"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductClient;
