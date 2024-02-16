"use client";

import Heading from "./shared/Heading";
import Button from "./shared/Button";
import { useRouter } from "next/navigation";
interface EmptyStateProps {
  title?: string;
  subtitle?: string;
  showReset?: boolean;
}

const EmptyState = ({
  title = "일치하는 상품이 없습니다.",
  subtitle = "다른 필터를 사용하세요.",
  showReset,
}: EmptyStateProps) => {
  const router = useRouter();
  return (
    <div className="h-[60vh] flex flex-col gap-2 justify-center items-center">
      <Heading center title={title} subtitle={subtitle} />
      <div className="w-48 mt-4">
        {showReset && (
          <Button type="button" label="모든 필터 제거" onClick={() => router.push("/")} />
        )}
      </div>
    </div>
  );
};

export default EmptyState;
