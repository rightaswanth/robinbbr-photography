import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'animation-vendor': ['gsap', 'framer-motion'],
        },
      },
    },
    chunkSizeWarningLimit: 500,
  },
})
