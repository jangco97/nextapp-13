"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import qs from "query-string";
import Link from "next/link";
const UserReviews = () => {
  const [isAlive, setIsAlive] = useState(false);
  const router = useRouter();
  const params = useSearchParams();
  const currentQuery = qs.parse(params?.toString());
  useEffect(() => {
    if ("reviews" in currentQuery) {
      setIsAlive(true);
    }
    return () => {
      setIsAlive(false);
    };
  }, [currentQuery]);
  return isAlive && <div>UserReviews</div>;
};

export default UserReviews;
