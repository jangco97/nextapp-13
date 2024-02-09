import Link from "next/link";
import NothingComponents from "@/components/NothingComponents";
import getUserReviews from "@/app/actions/getUserReviews";
import { FaStar } from "react-icons/fa";
const UserReviews = async ({ userId }: { userId: string }) => {
  const userReviews = await getUserReviews(userId);
  return userReviews?.length ?? 0 > 0 ? (
    <div className="flex flex-col">
      {userReviews?.map((review: any) => (
        <div key={review.id} className="border-2 border-red-400 ">
          <div>
            <span>제목:</span>
            {review.title}
          </div>
          <Link href={`/products/${review.productId}`}>
            <div>
              <span>상품이름:</span>
              {review.product?.title}
            </div>
          </Link>
          <Link href={`/user/${review.product?.userId}`}></Link>
          <div>
            <span>판매자:</span>
            {review.sellerName}
          </div>
          <div>
            <span>내용:</span>
            {review.text}
          </div>
          <div className="flex w-full">
            <span>평점:</span>
            {[...Array(5)].map((star, index) => {
              const scoreValue = index + 1;
              return (
                <label key={index}>
                  <FaStar
                    className="cursor-pointer"
                    color={scoreValue <= review.userRating ? "#ffc107" : "#e4e5e9"}
                    size={20}
                  />
                </label>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  ) : (
    <NothingComponents title="리뷰" pageType="review" />
  );
};

export default UserReviews;
