"use client";
import React, { useEffect } from "react";
import axios from "axios";
//category route에 post요청 보내기
const data = [
  { name: "도서/문구", categoryId: "1" },
  { name: "리빙/생활", categoryId: "2" },
  { name: "패션의류", categoryId: "3" },
  { name: "패션잡화", categoryId: "4" },
  { name: "모바일/태블릿", categoryId: "5" },
  { name: "노트북/pc", categoryId: "6" },
  { name: "무료나눔", categoryId: "7" },
  { name: "기타", categoryId: "8" },
  { name: "대학교재", categoryId: "101" },
  { name: "프로그래밍", categoryId: "102" },
  { name: "자격증", categoryId: "103" },
  { name: "외국어", categoryId: "104" },
  { name: "과학/수학", categoryId: "105" },
  { name: "디자인/예술", categoryId: "106" },
  { name: "만화책", categoryId: "107" },
  { name: "소설", categoryId: "108" },
  { name: "문구", categoryId: "109" },
  { name: "주방용품", categoryId: "110" },
  { name: "욕실용품", categoryId: "111" },
  { name: "식품", categoryId: "112" },
  { name: "생활잡화", categoryId: "113" },
  { name: "여성의류", categoryId: "114" },
  { name: "남성의류", categoryId: "115" },
  { name: "여성신발", categoryId: "116" },
  { name: "남성신발", categoryId: "117" },
  { name: "가방", categoryId: "118" },
  { name: "시계", categoryId: "119" },
  { name: "스마트폰", categoryId: "120" },
  { name: "태블릿pc", categoryId: "121" },
  { name: "스마트워치", categoryId: "122" },
  { name: "케이스/거치대", categoryId: "123" },
  { name: "노트북", categoryId: "124" },
  { name: "데스크탑", categoryId: "125" },
  { name: "모니터", categoryId: "126" },
  { name: "cpu/메인보드", categoryId: "127" },
  { name: "HDD/SDD/ODD", categoryId: "128" },
  { name: "RAM", categoryId: "129" },
  { name: "USB/케이블", categoryId: "130" },
  { name: "키보드/마우스/스피커", categoryId: "131" },
];

const UserPage = () => {
  const makeCategories = async () => {
    const result = await axios.post("/api/category", data);
    console.log(result);
  };
  return (
    <div>
      <button onClick={() => makeCategories()}>make category</button>
    </div>
  );
};

export default UserPage;
