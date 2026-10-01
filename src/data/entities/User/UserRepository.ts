import { useQuery, type QueryClient } from '@tanstack/react-query';
import * as api from './api';
import { usersKeys } from './UserKeys';
import { invalidateQuery } from '@/data/shared/queryClient';

export class UserRepository {
  queryClient: QueryClient;

  constructor(queryClient: QueryClient) {
    this.queryClient = queryClient;
  }

  async login(body: { username: string; password: string }) {
    return api.login(body);
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
    await api.logout();
    this.queryClient.clear();
  }
}
