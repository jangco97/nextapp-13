import React from "react";
import DatePicker from "react-datepicker";
import { formatTime } from "@/helpers/dayjs";
import Image from "next/image";
import "react-datepicker/dist/react-datepicker.css";
import ko from "date-fns/locale/ko";
import UserPurchase from "./UserPurchase";
import NothingComponents from "../NothingComponents";

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
            className="border-slate-500 border-2 p-1 rounded-xl  bg-indigo-300/40"
          >
            <div className="flex flex-col md:w-full md:grid md:grid-cols-6 md:items-center">
              <div>
                <Image
                  src={reservation.product?.imageSrc[0]}
                  width={100}
                  height={100}
                  className="object-cover rounded-xl"
                  alt="productImage"
                />
              </div>
              {reservationType === "구매예약" && (
                <div>
                  <span className=" text-slate-500">판매자:</span>
                  <span className=" text-emerald-800">
                    {reservation.sellerName}
                  </span>
                </div>
              )}
              {reservationType === "판매예약" && (
                <div>
                  <span className=" text-slate-500">구매자:</span>
                  <span className=" text-emerald-800">
                    {reservation.buyerName}
                  </span>
                </div>
              )}
              <div>
                <span className=" text-slate-500">상품명:</span>
                <span className=" text-emerald-800">
                  {reservation.product?.title}
                </span>
              </div>
              <div>
                <span className=" text-slate-500">가격:</span>
                <span className=" text-emerald-800">
                  {reservation.product?.price}
                </span>
              </div>

              <div>
                <div>
                  <span className=" text-slate-500">주소:</span>
                  <span className="text-emerald-800">
                    {reservation?.address}
                  </span>
                </div>
                <div>
                  <span className=" text-slate-500">상세주소:</span>
                  <span className="text-emerald-800">
                    {reservation?.addressDetail}
                  </span>
                </div>
              </div>

              <div>
                <span className=" text-slate-500">직거래 시간:</span>
                <span className="text-emerald-800">
                  {reservation?.meetTime
                    ? formatTime(reservation?.meetTime)
                    : "시간이 정해지지 않았습니다."}
                </span>
              </div>
              {currentUser?.id === reservation?.sellerId && (
                <section className="border-2 border-slate-500 p-1  md:border-none">
                  {" "}
                  <div className="text-sm flex justify-center text-slate text-bold">
                    아래 날짜를 클릭해 거래 시간을 정하세요.
                  </div>
                  <div className="flex items-center md:flex-col md:items-start">
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
                          <input className=" border-indigo-500 border-2 rounded-xl p-1 text-white bg-slate-500 text-sm" />
                        }
                      />
                    </div>
                    <div>
                      <button
                        className="mr-2 border-2 text-white bg-indigo-400 rounded-xl p-2 text-sm"
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
                        시간변경
                      </button>
                    </div>
                    <div>
                      {" "}
                      <button className=" w-4/12 p-2 rounded-lg mt-10 bg-gray-500 hover:bg-indigo-600/50 text-gray-100 text-center">
                        <a
                          href={`https://map.kakao.com/link/map/${reservation?.address},${reservation?.latitude},${reservation?.longitude}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          큰지도보기
                        </a>
                      </button>
                    </div>
                  </div>
                </section>
              )}
            </div>

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
            <hr />
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

      <hr />
    </>
  );
};

export default Reservation;
