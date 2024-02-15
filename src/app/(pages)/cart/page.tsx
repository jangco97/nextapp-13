import Container from "@/components/shared/Container";
import getCurrentUser from "@/app/actions/getCurrentUser";
import UserFavorites from "./components/UserFavorites";
import { redirect } from "next/navigation";

const CartPage = async () => {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    redirect("/login");
  }
  return (
    <Container>
      <UserFavorites currentUser={currentUser} />
    </Container>
  );
};

export default CartPage;
