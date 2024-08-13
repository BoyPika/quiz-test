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

        },
    },
},
  plugins: [svelte(), mkcert()],
})
