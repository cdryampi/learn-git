import { defineConfig } from "vite";

export default defineConfig({
  server: {
    // Configuración del servidor de desarrollo
    proxy: {
      "/api": {
        target: "https://web-production-957d3.up.railway.app/", // URL de la API
        changeOrigin: true,
      },
    },
  },
  base: "/learn-git/",
});
