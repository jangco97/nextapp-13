import prisma from "../../app/libs/prismadb";

export default async function getProductName({ productId }: { productId?: string }) {
  if (!productId) return null;
  try {
    const product = await prisma.product.findUnique({
      where: {
        id: productId,
      },
      select: {
        title: true,
      },
    });
    return product?.title;
  } catch (error: any) {
    throw new Error(error);
  }
}
