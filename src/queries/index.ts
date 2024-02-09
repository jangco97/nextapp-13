import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
export interface QueryRes {
  favoriteIds: string[];
}
export const useGetCart = (userId: string) => {
  return useQuery<QueryRes>({
    queryKey: ["user", "cart"],
    queryFn: () => fetch("/api/usercart").then((res) => res.json()),
    staleTime: 1000 * 60,

    enabled: !!userId,
  });
};
