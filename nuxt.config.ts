// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "shadcn-nuxt", "@nuxtjs/google-fonts"],
  shadcn: {
    prefix: "",
    componentDir: "./components/ui",
  },
  googleFonts: {
    families: {
      "Be Vietnam Pro": [100, 300, 400, 500, 600, 700, 800, 900],
    },
  },
});
