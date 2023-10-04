"use client";
import styled from "styled-components";
import { SidebarContext } from "@/context/sidebaropen.context";
import React, { useState, useContext } from "react";
import Categories, { mainCategories } from "../categories/Categories";
import CategoryBox from "../categories/CategoryBox";
import { useSearchParams } from "next/navigation";
import NavbarItem from "../NavbarItem";

const SidebarModal = ({ session }: { session: any }) => {
  const { state } = useContext(SidebarContext);
  const params = useSearchParams();
  const category = params?.get("category");

  const Modal = styled.div`
    position: fixed;
    top: 75px;
    height: calc(100vh - 75px);
    width: 208.3px;
    background-color: #f0f0f0;
    transform: ${state.isSidebarOpen
      ? "translateX(0)"
      : "translateX(-100%)"}; //사이드바가 열리면 x축으로 0만큼 이동
    transition: transform 0.3s ease-in-out;
    z-index: 20;
    overflow: auto;
  `;
  return (
    <Modal onClick={(e) => e.stopPropagation()}>
      <div className="py-1 flex flex-col ">
        <div className="block md:hidden">
          <NavbarItem session={session} />
        </div>
        {mainCategories.map((item) => (
          <CategoryBox
            key={item.label}
            label={item.label}
            categoryId={item.categoryId}
            secondCategory={item.secondCategory}
            selected={category === item.categoryId.toString()}
          />
        ))}
      </div>
    </Modal>
  );
};

export default SidebarModal;
