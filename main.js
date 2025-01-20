const app = Vue.createApp({
  data() {
    return {
      provincias: [], // Datos de la API
    };
  },
  async created() {
    try {
      const response = await fetch("/api/posts"); // Proxy configurado en Vite
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
