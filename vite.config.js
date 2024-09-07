import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { config } from 'dotenv';
config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),],
  server: { port: 4000 },
  define: {
    'process.env': process.env
  }
})
