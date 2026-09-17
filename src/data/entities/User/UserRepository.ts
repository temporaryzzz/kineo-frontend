import { useQuery, type QueryClient } from '@tanstack/react-query';
import * as api from './api';
import { usersKeys } from './UserKeys';
import { invalidateQuery } from '@/data/shared/queryClient';

export class UserRepository {
  queryClient: QueryClient;

  constructor(queryClient: QueryClient) {
    this.queryClient = queryClient;
  }

  useUser() {
    return useQuery({
      queryKey: usersKeys.me(),
      queryFn: api.getUser,
      staleTime: Infinity,
      gcTime: Infinity,
      retry: false,
    });
  }

  async updateUser(_updateData: any) {
    await api.updateUser().then(() => {
      invalidateQuery([], true);
    });
  }

  async logout() {
    api.logout().then(() => {
      this.queryClient.clear();
    });
  }
}
