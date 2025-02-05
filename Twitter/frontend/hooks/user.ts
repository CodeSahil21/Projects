'use client';
import { useQuery } from '@tanstack/react-query';
import { graphqlClient } from '@/clients/api';
import { getCurrentUserQuery } from '@/graphql/query/user';

export const useCurrentUser = (isAuthenticated: boolean) => {
  const query = useQuery({
    queryKey: ['current-user'],
    queryFn: async () => {
      const token = localStorage.getItem('__Xtoken');
      if (!token) {
        throw new Error("User not authenticated");
      }
      try {
        const data = await graphqlClient.request(getCurrentUserQuery);
        if (!data.getCurrentUser) {
          throw new Error("User data is null");
        }
        return data;
      } catch (error) {
        console.log('Error fetching current user:', error);
        throw error;
      }
    },
    enabled: isAuthenticated, // Only run the query if the user is authenticated
    retry: 1, // Optionally, retry once on failure
  });

  return { ...query, user: query.data?.getCurrentUser };
};

