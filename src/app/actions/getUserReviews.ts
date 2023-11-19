import prisma from "../../app/libs/prismadb";

export default async function getUserReviews(userId?: string) {
  if (userId) {
    const UserReviews = await prisma.review.findMany({
      where: {
        sellerId: userId,
      },

      include: {
        product: true,
      },
    });
    return UserReviews;
  }
}
