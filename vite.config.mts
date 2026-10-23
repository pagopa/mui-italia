import path from 'path';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './src/components'),
    },
  },
  test: {
    environment: 'jsdom', // Tells vitest to simulate browser
    globals: true, // describe/it/expect can be used without import every time
    setupFiles: './vitest.setup.ts',
  },
});
