import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: '.',
  publicDir: 'public',
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: resolve(__dirname, 'index.html'),
    },
  },
});
