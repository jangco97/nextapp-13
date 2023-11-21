"use client";
import React, { useState, MouseEvent } from "react";
import { formatTime } from "@/helpers/dayjs";
import Image from "next/image";
import { Modal, Button } from "antd";
import PurchaseReview from "./PurchaseReview";
import Link from "next/link";
import NothingComponents from "../NothingComponents";
const PurchaseHistory = ({
  histories,
  historyType,
}: {
  histories: any;
  historyType: string;
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleCancel = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setIsModalOpen(false);
  };

  return (
    <>
      {histories?.length === 0 && (
        <NothingComponents
          title={historyType === "판매내역" ? "판매한 상품" : "구매한 상품"}
          pageType="reservation"
        />
      )}
      <div className="grid gap-10 md:grid md:grid-cols-2 md:gap-10">
        {histories?.map((history: any) => (
          <>
            {" "}
            {isModalOpen && (
              <Modal
                title="리뷰작성"
                open={true}
                onCancel={handleCancel}
                cancelText="취소"
                footer={[
                  <Button key="back" onClick={handleCancel}>
                    취소
                  </Button>,
                ]}
              >
                <PurchaseReview
                  id={history?.id}
                  setIsModalOpen={setIsModalOpen}
                  userId={history?.userId}
                  sellerId={history?.product?.userId}
                  productId={history?.product?.id}
                />
              </Modal>
            )}
            <div
              key={history?.id}
              className="border-2 border-gray-300 p-2 rounded-xl flex flex-col gap-2"
            >
              <div>
                <Image
                  src={history.product?.imageSrc[0]}
                  width={100}
                  height={100}
                  className="object-cover rounded-xl"
                  alt="productImage"
                />
              </div>
              {historyType === "구매내역" && (
                <div>
                  <span className=" text-slate-500">판매자:</span>
                  <Link href={`/user/${history.sellerId}`}>
                    <span className=" text-emerald-800">
                      {history?.sellerName}
                    </span>
                  </Link>
                  {history?.isReviewd ? (
                    <div className="gap-x-1.5 rounded-md bg-gray-500/50 m-3 px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 cursor-pointer">
                      리뷰완료
                    </div>
                  ) : (
                    <button
                      className="gap-x-1.5 rounded-md bg-gray-500/50 m-3 px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 cursor-pointer"
                      onClick={() => {
                        setIsModalOpen(true);
                      }}
                    >
                      리뷰작성
                    </button>
                  )}
                </div>
              )}
              {historyType === "판매내역" && (
                <div>
                  <span className=" text-slate-500">구매자:</span>
                  {/* <Link href={`/user/${}`}> */}
                  <span className=" text-emerald-800">
                    {history?.buyerName}
                  </span>
                  {/* </Link> */}
                </div>
              )}
              <div>
                <span className=" text-slate-500">상품명:</span>
                <span className=" text-emerald-800">
                  {history.product?.title}
                </span>
              </div>
              <div>
                <span className=" text-slate-500">가격:</span>
                <span className=" text-emerald-800">
                  {history.product?.price}
                </span>
              </div>

              <div>
                <div>
                  <span className=" text-slate-500">주소:</span>
                  <span className="text-emerald-800">
                    {history?.product?.address}
                  </span>
                </div>
                <div>
                  <span className=" text-slate-500">상세주소:</span>
                  <span className="text-emerald-800">
                    {history?.product?.addressDetail}
                  </span>
                </div>
              </div>
              <div>
                <span className=" text-slate-500">날짜:</span>
                <span className="text-emerald-800">
                  {formatTime(history?.createdAt)}
                </span>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default PurchaseHistory;
