import { User } from "prisma/generated/client";
import UserReservationClient from "./UserReservationClient";
import getBuyingHistory from "@/app/actions/getBuyingHistory";
import getSellingHistory from "@/app/actions/getSellingHistory";
const UserReservation = async ({ currentUser }: { currentUser: User }) => {
  const buyingHistory = await getBuyingHistory();
  const sellingHistory = await getSellingHistory();

  return (
    <UserReservationClient
      currentUser={currentUser}
      buyingHistory={buyingHistory}
      sellingHistory={sellingHistory}
    />
  );
};

export default UserReservation;
