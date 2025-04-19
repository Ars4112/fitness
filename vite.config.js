import { defineConfig } from 'vite'
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  root: path.resolve(__dirname, 'src'),
  build: {
    outDir: '../dist'
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "/styles/variables.scss";`
      }
    }
  }
})