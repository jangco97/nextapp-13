import Container from "@/components/shared/Container";
import getCurrentUser from "@/app/actions/getCurrentUser";
import { Params } from "@/app/actions/getUserProducts";
import UserProducts from "./components/UserProducts";
import Navigation from "./components/navigation/Navigation";
import UserReviews from "./components/UserReviews";
import UserFavorites from "../cart/components/UserFavorites";
import UserReservation from "./components/UserReservations";
import Avatar from "@/components/shared/Avatar";
import CustomLoader from "@/components/shared/CustomLoader";
import { Suspense } from "react";
const UserPage = async ({ searchParams }: { searchParams: Params }) => {
  const currentUser = await getCurrentUser();

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
            <Suspense fallback={<CustomLoader />}>
              <UserProducts searchParams={searchParams} isGuest={false} />
            </Suspense>
          </section>
        )}

        {searchParams?.link === "reviews" && (
          <section>
            <Suspense fallback={<CustomLoader />}>
              <UserReviews userId={currentUser?.id} />
            </Suspense>
          </section>
        )}
        {searchParams?.link === "favorites" && (
          <section>
            <Suspense fallback={<CustomLoader />}>
              <UserFavorites currentUser={currentUser} />
            </Suspense>
          </section>
        )}
        {searchParams?.link === "reservations" && (
          <section>
            <Suspense fallback={<CustomLoader />}>
              <UserReservation currentUser={currentUser} />
            </Suspense>
          </section>
        )}
      </Container>
    </>
  );
};

export default UserPage;
