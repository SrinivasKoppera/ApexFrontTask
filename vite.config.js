import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'https://apexbackendtask.onrender.com' // Adjust this to your backend server's address and port
    }
  }
})