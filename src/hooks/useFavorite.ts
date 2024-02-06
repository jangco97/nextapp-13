import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useMemo } from 'react';
import { toast } from 'react-toastify';
import { useQueryClient } from '@tanstack/react-query';

interface UseFavoriteProps {
  productId: string;
  currentUser?: any;
}

const useFavorite = ({ productId, currentUser }: UseFavoriteProps) => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const hasFavorite = useMemo(() => {
    const list = currentUser?.favoriteIds || [];
    return list.includes(productId);
  }, [currentUser, productId]);

  const toggleFavorite = async (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (!currentUser) {
      toast.warn('로그인이 필요합니다.');
      return;
    }
    try {
      let request;
      if (hasFavorite) {
        request = () => axios.delete(`/api/favorites/${productId}`);
      } else {
        request = () => axios.post(`/api/favorites/${productId}`);
      }
      await request();
      queryClient.invalidateQueries({ queryKey: ['user'] });
      router.refresh();
      toast.success('성공적으로 처리되었습니다.');
    } catch (err) {
      toast.error('실패했습니다.');
    }
  };

  return {
    hasFavorite,
    toggleFavorite,
  };
};

export default useFavorite;
