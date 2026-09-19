import { defineConfig } from 'vite';
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
      '@ui': path.resolve(import.meta.dirname, './src/ui'),
    },
  },
});

