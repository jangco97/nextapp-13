"use client";
import { User } from "../../../prisma/generated/client";
import React from "react";
import { useRouter } from "next/navigation";
import { fromNow } from "@/helpers/dayjs";
interface BoardDataProps {
  id: string;
  title: string;
  description: string;
  category: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
  user: User;
}
interface BoardContainerProps {
  currentUser?: User | null;
  data: BoardDataProps;
}
const BoardContainer = ({ currentUser, data }: BoardContainerProps) => {
  const router = useRouter();
  console.log(data);
  return (
    <>
      <div
        onClick={() => router.push(`board/${data.id}`)}
        className="p-10 hover:bg-gray-200 cursor-pointer rounded-xl"
      >
        <div className="min-w-full grid grid-cols-2">
          <div className="grid grid-cols-3">
            <span>{data.category}</span>
            <span className="col-span-2">{data.title}</span>
          </div>

          <div className="grid grid-cols-4">
            <span>{data.user.name}</span>
            <span>{fromNow(data.createdAt)}</span>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default BoardContainer;
