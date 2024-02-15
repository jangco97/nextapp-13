import getCurrentUser from "@/app/actions/getCurrentUser";
import ProductEditOrUpload from "../../components/ProductEditOrUpload";
import { redirect } from "next/navigation";
import prisma from "@/app/libs/prismadb";
const ProductEditPage = async ({ params }: { params: { productId: string } }) => {
  const productId = params.productId;
  const currentUser = await getCurrentUser();
  const productData = await prisma?.product.findUnique({
    where: {
      id: productId,
    },
    include: {
      user: true,
    },
  });
  if (!currentUser || !productData || currentUser.id !== productData.user.id) {
    redirect(`/products/${productId}`);
  }
  return <ProductEditOrUpload productId={productId} productData={productData} />;
};

export default ProductEditPage;
