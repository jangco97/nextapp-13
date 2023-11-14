import React from "react";
import { formatTime } from "@/helpers/dayjs";
import Image from "next/image";
const PurchaseHistory = ({
  histories,
  historyType,
}: {
  histories: any;
  historyType: string;
}) => {
  return (
    <div>
      {histories?.map((history: any) => (
        <div key={history?.id}>
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
              <span className=" text-emerald-800">
                {history.product?.sellerName}
              </span>
            </div>
          )}
          {historyType === "판매내역" && (
            <div>
              <span className=" text-slate-500">구매자:</span>
              <span className=" text-emerald-800">
                {history.product?.buyerName}
              </span>
            </div>
          )}
          <div>
            <span className=" text-slate-500">상품명:</span>
            <span className=" text-emerald-800">{history.product?.title}</span>
          </div>
          <div>
            <span className=" text-slate-500">가격:</span>
            <span className=" text-emerald-800">{history.product?.price}</span>
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
      ))}
    </div>
  );
};

export default PurchaseHistory;
