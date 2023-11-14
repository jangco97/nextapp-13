import Link from "next/link";
import React from "react";

interface FloatingButtonProps {
  children: React.ReactNode;
  href: string;
}

const FloatingButton = ({ children, href }: FloatingButtonProps) => {
  return (
    <Link
      href={href}
      className="fixed flex items-center justify-center text-white transition-colors  bg-indigo-800/70 border-0 border-transparent rounded-full shadow-xl cursor-pointer hover:bg-indigo-500 aspect-square bottom-14 right-5 w-14"
    >
      {children}
    </Link>
  );
};

export default FloatingButton;
