import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import compression from 'vite-plugin-compression'

export default defineConfig({
  plugins: [react(),compression()],
  server: {
    port: 3000,
  },
  build: {
    outDir: 'dist',
  },
  base: './',
});
