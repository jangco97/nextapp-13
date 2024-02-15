import DatePicker from "react-datepicker";
import { formatTime } from "@/helpers/dayjs";
import Image from "next/image";
import "react-datepicker/dist/react-datepicker.css";
import ko from "date-fns/locale/ko";
import UserPurchase from "./UserPurchase";
import NothingComponents from "@/components/NothingComponents";
import UserReservationDelete from "./UserReservationDelete";

import Link from "next/link";
interface ReservationType {
  products: any;
  setMeetTime: any;
  selectedDates: any;
  handleDateChange: any;
  reservationType: string;
  currentUser: any;
  isLoading?: boolean;
}
const Reservation = ({
  products,
  setMeetTime,
  selectedDates,
  handleDateChange,
  reservationType,
  currentUser,
  isLoading,
}: ReservationType) => {
  if (reservationType === "구매예약") {
    products = products?.filter((product: any) => {
      return product?.buyAccept !== true;
    });
  } else if (reservationType === "판매예약") {
    products = products?.filter((product: any) => {
      return product?.sellAccept !== true;
    });
  }

  return (
    <>
      {products?.length === 0 && (
        <NothingComponents
          title={reservationType === "구매예약" ? "구매 예약한 상품" : "판매 예약한 상품"}
          pageType="reservation"
        />
      )}
      <div className="flex flex-col gap-5 md:grid md:grid-cols-2">
        {products?.map((reservation: any) => (
          <div
            key={reservation.id}
            className=" border-rose-500/40 border-4 p-2 rounded-xl bg-gradient-to-r from-indigo-200/80 via-indigo-200/70 to-indigo-200/80"
          >
            <div className="flex flex-col md:w-full text-neutral-600 font-bold">
              <div className="relative">
                <Image
                  src={reservation.product?.imageSrc[0]}
                  width={100}
                  height={100}
                  className="object-cover rounded-xl"
                  alt="productImage"
                />
                <div className="absolute right-1 top-1">
                  <UserReservationDelete
                    reservationId={reservation?.id}
                    buyerId={reservation?.buyerId}
                    sellerId={reservation?.sellerId}
                    reservationType={reservationType}
                    productId={reservation?.productId}
                    productTitle={reservation?.product?.title}
                  />
                </div>
              </div>
              {reservationType === "구매예약" && (
                <div className="text-white">
                  <span>판매자:</span>
                  <Link href={`/shop/${reservation?.sellerId}`}>
                    <span>{reservation.sellerName}</span>
                  </Link>
                </div>
              )}
              {reservationType === "판매예약" && (
                <div className=" ">
                  <span>구매자:</span>
                  <Link href={`/shop/${reservation?.buyerId}`}>
                    <span>{reservation.buyerName}</span>
                  </Link>
                </div>
              )}
              <div>
                <span>상품명:</span>
                <span>{reservation.product?.title}</span>
              </div>
              <div>
                <span>가격:</span>
                <span>{reservation.product?.price}</span>
              </div>

              <div>
                <div>
                  <span>주소:</span>
                  <span>{reservation?.address}</span>
                </div>
                <div>
                  <span>상세주소:</span>
                  <span>{reservation?.addressDetail}</span>
                  <div className="flex justify-around">
                    {" "}
                    <button className="m-4 p-1 rounded-full bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500">
                      <span className="block text-gray-200 px-4 py-2 font-semibold rounded-full bg-gray-300/40">
                        <a
                          href={`https://map.kakao.com/link/map/${reservation?.address},${reservation?.latitude},${reservation?.longitude}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          지도보기
                        </a>
                      </span>
                    </button>
                    {currentUser?.id === reservation?.sellerId && (
                      <button className="m-4 p-1 rounded-full bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500">
                        <span className="block text-gray-200 px-4 py-2 font-semibold rounded-full bg-gray-300/40">
                          <Link href={`/products/${reservation?.productId}/edit`}>위치 수정</Link>
                        </span>
                      </button>
                    )}
                  </div>
                </div>
              </div>

              <div className=" text-neutral-700">
                <span>직거래 시간:</span>
                <span>
                  {reservation?.meetTime
                    ? formatTime(reservation?.meetTime)
                    : "시간이 정해지지 않았습니다."}
                </span>
              </div>

              <section className="border-2 border-indigo-500/80 rounded-lg p-2">
                {" "}
                {currentUser?.id === reservation?.sellerId && (
                  <>
                    <div className="text-md flex justify-center text-neutral-600 font-bold">
                      아래 날짜를 클릭해 거래 시간을 정하세요.
                    </div>
                    <div className="flex flex-col md:flex-col md:items-start">
                      {" "}
                      <div>
                        <DatePicker
                          shouldCloseOnSelect
                          className="datepicker"
                          locale={ko}
                          dateFormat="yyyy년 MM월 dd일 hh시 mm분"
                          selected={selectedDates[reservation?.id] || new Date()}
                          showTimeSelect
                          timeFormat="HH:mm"
                          onChange={(date) => handleDateChange(date, reservation.id)}
                          minDate={new Date()}
                          customInput={
                            <input className="text-white m-2 p-2 rounded-full bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500" />
                          }
                        />
                      </div>
                      <div>
                        <button
                          disabled={isLoading}
                          className="m-2 p-1 rounded-full bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500"
                          onClick={() =>
                            setMeetTime(
                              reservation?.id,
                              reservation?.buyerId,
                              reservation?.sellerId,
                              reservation?.productId,
                              reservation?.address,
                              reservation?.addressDetail,
                              reservation?.latitude,
                              reservation?.longitude,
                            )
                          }
                        >
                          <span className="block text-gray-200 px-4 py-2 font-semibold rounded-full bg-gray-300/40">
                            {" "}
                            시간변경
                          </span>
                        </button>
                      </div>
                    </div>
                  </>
                )}
                <div className="flex flex-col">
                  <div>
                    {reservation && (
                      <UserPurchase
                        meetTime={reservation?.meetTime}
                        reservationType={reservationType}
                        buyerId={reservation?.buyerId}
                        sellerId={reservation?.sellerId}
                        reservationId={reservation?.id}
                        productId={reservation?.productId}
                        sellerName={reservation?.sellerName}
                        buyerName={reservation?.buyerName}
                      />
                    )}
                  </div>
                </div>
              </section>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Reservation;
