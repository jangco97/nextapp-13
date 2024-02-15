import getCurrentUser from "@/app/actions/getCurrentUser";
import getProductById from "@/app/actions/getProductById";
import EmptyState from "@/components/EmptyState";
import React from "react";
import ProductClient from "./ProductClient";
import getProductName from "@/app/actions/getProductName";
interface Params {
  productId?: string;
}

export async function generateMetadata({ params: { productId } }: { params: Params }) {
  const title = await getProductName({ productId });
  return {
    title: title,
  };
}

const ProductPage = async ({ params }: { params: Params }) => {
  const product = await getProductById(params);
  const currentUser = await getCurrentUser();

  if (!product) {
    return <EmptyState />;
  }
  return <ProductClient product={product} currentUser={currentUser} />;
};

export default ProductPage;
