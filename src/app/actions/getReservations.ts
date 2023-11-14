import prisma from "../../app/libs/prismadb";
import getCurrentUser from "./getCurrentUser";
export interface Params {
  status?: string | undefined;
}
export default async function getReservations() {
  const currentUser = await getCurrentUser();
  if (!currentUser) return null;
  try {
    const reservations = await prisma.reservation.findMany({
      where: {
        buyerId: currentUser.id,
        sellerId: currentUser.id,
      },
      include: {
        product: true,
      },
    });

    return { reservations };
  } catch (error: any) {
    throw new Error(error);
  }
}
