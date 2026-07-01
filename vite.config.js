import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    // Raise warning threshold so normal-size GSAP/Swiper chunks don't show warnings
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        // Manual chunk splitting: vendor libs get their own long-cached files
        manualChunks: {
          // Animation libraries
          'vendor-gsap':   ['gsap'],
          'vendor-framer': ['framer-motion'],
          // Swiper — large and separately cacheable
          'vendor-swiper': ['swiper'],
          // React ecosystem
          'vendor-react':  ['react', 'react-dom', 'react-router-dom'],
        }
      }
    }
  }
});
