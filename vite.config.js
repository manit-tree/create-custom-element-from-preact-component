import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import fs from 'fs';

export default defineConfig({
  define: {
    "process.env.IS_PREACT": JSON.stringify("true"),
  },
  plugins: [
    cssInjectedByJsPlugin(),
    preact()
  ],
  css: {
        transformer: 'lightningcss',
    },
    build: {
      outDir: './dist',
      minify: true,
      sourcemap: false,
      emptyOutDir: true,
      lib: {
          entry: './src/CounterComponent.jsx',
          name:'___',
          formats: ['iife'],
          fileName: (format) => `[name].[format].js`
      }
    },
    server: {
        https: {
            key: fs.readFileSync(`./server.key`),
            cert: fs.readFileSync(`./server.crt`)
        }
    }
})
