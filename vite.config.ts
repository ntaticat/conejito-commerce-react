import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    VitePWA({
      registerType: "autoUpdate",
      devOptions: {
        enabled: true,
      },
      manifest: {
        name: "Conejito Commerce",
        short_name: "ConejitoCommerce",
        start_url: "/",
        icons: [
          {
            src: "/chilemorron.jpg",
            sizes: "192x192",
            type: "image/jpeg",
            purpose: "any maskable",
          },
          {
            src: "/chilemorron.jpg",
            sizes: "512x512",
            type: "image/jpeg",
            purpose: "any maskable",
          },
        ],
      },
    }),
  ],
});
