import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { nodePolyfills } from "vite-plugin-node-polyfills"; 

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), nodePolyfills() ],
  base: ((process.env.GITHUB_REPOSITORY ?? "") + "/").match(/(\/.*)/)?.[1],
  build: {
    rollupOptions: {
      external: [
        'C:/Users/USER/telegram-webApp/node_modules/vite-plugin-node-polyfills/node_modules/@esbuild-plugins/node-globals-polyfill/_virtual-process-polyfill_.js'
      ],
    },
  }
});
