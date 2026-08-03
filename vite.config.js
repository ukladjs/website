import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Relative so the build works both at the custom-domain root (uklad.js.org)
  // and at the GitHub Pages project URL (ukladjs.github.io/website), which is
  // what reviewers and previews hit before DNS is live.
  base: './',
})
