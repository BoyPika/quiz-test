import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import mkcert from'vite-plugin-mkcert'
import { resolve } from 'path'

const outDir = resolve(__dirname, 'dist')
const html = 'index.html';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
        input: {
            main: resolve(__dirname, html),
            algebra2: resolve(__dirname, 'algebra2/index.html'),
            chemistry: resolve(__dirname, 'chemistry/index.html'),
        },
    },
},
  plugins: [svelte(), mkcert()],
})
