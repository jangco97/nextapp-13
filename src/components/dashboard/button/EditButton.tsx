"use client";
import { useRouter } from "next/navigation";
const EditButton = ({ productId }: { productId: string }) => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push(`/products/${productId}/edit`)}
      className="text-center w-20 border-2 text-white bg-indigo-400 rounded-xl p-2 hover:bg-indigo-500 duration-300"
    >
      수정
    </button>
  );
};

export default EditButton;
