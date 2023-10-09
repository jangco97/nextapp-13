"use client";

import { signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { use, useContext } from "react";

const NavbarItem = ({ session }: { session: any }) => {
  const router = useRouter();
  return (
    <ul
      className={`flex text-md flex-col ml-5 items-start md:mr-2 md:flex-row md:justify-center md:gap-4 md:w-full md:items-center  `}
    >
      {" "}
      <li className="py-2 text-center border-b-4 cursor-pointer">
        <Link href={"/"}>Shop</Link>
      </li>
      <li className="py-2 text-center border-b-4 cursor-pointer">
        <Link href={"/board"}>Community</Link>
      </li>
      <li className="py-2 text-center border-b-4 cursor-pointer">
        <Link href={"/cart"}>Cart</Link>
      </li>
      <li className="py-2 text-center border-b-4 cursor-pointer">
        <Link href={"/user"}>MyPage</Link>
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
