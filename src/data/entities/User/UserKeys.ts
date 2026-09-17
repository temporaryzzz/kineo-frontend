export const baseKey = 'user' as const;

export const usersKeys = {
  me: () => [baseKey, 'me'] as const,
};
