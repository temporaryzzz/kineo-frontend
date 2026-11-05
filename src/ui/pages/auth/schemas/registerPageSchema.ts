import { z } from 'zod';

export const registerSchema = z
  .object({
    username: z
      .string()
      .trim()
      .min(2, 'Min. 2 chars')
      .max(18, 'Max. 18 chars'),
    password: z
      .string()
      .min(4, 'Min. 4 chars')
      .max(18, 'Max. 18 chars'),
    repeatPassword: z.string().min(1, 'Required'),
  })
  .refine((values) => values.password === values.repeatPassword, {
    path: ['repeatPassword'],
    message: 'No match',
  });

export type RegisterFormValues = z.infer<typeof registerSchema>;
