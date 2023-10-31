"use client";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const NavbarItem = ({
  session,
  data,
  chatData,
}: {
  session: any;
  data: any;
  chatData: any;
}) => {
  const router = useRouter();
  const unReadMessage = chatData?.receivedMessages?.filter(
    (message: any) => message.isRead === false
  );
  return (
    <ul
      className={`flex text-md flex-col ml-5 items-start md:mr-2 md:flex-row md:justify-center md:gap-4 md:w-full md:items-center  `}
    >
      {" "}
      <li className="py-2 text-center border-b-4 cursor-pointer">
        <Link href={"/"}>Shop</Link>
      </li>
      <li className="py-2 text-center border-b-4 cursor-pointer">
        <Link href={"/pricechart"}>시세조회</Link>
      </li>
      <li className="py-2 text-center border-b-4 cursor-pointer">
        <Link href={"/board"}>Community</Link>
      </li>
      <li className="py-2 flex justify-evenly text-center border-b-4 cursor-pointer">
        <Link href={"/cart"}>Cart</Link>
        <div className="rounded-full bg-violet-700 outline-sky-300 border-2 p-2 w-4 h-4  flex justify-center items-center text-white">
          {data?.favoriteIds?.length}
        </div>
      </li>
      <li className="py-2 text-center border-b-4 cursor-pointer">
        <Link href={"/user"}>MyPage</Link>
      </li>
      <li className="py-2 flex justify-evenly text-center border-b-4 cursor-pointer">
        <Link href={"/chat"}>chat</Link>
        <div className="rounded-full bg-violet-700 outline-sky-300 border-2 p-2 w-4 h-4  flex justify-center items-center text-white">
          {unReadMessage?.length}
        </div>
      </li>
      {session ? (
        <li className="py-2 text-center border-b-4 cursor-pointer">
          <button onClick={() => signOut()}>LogOut</button>
        </li>
      ) : (
        <li className="py-2 text-center border-b-4 cursor-pointer">
          <button onClick={() => router.push("/auth/login")}>LogIn</button>
        </li>
      )}{" "}
    </ul>
  );
};

export default NavbarItem;
