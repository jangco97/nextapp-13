import Container from "@/components/Container";
import React from "react";
// reservation post를 통해 건내줘야 하는 것은
//sellerId, buyerId, productId, meetTime
//detailpage에서 예약하기 할때 위의 내용을 api에 주는 것으로

//이 페이지는 전적으로 get api를 통해서 예약한 상품을 볼 수 있어야 하므오 buyerId와 일치하는 상품을 뿌려준다.
//예약 수락 대기 상태인지 아니면 수락했는지 표시
//상대방은 예약 수락 버튼을 누를 수 있고 수락하면 예약 시간 변경 가능
//예약 시간에 따라서 남은 시간을 보여준다.
//예약된 시간이 다 될 경우 구매자와 판매자가 모두 동의시 구매 확정 완료
//구매자는 이때부터 리뷰쓰기가 가능하고 리뷰 쓰기 버튼이 생기면 리뷰 쓰는 페이지로 이동 가능

const ReservationPage = () => {
  return;
  <Container>
    <div className="text-center">예약 상품 확인하기</div>
  </Container>;
};

export default ReservationPage;
