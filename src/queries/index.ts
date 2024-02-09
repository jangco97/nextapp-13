import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
export interface QueryRes {
  favoriteIdsCount: number;
}
export interface ReceiveChatRes {
  unreadMessageCount: number;
}
export const useGetCart = (userId: string) => {
  return useQuery<QueryRes>({
    queryKey: ["user", "cart"],
    queryFn: () => fetch("/api/usercart").then((res) => res.json()),
    staleTime: 1000 * 60,

    enabled: !!userId,
  });
};

export const receivechat = (userId: string) => {
  return useQuery<ReceiveChatRes>({
    queryKey: ["chat"],
    queryFn: () => fetch("/api/receivechat").then((res) => res.json()),
    staleTime: 60 * 1000,
    refetchInterval: 60 * 1000,
    enabled: !!userId,
  });
};
