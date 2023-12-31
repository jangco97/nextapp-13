import "../globals.css";
import getProducts, { ProductParams } from "../actions/getProducts";
import getCurrentUser from "../actions/getCurrentUser";
import Container from "@/components/Container";
import EmptyState from "@/components/EmptyState";
import ProductCard from "@/components/products/ProductCard";
import Categories from "@/components/categories/Categories";
import Pagination from "@/components/Pagination";
import { Product } from "../../../prisma/generated/client";
import { PRODUCTS_PER_PAGE } from "@/constants";

interface HomeProps {
  searchParams: ProductParams;
}

export default async function Home({ searchParams }: HomeProps) {
  const page = searchParams?.page;
  const pageNum = typeof page === "string" ? Number(page) : 1;
  const search = searchParams?.search;
  const products = await getProducts(searchParams);
  const currentUser = await getCurrentUser();

  //카테고리를 누르면 카테고리 정보가 url에 나타나고 해당 카테고리 정보에 맞게끔 상품 데이터를 getProducts로 가져온다.
  //카테고리 정보가 없으면 전체 상품 데이터를 가져온다.
  //카테고리 필터제거 하는 버튼 구현 필요(로고를 눌러서 메인페이지로 가면 상관 없긴함)
  //검색 기능 추가 필요
  console.log(search);
  console.log(currentUser, "currentUser");

  return (
    <>
      {/* {category} */}
      <Categories />
      <Container>
        {products?.data.length === 0 ? (
          <EmptyState showReset />
        ) : (
          <>
            <div className="grid  gap-8 pt-12 pb-10 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gird-cols-5 2xl:grid-cols-6">
              {products.data.map((product: Product) => (
                <ProductCard
                  key={product.id}
                  data={product}
                  currentUser={currentUser}
                  status={product?.status}
                />
              ))}
            </div>
          </>
        )}
        <Pagination
          page={pageNum}
          totalItems={products.totalItems}
          perPage={PRODUCTS_PER_PAGE}
        />
      </Container>
    </>
  );
}
