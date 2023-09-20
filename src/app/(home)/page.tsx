import "../globals.css";
import getProducts, { ProductParams } from "../actions/getProducts";
import getCurrentUser from "../actions/getCurrentUser";
import Container from "@/components/Container";
import EmptyState from "@/components/EmptyState";
import ProductCard from "@/components/products/ProductCard";
import FloatingButton from "@/components/FloatingButton";
import Categories from "@/components/categories/Categories";
import Pagination from "@/components/Pagination";
import { Product } from "../../../prisma/generated/client";
import { PRODUCTS_PER_PAGE } from "@/constants";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { User } from "@/components/user";
interface HomeProps {
  searchParams: ProductParams;
}

export default async function Home({ searchParams }: HomeProps) {
  const session = await getServerSession(authOptions);
  console.log(session);
  const page = searchParams?.page;
  const pageNum = typeof page === "string" ? Number(page) : 1;
  //products에는 전체 아이템 개수까지 포함을 시켰다.
  const products = await getProducts(searchParams);
  const currentUser = await getCurrentUser();
  //카테고리를 누르면 카테고리 정보가 url에 나타나고 해당 카테고리 정보에 맞게끔 상품 데이터를 getProducts로 가져온다.
  //카테고리 정보가 없으면 전체 상품 데이터를 가져온다.
  //카테고리 필터제거 하는 버튼 구현 필요(로고를 눌러서 메인페이지로 가면 상관 없긴함)
  //검색 기능 추가 필요
  return (
    <Container>
      {/* {category} */}
      <Categories />
      {products?.data.length === 0 ? (
        <EmptyState showReset />
      ) : (
        <>
          <div className="grid  gap-8 pt-12 pb-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gird-cols-5 2xl:grid-cols-6">
            {products.data.map((product: Product) => (
              <ProductCard
                key={product.id}
                currentUser={currentUser}
                data={product}
              />
            ))}
          </div>
        </>
      )}
      <User></User>
      <Pagination
        page={pageNum}
        totalItems={products.totalItems}
        perPage={PRODUCTS_PER_PAGE}
      />
      <FloatingButton href={"/products/upload"}>+</FloatingButton>
    </Container>
  );
}
