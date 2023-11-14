import Container from "@/components/Container";
import getCurrentUser from "../actions/getCurrentUser";
import getUserProducts from "../actions/getUserProducts";
import { Params } from "../actions/getUserProducts";
import UserProducts from "@/components/dashboard/UserProducts";
import UserFavorites from "@/components/dashboard/UserFavorites";
import UserReviews from "@/components/dashboard/UserReviews";
import UserReservations from "@/components/dashboard/UserReservations";
import getCurrentCarts from "../actions/getCurrentCarts";
import getBuyingHistory from "../actions/getBuyingHistory";
import getSellingHistory from "../actions/getSellingHistory";
import Navigation from "@/components/dashboard/navigation/Navigation";
import Image from "next/image";
import Avatar from "@/components/Avatar";
interface MyPageProps {
  searchParams: Params;
}

const UserPage = async ({ searchParams }: MyPageProps) => {
  const carts = await getCurrentCarts();
  const currentUser = await getCurrentUser();
  const userProducts = await getUserProducts(searchParams);
  const buyingHistory = await getBuyingHistory();
  const sellingHistory = await getSellingHistory();

  // const reservations = await getReservations();
  return (
    <>
      <section className="pt-[75px]">
        <header className="flex items-center p-2">
          <Avatar src={currentUser?.image || null} />
          <div className="text-lg text-slate-500 ml-3">{currentUser?.name}</div>
        </header>
        <header>
          <Navigation />
        </header>
      </section>
      {/* 상품 전용 섹션 */}
      <Container>
        <section>
          <UserProducts userProducts={userProducts} />
        </section>
        {/* 리뷰 전용 */}
        <section>
          <UserReviews />
        </section>
        {/* 찜 전용 */}
        <section>
          <UserFavorites carts={carts} currentUser={currentUser} />
        </section>
        {/* 예약 전용 */}
        <section>
          <UserReservations
            currentUser={currentUser}
            buyingHistory={buyingHistory}
            sellingHistory={sellingHistory}
          />
        </section>
      </Container>
    </>
  );
};

export default UserPage;
