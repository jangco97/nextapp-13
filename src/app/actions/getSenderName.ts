import prisma from "../../app/libs/prismadb";

export default async function getSenderName(senderId: string) {
  const user = await prisma.user.findUnique({
    where: {
      id: senderId,
    },
    select: {
      name: true,
    },
  });
  if (!user) return null;
  return user;
}
