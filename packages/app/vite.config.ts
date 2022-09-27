import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { server } from "./config/env"
// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  server,
  plugins: [vue()]
})
