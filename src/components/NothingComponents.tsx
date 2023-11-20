import React from "react";

const NothingComponents = ({
  title,
  pageType,
}: {
  title: string;
  pageType: string;
}) => {
  return (
    <>
      {pageType == "reservation" && (
        <div className="flex flex-col items-center justify-center h-[60vh]">
          <div className="text-xl">아직 {title}이 없습니다.</div>
        </div>
      )}
      {pageType == "search" && (
        <div className="flex flex-col items-center justify-center h-[60vh]">
          <div className="text-xl">아직 {title}이 없습니다.</div>
        </div>
      )}
      {pageType == "review" && (
        <div className="flex flex-col items-center justify-center h-[60vh]">
          <div className="text-xl">아직 {title}가 없습니다.</div>
        </div>
      )}
      {pageType == "cart" && (
        <div className="flex flex-col items-center justify-center h-[60vh]">
          <div className="text-xl">아직 {title}이 없습니다.</div>
        </div>
      )}
    </>
  );
};

export default NothingComponents;
