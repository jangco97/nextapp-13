import { User } from "../../../prisma/generated/client";
import React from "react";
import Heading from "../Heading";
import { formatTime } from "@/helpers/dayjs";
import { IconType } from "react-icons";
import BoardCategory from "./BoardCategory";
import Avatar from "../Avatar";
interface BoardHeadProps {
  category:
    | {
        icon: IconType;
        label: string;
        description: string;
      }
    | undefined;
  title: string;
  createdAt: Date;
  user: User;
}

const BoardHead = ({ category, title, createdAt, user }: BoardHeadProps) => {
  return (
    <div className="mt-10">
      <div>
        {category && (
          <BoardCategory icon={category.icon} label={category.label} />
        )}
      </div>
      <hr />
      <div className="flex justify-between">
        <span className=" text-xl font-bold text-gray-400">{title}</span>
        <span>{formatTime(createdAt)}</span>
      </div>
      <hr />
      <div className="mt-4 mb-4 flex items-center gap-2 text-xl font-semibold">
        <Avatar src={user?.image} />
        <p>{user?.name}</p>
      </div>
      <hr />
    </div>
  );
};

export default BoardHead;
