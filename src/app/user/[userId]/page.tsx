import React from "react";
import Avatar from "@/components/Avatar";
import getUser from "../../actions/getUser";
import getUserProducts from "@/app/actions/getUserProducts";
import Navigation from "@/components/dashboard/navigation/Navigation";
import Container from "@/components/Container";
import UserProducts from "@/components/dashboard/UserProducts";
import UserReviews from "@/components/dashboard/UserReviews";
import getUserReviews from "@/app/actions/getUserReviews";
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
  const userReviews = await getUserReviews(params.userId);
  return (
    <>
      <section className="pt-[75px]">
        <header className="flex justify-center items-center p-10">
          <Link href={`/user/${params.userId}`}>
            <Avatar src={user?.image || null} />
          </Link>
          <div className="text-lg text-slate-500 ml-3">{user?.name}</div>
          <Link href={`/chat/${user?.id}`}>
            <button className="ml-5 p-2 flex justify-center items-center border-2  border-indigo-400 text-indigo-400 rounded-md hover:bg-indigo-700 hover:text-white">
              채팅하기
            </button>
          </Link>
        </header>
        <header>
          <Navigation isGuest={true} />
        </header>
      </section>
      {/* 상품 전용 섹션 */}
      <Container>
        <section>
          <UserProducts userProducts={userProducts} isGuest={true} />
        </section>
        {/* 리뷰 전용 */}
        <section>
          <UserReviews userReviews={userReviews} />
        </section>
        {/* 찜 전용 */}
      </Container>
    </>
  );
};

export default UserDetailPage;
