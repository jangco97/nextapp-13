import getCurrentUser from "@/app/actions/getCurrentUser";
import getProductById from "@/app/actions/getProductById";
import getProductName from "@/app/actions/getProductName";
import EmptyState from "@/components/EmptyState";
import ProductClient from "./components/ProductClient";

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
