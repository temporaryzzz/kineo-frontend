import { QueryClient, type QueryKey } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      gcTime: 30 * 60 * 1000,
      retry: 1,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    },
    mutations: {
      retry: 0,
    },
  },
});

export function invalidateQuery(queryKey: QueryKey, exactQuery = true) {
  return queryClient.invalidateQueries({
    queryKey,
    exact: exactQuery,
    refetchType: 'active',
  });
}
