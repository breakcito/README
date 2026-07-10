import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://franklincampos.com",
  base: "/",
  integrations: [
    sitemap({
      filter: (page) => !page.includes("/404"),
      changefreq: "monthly",
      priority: 0.7,
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});