import Link from "next/link";
import React from "react";

interface ProductCategoryProps {
  category:
    | {
        label: string;
        categoryId: string;
      }
    | undefined;
  subCategory:
    | {
        label: string;
        categoryId: string;
      }
    | undefined;
}
const ProductCategory = ({ category, subCategory }: ProductCategoryProps) => {
  return (
    <div>
      <div className="flex flex-row items-center gap-4">
        <div className="flex flex-col">
          <div className="text-lg font-semibold">
            <Link href={`/?category=${category?.categoryId}&label=${category?.label}`}>
              {category?.label}
            </Link>{" "}
            {subCategory?.label && (
              <>
                <span className="text-lg font-semibold">{">"}</span>
                <Link
                  href={`/?category=${subCategory?.categoryId}&label=${category?.label}&subLabel=${subCategory?.label}`}
                >
                  {subCategory?.label}
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCategory;
