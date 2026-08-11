import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/nursing-pediatrics-study-page/',
  plugins: [react()],
})
