import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// IMPORTANT: base must match your GitHub repo name exactly, e.g.
// https://github.com/DeviousWings/steele-co-website -> '/steele-co-website/'
export default defineConfig({
  plugins: [react()],
  base: '/steele-co-website/',
})
