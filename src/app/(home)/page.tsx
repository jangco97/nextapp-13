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

interface HomeProps {
  searchParams: ProductParams;
}

// interface Product {
//   id: number;
//   title: string;
//   description: string;
//   price: number;
//   image: string;
//   category: string;
//   userId: number;
//   createdAt: string;
//   updatedAt: string;
//   User: {
//     id: number;
//     email: string;
//     name: string;
//     avatar: string;
//     createdAt: string;
//     updatedAt: string;
//   };

// }
export default async function Home({ searchParams }: HomeProps) {
  console.log(searchParams);
  const page = searchParams?.page;
  console.log(page);
  const pageNum = typeof page === "string" ? Number(page) : 1;
  console.log(pageNum);
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
      <Pagination
        page={pageNum}
        totalItems={products.totalItems}
        perPage={PRODUCTS_PER_PAGE}
      />
      <FloatingButton href={"/products/upload"}>+</FloatingButton>
    </Container>
  );
}
