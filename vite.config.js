import { defineConfig } from "vite";

export default defineConfig({
  server: {
    // Configuración del servidor de desarrollo
    proxy: {
      "/api": {
        target: "https://curso-paro-production.up.railway.app/", // URL de la API
        changeOrigin: true,
      },
    },
  },
  base: "/learn-git/",
});
