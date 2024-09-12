import { fileURLToPath, URL } from 'node:url'
import { resolve } from 'path';
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    vue(),
  ],
	build: {
		rollupOptions: {
			input: {
				index: resolve(__dirname, './index.html'),
				privacy: resolve(__dirname, './privacy.html'),
				terms: resolve(__dirname, './terms.html'),
			},
		},
	},
resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
