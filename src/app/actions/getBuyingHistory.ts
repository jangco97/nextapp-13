import prisma from "../../app/libs/prismadb";
import getCurrentUser from "./getCurrentUser";

export default async function getBuyingHistory() {
  const currentUser = await getCurrentUser();
  if (!currentUser) return;
  const buyingHistory = await prisma.buyer.findMany({
    where: {
      userId: currentUser?.id,
    },

    include: {
      product: true,
    },
  });
  return buyingHistory;
}
