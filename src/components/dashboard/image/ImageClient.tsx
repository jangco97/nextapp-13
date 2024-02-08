"use client";
import Image from "next/image";
import { useRouter } from "next/router";
const ImageClient = ({ productId, src }: { productId: string; src: string }) => {
  const router = useRouter();
  return (
    <Image
      src={src}
      fill
      sizes="auto"
      className=" cursor-pointer group object-cover w-full h-full  group-hover:scale-110 group-hover:ease-out duration-300 rounded-xl"
      alt="product"
      onClick={() => router.push(`/products/${productId}/edit`)}
    />
  );
};

export default ImageClient;
