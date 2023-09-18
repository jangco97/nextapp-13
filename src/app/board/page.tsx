import React from "react";
import getCurrentUser from "../actions/getCurrentUser";
import Button from "@/components/Button";
import Container from "@/components/Container";
import BoardContainer from "@/components/boards/BoardContainer";
import DopamineCategories from "@/components/categories/DopamineCategories";
import FloatingButton from "@/components/FloatingButton";
import Pagination from "@/components/Pagination";
import EmptyState from "@/components/EmptyState";
import { BOARDS_PER_PAGE } from "@/constants";
import getBoards, { BoardParams } from "../actions/getBoards";

interface BoardProps {
  searchParams: BoardParams;
}

const BoardPage = async ({ searchParams }: BoardProps) => {
  const page = searchParams?.page;
  const userData = await getCurrentUser();
  console.log("getcurrentUser", userData);
  const pageNum = typeof page === "string" ? Number(page) : 1;

  const boards = await getBoards(searchParams);
  console.log(boards)
  const currentUser = await getCurrentUser();
  return (
    <>
      <Container>
        <DopamineCategories></DopamineCategories>
        {boards?.data.length === 0 ? (
          <EmptyState showReset />
        ) : (
          <>
            <div className="grid gap-8 pt-12 pb-10 grid-cols-1">
              <div className="p-10 font-bold text-xl">
                <div className="min-w-full grid grid-cols-2 pb-5 text-slate-400">
                  <div className="grid grid-cols-3">
                    <span>카테고리</span>
                    <span className="col-span-2">제목</span>
                  </div>

                  <div className="grid grid-cols-4">
                    <span>닉네임</span>
                    <span>레벨</span>
                    <span>티어</span>
                    <span>날짜</span>
                  </div>
                </div>
                <hr/>
              </div>
              
              {boards.data.map((board) => (
                <BoardContainer
                  key={board.id}
                  currentUser={currentUser}
                  data={board}
                />
              ))}
            </div>
          </>
        )}
        <Pagination
          page={pageNum}
          totalItems={boards.totalItems}
          perPage={BOARDS_PER_PAGE}
        />
        <FloatingButton href="/board/upload">글쓰기</FloatingButton>
      </Container>
    </>
  );
};

export default BoardPage;
