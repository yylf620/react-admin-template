import reactRefresh from "@vitejs/plugin-react-refresh";
import istanbul from "rollup-plugin-istanbul";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import tsconfigPaths from "vite-tsconfig-paths";
const path = require('path')
export default defineConfig(({ mode }) => ({
  resolve: {
    alias: {
      '@': path.join(__dirname,'src')
    }
  },
  server: {
    host: 'localhost',
    port: 9000,
    strictPort: true,
    open: true,
    proxy: {
      '^/api/admin/*': {
        target: 'http://192.168.10.235:81',
        changeOrigin: true
      },
       '^/api/V1/Business/*': {
        target: 'http://192.168.10.235:83',
        changeOrigin: true
      },
    }
  },
  build: {
    outDir:'dist'
  },
  plugins: [
    tsconfigPaths(),
    reactRefresh(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        theme_color: "#BD34FE",
        icons: [
          {
            src: "/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any maskable",
          },
          {
            src: "/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
    mode === "test" &&
      istanbul({
        include: ["src/**/*.tsx"],
      }),
  ],
}));
