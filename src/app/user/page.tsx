import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import React from "react";
import getCurrentUser from "../actions/getCurrentUser";

const UserPage = async () => {
  // const session = await getServerSession(authOptions);
  // console.log("session", session);

  const userData = await getCurrentUser();
  console.log("userData", userData);
  return <div>로그인된 유저가 갈 수 있는 페이지</div>;
};

export default UserPage;
