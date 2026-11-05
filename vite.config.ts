import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
    strictPort: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, './src'),
      '@entities': path.resolve(import.meta.dirname, './src/data/entities'),
      '@shared': path.resolve(import.meta.dirname, './src/data/shared'),
      '@ui': path.resolve(import.meta.dirname, './src/ui'),
    },
  },
  test: {
    environment: 'jsdom',
    setupFiles: ['./test/setup.ts'],
    include: ['test/**/*.test.{ts,tsx}'],
    globals: true,
    coverage: {
      reportOnFailure: true,
    },
  },
});

