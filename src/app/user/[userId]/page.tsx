import React from "react";
import Avatar from "@/components/shared/Avatar";
import getUser from "../../actions/getUser";
import getUserProducts from "@/app/actions/getUserProducts";
import Navigation from "../components/navigation/Navigation";
import Container from "@/components/shared/Container";
import UserProducts from "../components/UserProducts";
import UserReviews from "../components/UserReviews";
import getCurrentUser from "@/app/actions/getCurrentUser";
import { Params } from "@/app/actions/getUserProducts";
import Link from "next/link";
const UserDetailPage = async ({
  searchParams,
  params,
}: {
  searchParams: Params;
  params: { userId: string };
}) => {
  const user = await getUser(params.userId);
  const userProducts = await getUserProducts({ searchParams, params });

  const currentUser = await getCurrentUser();
  return (
    <>
      <section className="pt-[75px]">
        <header className="flex justify-center items-center p-10">
          <Link prefetch={false} href={`/user/${params.userId}`}>
            <Avatar src={user?.image || null} />
          </Link>
          <div className="text-lg text-slate-500 ml-3">{user?.name}</div>
          {currentUser?.id ? (
            <Link href={`/chat/${user?.id}`}>
              <button className="ml-5 p-2 flex justify-center items-center border-2  border-indigo-400 text-indigo-400 rounded-md hover:bg-indigo-700 hover:text-white">
                채팅하기
              </button>
            </Link>
          ) : null}
        </header>
        <header>
          <Navigation isGuest={true} />
        </header>
      </section>
      {/* 상품 전용 섹션 */}
      <Container>
        {searchParams?.link === "products" && (
          <section>
            <UserProducts searchParams={searchParams} isGuest={true} />
          </section>
        )}
        {/* 리뷰 전용 */}
        {searchParams?.link === "reviews" && (
          <section>
            <UserReviews userId={params.userId} />
          </section>
        )}
      </Container>
    </>
  );
};

export default UserDetailPage;
