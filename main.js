// trabajamos así de precario porque no tenemos un proyecto completo de Vue.js

const API_BASE_URL =
  window.location.hostname === "localhost"
    ? "/api/posts" // Proxy en desarrollo
    : "https://curso-paro-production.up.railway.app/api/posts"; // Producción

const app = Vue.createApp({
  data() {
    return {
      provincias: [], // Datos de la API
    };
  },
  async created() {
    try {
      const response = await fetch(API_BASE_URL); // Proxy configurado en Vite
      if (!response.ok)
        throw new Error(`HTTP error! Status: ${response.status}`);
      const data = await response.json();
      this.provincias = data.docs; // Asignar los documentos a `provincias`
    } catch (error) {
      console.error("Error fetching provincias:", error);
    }
    console.log(this.provincias);
  },
});

//app.mount("#app");
