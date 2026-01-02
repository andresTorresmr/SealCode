// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import vercel from "@astrojs/vercel";

import sitemap from "@astrojs/sitemap";

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: "https://sealcode.com.mx",
  output: "server",

  vite: { plugins: [tailwindcss()] },
  adapter: vercel(),
  integrations: [sitemap({
    // filter: (page) => page !== "https://example.com/secret-vip-lounge/",
  }), partytown()],
});