import "../globals.css";
import getProducts, { ProductParams } from "../actions/getProducts";
import getCurrentUser from "../actions/getCurrentUser";
import Container from "@/components/shared/Container";
import EmptyState from "@/components/EmptyState";
import ProductCard from "@/components/products/ProductCard";
import Categories from "@/components/categories/Categories";
import Pagination from "@/components/pagination/Pagination";
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
