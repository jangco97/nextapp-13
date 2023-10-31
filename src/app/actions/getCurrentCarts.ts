import prisma from "../../app/libs/prismadb";
import getCurrentUser from "./getCurrentUser";

const getCurrentCarts = async () => {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
      return null;
    }

    const currentCarts = await prisma.product.findMany({
      where: {
        id: {
          in: currentUser?.favoriteIds,
        },
      },
    });

    if (!currentCarts) {
      return null;
    }

    return currentCarts;
  } catch (error: any) {
    throw new Error(error);
  }
};

export default getCurrentCarts;
