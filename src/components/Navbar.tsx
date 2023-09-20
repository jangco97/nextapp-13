"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavbarItem from "./NavbarItem";
import { User } from "../../prisma/generated/client";
interface NavbarProps {
  session: any;
}
const Navbar = ({ session }: NavbarProps) => {
  console.log(session);
  return (
    <nav className="relative z-10 min-w-[928px] bg-gray-400 text-white">
      <div className="flex items-center justify-between mx-10">
        <div className="flex items-center h-14 text-3xl">
          <Link href={"/"}>Dopamine Detox</Link>
        </div>
        <div>
          <NavbarItem session={session} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
