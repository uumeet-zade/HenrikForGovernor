import { defineConfig } from 'vite'

export default defineConfig({
  base: './', // Ensures all asset paths are relative, fixing blank screen on GitHub Pages
})
