import { signIn, signOut } from "next-auth/react";
import Link from "next/link";
import React, { Dispatch } from "react";
interface NavbarItemProps {
  session: any;
  pricedispatch: Dispatch<any>;
}
const NavbarItem = ({ session, pricedispatch }: NavbarItemProps) => {
  console.log(session);
  return (
    <ul
      className={`flex text-md flex-col ml-5 items-start md:mr-2 md:flex-row md:justify-center md:gap-4 md:w-full md:items-center  `}
    >
      {" "}
      <li
        onClick={() => pricedispatch({ type: "0" })}
        className="py-2 text-center border-b-4 cursor-pointer"
      >
        <Link href={"/"}>Shop</Link>
      </li>
      <li
        onClick={() => pricedispatch({ type: "0" })}
        className="py-2 text-center border-b-4 cursor-pointer"
      >
        <Link href={"/board"}>Community</Link>
      </li>
      <li
        onClick={() => pricedispatch({ type: "0" })}
        className="py-2 text-center border-b-4 cursor-pointer"
      >
        <Link href={"/cart"}>Cart</Link>
      </li>
      <li
        onClick={() => pricedispatch({ type: "0" })}
        className="py-2 text-center border-b-4 cursor-pointer"
      >
        <Link href={"/user"}>MyPage</Link>
      </li>
      {session ? (
        <li
          onClick={() => pricedispatch({ type: "0" })}
          className="py-2 text-center border-b-4 cursor-pointer"
        >
          <button onClick={() => signOut()}>LogOut</button>
        </li>
      ) : (
        <li
          onClick={() => pricedispatch({ type: "0" })}
          className="py-2 text-center border-b-4 cursor-pointer"
        >
          <button onClick={() => signIn()}>LogIn</button>
        </li>
      )}{" "}
    </ul>
  );
};

export default NavbarItem;
