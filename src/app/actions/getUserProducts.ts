import prisma from "../../app/libs/prismadb";
import getCurrentUser from "./getCurrentUser";
export interface Params {
  status?: string | undefined;
  sort?: string;
}
export default async function getUserProducts(params: Params) {
  const currentUser = await getCurrentUser();
  if (!currentUser) return null;
  let orderBy = {};
  let product = {};
  try {
    const { status = "전체", sort = "DATE_DESC" } = params;
    if (sort === "PRICE_ASC") {
      orderBy = {
        price: "asc",
      };
    } else if (sort === "PRICE_DESC") {
      orderBy = {
        price: "desc",
      };
    } else if (sort === "DATE_DESC") {
      orderBy = {
        createdAt: "desc",
      };
    }

    if (status === "전체") {
      product = await prisma.product.findMany({
        where: {
          userId: currentUser?.id as string,
        },
        orderBy: orderBy,
      });
    } else {
      product = await prisma.product.findMany({
        where: {
          userId: currentUser?.id as string,
          status: status,
        },
        orderBy: orderBy,
      });
    }

    if (!product) return null;

    return product;
  } catch (error: any) {
    throw new Error(error);
  }
}
