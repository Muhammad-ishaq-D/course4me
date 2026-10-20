import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
    // Compresses the PNG/JPEG files in the build output; the sources in
    // src/assets and public/ are left as they are.
    ViteImageOptimizer({
      test: /\.(jpe?g|png)$/i,
      png: { quality: 80, compressionLevel: 9, palette: true },
      jpeg: { quality: 78, mozjpeg: true },
      jpg: { quality: 78, mozjpeg: true },
    }),
  ],
  server: {
    open: true,
    browser: 'chrome',
  },
})
