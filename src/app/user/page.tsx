import Container from "@/components/shared/Container";
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
import getUserReviews from "../actions/getUserReviews";
import Avatar from "@/components/shared/Avatar";

const UserPage = async ({ searchParams }: { searchParams: Params }) => {
  const carts = await getCurrentCarts();
  const currentUser = await getCurrentUser();
  const userProducts = await getUserProducts({ searchParams });
  const buyingHistory = await getBuyingHistory();
  const sellingHistory = await getSellingHistory();
  const userReviews = await getUserReviews(currentUser?.id);
  return (
    <>
      <section className="pt-[75px]">
        <header className="flex justify-center items-center p-10">
          <Avatar src={currentUser?.image || null} />
          <div className="text-lg text-slate-500 ml-3">{currentUser?.name}</div>
        </header>
        <header>
          <Navigation isGuest={false} />
        </header>
      </section>
      {/* 상품 전용 섹션 */}
      <Container>
        <section>
          <UserProducts userProducts={userProducts} isGuest={false} searchParams={searchParams} />
        </section>
        {/* 리뷰 전용 */}
        <section>
          <UserReviews userReviews={userReviews} />
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
