import { PRODUCTS_PER_PAGE } from "@/constants";
import prisma from "../../app/libs/prismadb";
export interface ProductParams {
  latitude?: number;
  longitude?: number;
  sido?: string;
  sigugun?: string;
  category?: string;
  page?: number;
  skip?: number;
  search?: string;
  sort?: string;
  minPrice?: number | null;
  maxPrice?: number | null;
  distance?: number;
}
export default async function getProducts(params: ProductParams) {
  console.log(params, "params");
  try {
    const {
      latitude,
      longitude,
      sido,
      sigugun,
      category,
      skip,
      search,
      sort = "DATE_DESC",
      minPrice,
      maxPrice,
      distance,
    } = params;

    let query: any = {};
    if (category) {
      query.categories = {
        has: category,
      };
    }
    if (search !== "" && search) {
      query.title = {
        contains: search,
      };
    }

    if (minPrice && maxPrice) {
      query.price = {
        gte: Number(minPrice),
        lte: Number(maxPrice),
      };
    }
    if (latitude && longitude) {
      query.latitude = {
        gte: Number(latitude) - Number(distance),
        lte: Number(latitude) + Number(distance),
      };
      query.longitude = {
        gte: Number(longitude) - Number(distance),
        lte: Number(longitude) + Number(distance),
      };
    }

    if (sido && sigugun) {
      query.address = {
        contains: sigugun,
      };
    } else if (sido) {
      query.address = {
        contains: sido,
      };
    }
    const totalItems = await prisma.product.count({
      where: {
        ...query,
        NOT: {
          status: {
            equals: "판매완료",
          },
        },
      },
    });
    const filterFunction = async (sort: string): Promise<any> => {
      if (sort === "PRICE_ASC") {
        return await prisma.product.findMany({
          where: query,
          orderBy: {
            price: "asc",
          },
          skip: skip ? Number(skip) : 0,
          take: PRODUCTS_PER_PAGE,
        });
      } else if (sort === "PRICE_DESC") {
        return await prisma.product.findMany({
          where: query,
          orderBy: {
            price: "desc",
          },
          skip: skip ? Number(skip) : 0,
          take: PRODUCTS_PER_PAGE,
        });
      } else if (sort === "DATE_DESC") {
        return await prisma.product.findMany({
          where: query,
          orderBy: {
            createdAt: "desc",
          },
          skip: skip ? Number(skip) : 0,
          take: PRODUCTS_PER_PAGE,
        });
      }
    };
    const products = await filterFunction(sort);
    return {
      data: products,
      totalItems,
    };
  } catch (error: any) {
    throw new Error(error);
  }
}

// if (category && category.length > 0) {
//   query.category = {
//     hasSome: {
//       id: {
//         in: [Number(category)], // 1과 101을 동시에 포함하는 경우
//       },
//     },
//   };
// }
// if (latitude) {
//   query.latitude = {
//     gte: Number(latitude) - 0.01,
//     lte: Number(latitude) + 0.01,
//   };
// }
// if (longitude) {
//   query.longitude = {
//     gte: Number(longitude) - 0.01,
//     lte: Number(longitude) + 0.01,
//   };
// }
//카테고리 정보를 바탕으로 전체 개수를 가져온다.
