import path from 'path';
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
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
