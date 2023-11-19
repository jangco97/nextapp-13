import prisma from "../../app/libs/prismadb";

export default async function getUser(userId: string) {
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });
  return user;
}
