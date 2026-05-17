import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base: '/product-portfolio/' for GitHub Pages. Switch to '/' for local dev.
export default defineConfig({
  plugins: [react()],
  base: '/product-portfolio/',
})
