import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy: {
      '/api': {
        target: 'http://localhost:2000', // Backend server
        secure: false,
        changeOrigin: true,
      },
    },
  },
  plugins: [react()],
})
