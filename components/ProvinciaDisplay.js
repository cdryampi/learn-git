app.component("provincia-display", {
  props: ["provincia"],
  template: `
        <div>
          <h2>{{ provincia.title }}</h2>
          <img :src="provinciaImageUrl" :alt="provincia.featuredImage.alt" />
          <p>{{ provinciaDescription }}</p>
        </div>
      `,
  computed: {
    provinciaDescription() {
      return (
        this.provincia.content.root.children[0].children[0].text ||
        "Sin descripción"
      );
    },
    provinciaImageUrl() {
      return `https://curso-paro-production.up.railway.app${this.provincia.featuredImage.url}`;
    },
  },
});
