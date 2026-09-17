import { UserRepository } from '@/data/entities/User/UserRepository';
import type { QueryClient } from '@tanstack/react-query';

export class AppContainer {
  private readonly userRepository: UserRepository;

  constructor(queryClient: QueryClient) {
    this.userRepository = new UserRepository(queryClient);
  }

  getUserRepository() {
    return this.userRepository;
  }
}
