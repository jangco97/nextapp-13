import React from "react";
import DatePicker from "react-datepicker";
import { formatTime } from "@/helpers/dayjs";
import Image from "next/image";
import "react-datepicker/dist/react-datepicker.css";
import ko from "date-fns/locale/ko";
import UserPurchase from "./UserPurchase";
import NothingComponents from "../NothingComponents";
import UserReservationDelete from "./UserReservationDelete";
import { XMarkIcon } from "@heroicons/react/20/solid";
interface ReservationType {
  products: any;
  setMeetTime: any;
  selectedDates: any;
  handleDateChange: any;
  reservationType: string;
  currentUser: any;
}
const Reservation = ({
  products,
  setMeetTime,
  selectedDates,
  handleDateChange,
  reservationType,
  currentUser,
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
      <div className="flex flex-col gap-5 ">
        <div className="hidden md:block">
          {" "}
          <hr />
          <div className="w-full grid grid-cols-6">
            <div>이미지</div>
            <div>상품명</div>
            <div>가격</div>
            <div>주소</div>
            <div>직거래 시간</div>
            <div>날짜 및 시간 변경</div>
          </div>
          <hr />
        </div>

        {products?.map((reservation: any) => (
          <div
            key={reservation.id}
            className=" border-rose-500/40 border-4 p-2 rounded-xl bg-gradient-to-r from-indigo-400/60 via-indigo-500/70 to-indigo-600/75"
          >
            <div className="flex flex-col md:w-full md:grid md:grid-cols-6 md:items-center text-neutral-600 font-bold">
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
                  <span>{reservation.sellerName}</span>
                </div>
              )}
              {reservationType === "판매예약" && (
                <div className=" ">
                  <span>구매자:</span>
                  <span>{reservation.buyerName}</span>
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
              {currentUser?.id === reservation?.sellerId && (
                <section className="border-2 border-indigo-500 rounded-lg p-1  md:border-none">
                  {" "}
                  <div className="text-md flex justify-center text-white font-bold">
                    아래 날짜를 클릭해 거래 시간을 정하세요.
                  </div>
                  <div className="flex items-center justify-center md:flex-col md:items-start">
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
                        onChange={(date) =>
                          handleDateChange(date, reservation.id)
                        }
                        minDate={new Date()}
                        customInput={
                          <input className="text-white m-2 p-2 rounded-full bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500" />
                        }
                      />
                    </div>
                    <div>
                      <button
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
                            reservation?.longitude
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
                </section>
              )}
            </div>
            {/* 예약 취소 */}
            <div className="flex flex-col">
              <div>
                {reservation?.meetTime && (
                  <UserPurchase
                    meetTime={new Date(reservation?.meetTime)}
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
          </div>
        ))}
        {products?.length === 0 && (
          <NothingComponents
            title={
              reservationType === "구매예약"
                ? "구매 예약한 상품"
                : "판매 예약한 상품"
            }
            pageType="reservation"
          />
        )}
      </div>
    </>
  );
};

export default Reservation;
