import { User } from "../../prisma/generated/client";
import { signIn, signOut } from "next-auth/react";
import Link from "next/link";
import React from "react";

interface NavbarItemProps {
  mobile?: boolean;
  currentUser?: User | null;
}
const NavbarItem = ({ mobile, currentUser }: NavbarItemProps) => {
  return (
    <ul
      className={`text-md justify-center flex gap-4 w-full items-center ${
        mobile && "flex-col h-full"
      } `}
    >
      {" "}
      <li className="py-2 text-center border-b-4 cursor-pointer">
        <Link href={"/challenge"}>챌린지</Link>
      </li>
      <li className="py-2 text-center border-b-4 cursor-pointer">
        <Link href={"/board"}>게시판</Link>
      </li>
      <li className="py-2 text-center border-b-4 cursor-pointer">
        <Link href={"/admin"}>Admin</Link>
      </li>
      <li className="py-2 text-center border-b-4 cursor-pointer">
        <Link href={"/user"}>User</Link>
      </li>
      {currentUser ? (
        <li className="py-2 text-center border-b-4 cursor-pointer">
          <button onClick={() => signOut()}>Sign out</button>
        </li>
      ) : (
        <li className="py-2 text-center border-b-4 cursor-pointer">
          <button onClick={() => signIn()}>Sign in</button>
        </li>
      )}
    </ul>
  );
};

export default NavbarItem;
