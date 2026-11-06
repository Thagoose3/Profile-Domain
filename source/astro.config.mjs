// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// Served from https://thagoose3.github.io/Profile-Domain/
// If you move it to a user site repo (Thagoose3.github.io), change base to "/".
export default defineConfig({
  site: "https://thagoose3.github.io",
  base: "/Profile-Domain",
  vite: {
    plugins: [tailwindcss()],
  },
});
