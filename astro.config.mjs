import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    output: 'static',
    vite: {
      build: {
        rollupOptions: {
          output: {
            assetFileNames: 'assets/index.css',
          }
        }
      }
    }
  });