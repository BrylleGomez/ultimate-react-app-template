/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { dependencies } from './package.json';

const packages = ['react', 'react-dom'];

function renderChunks(deps: Record<string, string>) {
  const chunks = {};
  Object.keys(deps).forEach((key) => {
    if (packages.includes(key)) return;
    chunks[key] = [key];
  });
  return chunks;
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    reportCompressedSize: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: packages,
          ...renderChunks(dependencies),
        },
      },
    },
  },
});
