import prisma from "../../app/libs/prismadb";
import getCurrentUser from "./getCurrentUser";

export default async function getSellingHistory() {
  const currentUser = await getCurrentUser();
  if (!currentUser) return;
  const sellingHistory = await prisma.seller.findMany({
    where: {
      userId: currentUser?.id,
    },

    include: {
      product: true,
    },
  });
  return sellingHistory;
}
