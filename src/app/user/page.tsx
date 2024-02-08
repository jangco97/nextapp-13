import Container from "@/components/shared/Container";
import getCurrentUser from "../actions/getCurrentUser";
import getUserProducts from "../actions/getUserProducts";
import { Params } from "../actions/getUserProducts";
import UserProducts from "@/components/dashboard/UserProducts";
import UserFavorites from "@/components/dashboard/UserFavorites";
import UserReviews from "@/components/dashboard/UserReviews";
import UserReservations from "@/components/dashboard/UserReservations";
import Navigation from "@/components/dashboard/navigation/Navigation";
import Avatar from "@/components/shared/Avatar";

const UserPage = async ({ searchParams }: { searchParams: Params }) => {
  const currentUser = await getCurrentUser();
  const userProducts = await getUserProducts({ searchParams });
  if (!currentUser) return null;

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
        {searchParams?.link === "products" && (
          <section>
            <UserProducts userProducts={userProducts} isGuest={false} />
          </section>
        )}

        {searchParams?.link === "reviews" && (
          <section>
            <UserReviews userId={currentUser?.id} />
          </section>
        )}
        {searchParams?.link === "favorites" && (
          <section>
            <UserFavorites currentUser={currentUser} />
          </section>
        )}
        {searchParams?.link === "reservations" && (
          <section>
            <UserReservations currentUser={currentUser} />
          </section>
        )}
      </Container>
    </>
  );
};

export default UserPage;
