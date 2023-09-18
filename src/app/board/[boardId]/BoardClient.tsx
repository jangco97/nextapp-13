"use client";
import Button from "@/components/Button";
import Container from "@/components/Container";
import BoardButton from "@/components/boards/BoardButton";
import BoardHead from "@/components/boards/BoardHead";
import BoardInfo from "@/components/boards/BoardInfo";
import { dopaminecategories } from "@/components/categories/DopamineCategories";
dopaminecategories
import { Board, User } from "@prisma/client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React from "react";
interface BoardClientProps {
  board: Board & { user: User }; //user 프로퍼티 안에 유저가 있음
  currentUser?: User | null;
}
const BoardClient = ({ board, currentUser }: BoardClientProps) => {
  const router = useRouter();
  console.log(board)
  const category = dopaminecategories.find((item) => item.path === board.category);
  
  function handleDeleteClick() {
    const isConfirmed = window.confirm("삭제하시겠습니까?");

    if(isConfirmed){
      axios.delete(`/api/boards/${board.id}`)
      .then(() => {
        router.push('/')
      })
      .catch((error) => {
        alert(error)
      })
    }else {
      console.log('삭제 취소')
    }
  }
  return (
    <Container>
      <div>
        <div className="flex flex-col gap-6">
          <BoardHead
            category={category}
            user={board.user}
            title={board.title}
            createdAt={board.createdAt}
          />
          <div className="grid grid-cols-1 mt-6 gap-5">
            <BoardInfo
              description={board.description}
            />
          </div>
          <div className="w-full bg-gray-200 p-5  rounded-xl">
          {currentUser?.id === board.user.id && <BoardButton label={"수정"} onClick={() => router.push(`${board.id}/modify`)}></BoardButton>}
          {currentUser?.id === board.user.id && <BoardButton label={"삭제"} outline={true} onClick={ handleDeleteClick}></BoardButton>}
          </div>
        
        </div>
      </div>
    </Container>
  );
};

export default BoardClient;
