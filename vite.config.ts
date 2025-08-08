import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [vue(), vueJsx(), tailwindcss()],
  server: {
    host: '0.0.0.0',
    port: Number(process.env.PORT) || 8080,
    allowedHosts: ['miratake-frontend.onrender.com', 'localhost', '127.0.0.1'],
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
