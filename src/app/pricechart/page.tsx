import Container from "@/components/shared/Container";
import ProductLineChart from "@/components/ProductLineChart";
import PriceChartSearch from "@/app/pricechart/PriceChartSearch";
import React from "react";

const PriceChart = () => {
  return (
    <Container>
      <h1 className="text-3xl text-center mt-10 mb-5">가격 추정</h1>
      <h2 className="text-center mb-5 text-gray-500">
        상품 가격의 시세값을 알려드립니다.
      </h2>
      <PriceChartSearch></PriceChartSearch>
      <ProductLineChart />
    </Container>
  );
};

export default PriceChart;
