import prisma from "../../app/libs/prismadb";
import getCurrentUser from "./getCurrentUser";
export interface Params {
  status?: string | undefined;
  sort?: string;
}
export default async function getUserProducts({
  searchParams,
  params,
}: {
  searchParams: Params;
  params?: { userId?: string };
}) {
  const currentUser = await getCurrentUser();
  let currentUserId = currentUser?.id;
  if (params?.userId) {
    currentUserId = params?.userId;
  }
  let orderBy = {};
  let product = {};
  try {
    const { status = "전체", sort = "DATE_DESC" } = searchParams;
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
          userId: currentUserId,
        },
        orderBy: orderBy,
      });
    } else {
      product = await prisma.product.findMany({
        where: {
          userId: currentUserId,
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
