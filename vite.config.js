import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/CodeProBase/',  // ← заменить на имя твоего GitHub репозитория
})