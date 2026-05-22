import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://break-dev.github.io",
  base: "/README",
  vite: {
    plugins: [tailwindcss()],
  },
});
